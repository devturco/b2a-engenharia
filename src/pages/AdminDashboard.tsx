import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Plus, Trash2, Video, HardHat, LogOut, Upload, Loader2, Images, ChevronDown, ChevronUp, Search, X, DatabaseZap, Users, UserPlus, ShieldCheck, ToggleLeft, ToggleRight, KeyRound } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import imageCompression from "browser-image-compression";
import { obras as staticObras } from "@/data/obras";

interface Work {
    id: string;
    name: string;
    category: string;
    location: string;
    images: string[];
    galleryPath?: string;
    gallery_path?: string;
}

interface VideoData {
    id: string;
    name: string;
    path: string;
}

const AdminDashboard = () => {
    const { isAuthenticated, loading, logout, role, adminName } = useAuth();
    const [obras, setObras] = useState<Work[]>([]);
    const [allObras, setAllObras] = useState<Work[]>([]);
    const [videos, setVideos] = useState<VideoData[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [addingImagesToObra, setAddingImagesToObra] = useState(false);
    const [selectedObraId, setSelectedObraId] = useState<string | null>(null);
    const [obraAddFiles, setObraAddFiles] = useState<File[]>([]);
    const [isAddObraOpen, setIsAddObraOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSeedingAll, setIsSeedingAll] = useState(false);

    // Colaboradores (somente master)
    interface Colaborador {
        id: number;
        username: string;
        name: string;
        email: string | null;
        role: string;
        active: boolean;
        created_at: string;
    }
    const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
    const [isAddColabOpen, setIsAddColabOpen] = useState(false);
    const [newColab, setNewColab] = useState({ name: "", username: "", email: "", password: "", role: "colaborador" });
    const [isCreatingColab, setIsCreatingColab] = useState(false);
    const [isChangePwOpen, setIsChangePwOpen] = useState(false);
    const [changePwUser, setChangePwUser] = useState<Colaborador | null>(null);
    const [changePwValue, setChangePwValue] = useState("");
    const [isChangingPw, setIsChangingPw] = useState(false);

    // Form states for Obras
    const [newWork, setNewWork] = useState({ name: "", category: "", location: "", galleryPath: "" });
    const [workFiles, setWorkFiles] = useState<File[]>([]);

    // Form states for Videos
    const [newVideo, setNewVideo] = useState({ name: "", path: "" });

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            window.location.href = "/admin/login";
        } else if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated, loading]);

    const fetchData = async () => {
        // Load obras from API (fallback to static on any failure)
        let dbObras: Work[] = [];
        try {
            const obrasRes = await fetch("/api/obras.php");
            if (obrasRes.ok) {
                const obrasData = await obrasRes.json();
                dbObras = Array.isArray(obrasData)
                    ? obrasData.map((o: Work) => ({
                        ...o,
                        id: o.id.toString(),
                        images: Array.isArray(o.images) ? o.images : []
                    }))
                    : [];
            }
        } catch (error) {
            console.warn("API obras indisponível, usando dados estáticos", error);
        }
        setObras(dbObras);
        const dbNames = new Set(dbObras.map(o => o.name));
        const staticOnly = (staticObras as Work[]).filter(o => !dbNames.has(o.name));
        setAllObras([...dbObras, ...staticOnly]);

        // Colaboradores — somente master
        const storedRole = localStorage.getItem('b2a_admin_role') ?? 'master';
        if (storedRole === 'master') {
            try {
                const colabRes = await fetch('/api/users.php', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('b2a_admin_token')}`,
                        'X-Admin-User': localStorage.getItem('b2a_admin_username') ?? 'b2admin',
                    }
                });
                if (colabRes.ok) {
                    const colabData = await colabRes.json();
                    setColaboradores(Array.isArray(colabData) ? colabData : []);
                } else {
                    const err = await colabRes.json().catch(() => ({}));
                    toast.error(`Erro ao carregar usuários: ${err.error ?? colabRes.status}`);
                }
            } catch (e) {
                toast.error('Não foi possível conectar à API de usuários');
                console.error('API users:', e);
            }
        }

        // Load videos from API
        try {
            const videosRes = await fetch("/api/videos.php");
            if (videosRes.ok) {
                const videosData = await videosRes.json();
                setVideos(Array.isArray(videosData) ? videosData : []);
            }
        } catch (error) {
            console.warn("API vídeos indisponível", error);
        }
    };

    const handleWorkUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsUploading(true);
        const token = localStorage.getItem("b2a_admin_token");
        const uploadedFileNames: string[] = [];

        try {
            // 1. Gerar slug e nome da pasta de forma consistente
            const generatedFolder = newWork.name
                .normalize('NFD')                     // Remove acentos
                .replace(/[\u0300-\u036f]/g, '')      // Remove acentos
                .replace(/[^a-z0-9]/gi, '-')          // Substitui tudo que não é letra/número por hífen
                .toLowerCase()
                .replace(/-+/g, '-')                  // Remove hífens duplicados
                .replace(/^-|-$/g, '');               // Remove hífens no início/fim

            const finalFolder = newWork.galleryPath || generatedFolder;

            // 2. Otimizar e fazer upload das imagens
            for (const file of workFiles) {
                // Opções de compressão
                const options = {
                    maxSizeMB: 0.5,
                    maxWidthOrHeight: 1920,
                    useWebWorker: true,
                };

                const compressedFile = await imageCompression(file, options);

                const formData = new FormData();
                formData.append("file", compressedFile, file.name);
                formData.append("folder", finalFolder); // PHP já prefixa com obras/
                formData.append("type", "obras");

                const res = await fetch("/api/upload.php", {
                    method: "POST",
                    headers: { "Authorization": `Bearer ${token}` },
                    body: formData,
                });
                const data = await res.json();
                if (data.success) {
                    uploadedFileNames.push(data.path);
                }
            }

            // 3. Salvar no banco de dados
            const obraToSave = {
                ...newWork,
                slug: generatedFolder,
                images: uploadedFileNames,
                gallery_path: `obras/${finalFolder}`
            };

            const res = await fetch("/api/obras.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(obraToSave),
            });

            if (res.ok) {
                toast.success("Obra cadastrada com sucesso!");
                setNewWork({ name: "", category: "", location: "", galleryPath: "" });
                setWorkFiles([]);
                setIsAddObraOpen(false);
                fetchData();
            }
        } catch (error) {
            toast.error("Erro ao cadastrar obra");
        } finally {
            setIsUploading(false);
        }
    };

    const handleVideoUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem("b2a_admin_token");
        try {
            const res = await fetch("/api/videos.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newVideo),
            });

            if (res.ok) {
                toast.success("Vídeo cadastrado com sucesso!");
                setNewVideo({ name: "", path: "" });
                fetchData();
            }
        } catch (error) {
            toast.error("Erro ao cadastrar vídeo");
        }
    };

    const getImageUrl = (obra: Work, image: string): string => {
        // gallery_path (DB, snake_case) → sempre dentro de /obras/
        if (obra.gallery_path) {
            const p = obra.gallery_path.startsWith('obras/')
                ? obra.gallery_path
                : `obras/${obra.gallery_path}`;
            return `/${p.split('/').map((s: string) => encodeURIComponent(s)).join('/')}/${encodeURIComponent(image)}`;
        }
        // galleryPath (estático, camelCase) → caminho raiz do public
        if (obra.galleryPath) {
            return `/${encodeURIComponent(obra.galleryPath)}/${encodeURIComponent(image)}`;
        }
        if (isNaN(Number(obra.id))) {
            return `/obras/${encodeURIComponent(obra.name)}/${encodeURIComponent(image)}`;
        }
        const slug = obra.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/gi, '-').toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '');
        return `/obras/${encodeURIComponent(slug)}/${encodeURIComponent(image)}`;
    };

    const getObraFolder = (obra: Work): string => {
        const path = obra.gallery_path || obra.galleryPath;
        if (path) return path.startsWith('obras/') ? path : `obras/${path}`;
        if (isNaN(Number(obra.id))) return `obras/${obra.name}`;
        const slug = obra.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/gi, '-').toLowerCase().replace(/-+/g, '-').replace(/^-|-$/g, '');
        return `obras/${slug}`;
    };

    const getAdminHeaders = () => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('b2a_admin_token')}`,
        // Usa username para identificação no PHP; fallback seguro para b2admin
        'X-Admin-User': localStorage.getItem('b2a_admin_username') ?? 'b2admin',
    });

    const handleCreateColab = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreatingColab(true);
        try {
            const res = await fetch('/api/users.php', {
                method: 'POST',
                headers: getAdminHeaders(),
                body: JSON.stringify(newColab),
            });
            const data = await res.json();
            if (res.ok) {
                toast.success('Usuário criado com sucesso!');
                setNewColab({ name: '', username: '', email: '', password: '', role: 'colaborador' });
                setIsAddColabOpen(false);
                fetchData();
            } else {
                toast.error(data.error || 'Erro ao criar colaborador');
            }
        } catch {
            toast.error('Erro de conexão');
        } finally {
            setIsCreatingColab(false);
        }
    };

    const handleToggleActive = async (colab: Colaborador) => {
        try {
            const res = await fetch(`/api/users.php?id=${colab.id}`, {
                method: 'PATCH',
                headers: getAdminHeaders(),
                body: JSON.stringify({ active: !colab.active }),
            });
            if (res.ok) {
                toast.success(colab.active ? 'Colaborador desativado' : 'Colaborador ativado');
                fetchData();
            }
        } catch {
            toast.error('Erro ao atualizar colaborador');
        }
    };

    const handleOpenChangePw = (colab: Colaborador) => {
        setChangePwUser(colab);
        setChangePwValue("");
        setIsChangePwOpen(true);
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!changePwUser) return;
        setIsChangingPw(true);
        try {
            const res = await fetch(`/api/users.php?id=${changePwUser.id}`, {
                method: 'PATCH',
                headers: getAdminHeaders(),
                body: JSON.stringify({ password: changePwValue }),
            });
            if (res.ok) {
                toast.success(`Senha de ${changePwUser.name} alterada com sucesso!`);
                setIsChangePwOpen(false);
            } else {
                const data = await res.json();
                toast.error(data.error || 'Erro ao alterar senha');
            }
        } catch {
            toast.error('Erro de conexão');
        } finally {
            setIsChangingPw(false);
        }
    };

    const handleDeleteColab = async (colab: Colaborador) => {
        if (!confirm(`Remover o usuário "${colab.name}"? Esta ação não pode ser desfeita.`)) return;
        try {
            const res = await fetch(`/api/users.php?id=${colab.id}`, {
                method: 'DELETE',
                headers: getAdminHeaders(),
            });
            if (res.ok) {
                toast.success('Colaborador removido');
                fetchData();
            }
        } catch {
            toast.error('Erro ao remover colaborador');
        }
    };

    const handleSeedAll = async () => {
        // Obras estáticas que ainda NÃO estão no banco
        const pending = allObras.filter(o => isNaN(Number(o.id)));
        if (pending.length === 0) {
            toast.info("Todas as obras já estão no banco de dados.");
            return;
        }
        if (!confirm(`Importar ${pending.length} obra(s) estática(s) para o banco de dados?`)) return;
        setIsSeedingAll(true);
        let success = 0;
        let failed = 0;
        for (const obra of pending) {
            const id = await seedObraToDb(obra);
            if (id) success++; else failed++;
        }
        setIsSeedingAll(false);
        if (failed === 0) {
            toast.success(`${success} obra(s) importada(s) com sucesso!`);
        } else {
            toast.warning(`${success} importada(s), ${failed} com erro.`);
        }
        fetchData();
    };

    const seedObraToDb = async (obra: Work): Promise<string | null> => {
        const token = localStorage.getItem("b2a_admin_token");
        try {
            const res = await fetch("/api/obras.php", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({
                    slug: obra.id,
                    name: obra.name,
                    category: obra.category,
                    location: obra.location,
                    images: obra.images,
                    gallery_path: getObraFolder(obra)
                })
            });
            if (res.ok) {
                const data = await res.json();
                return data.id?.toString() || null;
            }
        } catch (error) {
            console.error("Erro ao importar obra:", error);
        }
        return null;
    };

    const handleDeleteImage = async (obra: Work, image: string) => {
        if (!confirm(`Excluir a foto "${image}"?`)) return;
        const token = localStorage.getItem("b2a_admin_token");
        let obraId = obra.id;
        if (isNaN(Number(obra.id))) {
            const newId = await seedObraToDb(obra);
            if (!newId) { toast.error("Erro ao preparar obra para gerenciamento"); return; }
            obraId = newId;
        }
        try {
            await fetch("/api/delete-image.php", {
                method: "DELETE",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({ folder: getObraFolder(obra), filename: image })
            });
            const newImages = obra.images.filter(img => img !== image);
            await fetch(`/api/obras.php?id=${obraId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({ images: newImages })
            });
            toast.success("Foto excluída");
            fetchData();
        } catch (error) {
            toast.error("Erro ao excluir foto");
        }
    };

    const handleAddImagesToObra = async (obra: Work, files: File[]) => {
        setAddingImagesToObra(true);
        const token = localStorage.getItem("b2a_admin_token");
        let obraId = obra.id;
        if (isNaN(Number(obra.id))) {
            const newId = await seedObraToDb(obra);
            if (!newId) { toast.error("Erro ao preparar obra para gerenciamento"); setAddingImagesToObra(false); return; }
            obraId = newId;
        }
        const folder = getObraFolder(obra);
        const uploadFolder = folder.startsWith('obras/') ? folder.substring(6) : folder;
        const newFileNames: string[] = [];
        try {
            for (const file of files) {
                const compressed = await imageCompression(file, { maxSizeMB: 0.5, maxWidthOrHeight: 1920, useWebWorker: true });
                const formData = new FormData();
                formData.append("file", compressed, file.name);
                formData.append("folder", uploadFolder);
                formData.append("type", "obras");
                const res = await fetch("/api/upload.php", {
                    method: "POST",
                    headers: { "Authorization": `Bearer ${token}` },
                    body: formData
                });
                const data = await res.json();
                if (data.success) newFileNames.push(data.path);
            }
            const updatedImages = [...obra.images, ...newFileNames];
            await fetch(`/api/obras.php?id=${obraId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({ images: updatedImages })
            });
            toast.success(`${newFileNames.length} foto(s) adicionada(s)`);
            setObraAddFiles([]);
            fetchData();
        } catch (error) {
            toast.error("Erro ao adicionar fotos");
        } finally {
            setAddingImagesToObra(false);
        }
    };

    const deleteWork = async (id: string) => {
        const token = localStorage.getItem("b2a_admin_token");
        if (!confirm("Tem certeza que deseja excluir esta obra?")) return;
        try {
            await fetch(`/api/obras.php?id=${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            toast.success("Obra removida");
            fetchData();
        } catch (error) {
            toast.error("Erro ao remover");
        }
    };

    const deleteVideo = async (id: string) => {
        const token = localStorage.getItem("b2a_admin_token");
        if (!confirm("Tem certeza que deseja excluir este vídeo?")) return;
        try {
            await fetch(`/api/videos.php?id=${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            toast.success("Vídeo removido");
            fetchData();
        } catch (error) {
            toast.error("Erro ao remover");
        }
    };

    if (loading) return null;

    return (
        <Layout>
            <div className="container py-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-primary">Painel de Controle</h1>
                        <p className="text-muted-foreground text-lg">Gerencie o conteúdo do seu site</p>
                    </div>
                    <Button variant="outline" onClick={logout} className="flex items-center gap-2">
                        <LogOut className="h-4 w-4" /> Sair
                    </Button>
                </div>

                <Tabs defaultValue="obras" className="space-y-6">
                    <TabsList className={`grid w-full ${role === 'master' ? 'grid-cols-3 max-w-lg' : 'grid-cols-2 max-w-md'}`}>
                        <TabsTrigger value="obras" className="flex items-center gap-2">
                            <HardHat className="h-4 w-4" /> Obras
                        </TabsTrigger>
                        <TabsTrigger value="videos" className="flex items-center gap-2">
                            <Video className="h-4 w-4" /> Vídeos
                        </TabsTrigger>
                        {role === 'master' && (
                            <TabsTrigger value="colaboradores" className="flex items-center gap-2">
                                <Users className="h-4 w-4" /> Colaboradores
                            </TabsTrigger>
                        )}
                    </TabsList>

                    {/* OBRAS TAB */}
                    <TabsContent value="obras" className="space-y-4">

                        {/* Modal de Cadastro */}
                        <Dialog open={isAddObraOpen} onOpenChange={(open) => { setIsAddObraOpen(open); if (!open) { setNewWork({ name: "", category: "", location: "", galleryPath: "" }); setWorkFiles([]); } }}>
                            <DialogContent className="max-w-lg">
                                <DialogHeader>
                                    <DialogTitle>Adicionar Nova Obra</DialogTitle>
                                    <DialogDescription>Cadastre um novo projeto no seu portfólio</DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleWorkUpload} className="space-y-4 pt-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="work-name">Nome da Obra</Label>
                                        <Input
                                            id="work-name"
                                            placeholder="Ex: ArcelorMittal - Itatiaiuçu - MG"
                                            value={newWork.name}
                                            onChange={e => setNewWork({ ...newWork, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="work-cat">Categoria</Label>
                                            <Input
                                                id="work-cat"
                                                list="category-suggestions"
                                                placeholder="Selecione ou digite..."
                                                value={newWork.category}
                                                onChange={e => setNewWork({ ...newWork, category: e.target.value })}
                                                required
                                            />
                                            <datalist id="category-suggestions">
                                                {Array.from(new Set(allObras.map(o => o.category))).map(cat => (
                                                    <option key={cat} value={cat} />
                                                ))}
                                                <option value="Terra Armada" />
                                                <option value="Solo Grampeado" />
                                                <option value="Cortina Atirantada" />
                                                <option value="Muro a Flexão" />
                                                <option value="Mineração" />
                                            </datalist>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="work-loc">Localização (Cidade - UF)</Label>
                                            <Input
                                                id="work-loc"
                                                placeholder="Ex: São Paulo - SP"
                                                value={newWork.location}
                                                onChange={e => setNewWork({ ...newWork, location: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="work-folder">Pasta das Imagens <span className="text-muted-foreground font-normal">(opcional)</span></Label>
                                        <Input
                                            id="work-folder"
                                            placeholder="Deixe vazio para gerar automaticamente"
                                            value={newWork.galleryPath}
                                            onChange={e => setNewWork({ ...newWork, galleryPath: e.target.value })}
                                        />
                                        <p className="text-[10px] text-muted-foreground leading-tight">
                                            Se você já subiu fotos via FTP, coloque o caminho da pasta aqui.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="work-images">Imagens</Label>
                                        <Input
                                            id="work-images"
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            onChange={e => setWorkFiles(Array.from(e.target.files || []))}
                                            required
                                        />
                                        {workFiles.length > 0 && (
                                            <p className="text-sm text-primary font-medium">{workFiles.length} arquivo(s) selecionado(s)</p>
                                        )}
                                    </div>
                                    <Button type="submit" className="w-full" disabled={isUploading}>
                                        {isUploading ? (
                                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Otimizando e Enviando...</>
                                        ) : (
                                            <><Plus className="mr-2 h-4 w-4" />Cadastrar Obra</>
                                        )}
                                    </Button>
                                </form>
                            </DialogContent>
                        </Dialog>

                        {/* Toolbar: busca + botão cadastrar */}
                        <div className="flex items-center gap-3">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                <Input
                                    placeholder="Buscar obra por nome, categoria ou localização..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    className="pl-9 pr-9"
                                />
                                {searchQuery && (
                                    <button
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                        onClick={() => setSearchQuery("")}
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>
                            {allObras.some(o => isNaN(Number(o.id))) && (
                                <Button
                                    variant="outline"
                                    className="shrink-0"
                                    onClick={handleSeedAll}
                                    disabled={isSeedingAll}
                                    title="Importar todas as obras estáticas para o banco de dados"
                                >
                                    {isSeedingAll
                                        ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Importando...</>
                                        : <><DatabaseZap className="h-4 w-4 mr-2" />Importar tudo</>}
                                </Button>
                            )}
                            <Button onClick={() => setIsAddObraOpen(true)} className="shrink-0">
                                <Plus className="h-4 w-4 mr-2" /> Cadastrar Obra
                            </Button>
                        </div>

                        {/* Lista de Obras com Gerenciamento de Fotos */}
                        <Card>
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle>Obras Cadastradas</CardTitle>
                                        <CardDescription className="mt-1">
                                            {searchQuery
                                                ? `${allObras.filter(o => [o.name, o.category, o.location].join(' ').toLowerCase().includes(searchQuery.toLowerCase())).length} resultado(s) para "${searchQuery}"`
                                                : `${allObras.length} obra(s) no total`
                                            }
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {allObras.length === 0 ? (
                                        <p className="text-center text-muted-foreground py-8">Carregando obras...</p>
                                    ) : (() => {
                                        const filtered = searchQuery
                                            ? allObras.filter(o => [o.name, o.category, o.location].join(' ').toLowerCase().includes(searchQuery.toLowerCase()))
                                            : allObras;
                                        if (filtered.length === 0) return (
                                            <p className="text-center text-muted-foreground py-8">Nenhuma obra encontrada para "{searchQuery}".</p>
                                        );
                                        return filtered.map(obra => {
                                            const isDbObra = !isNaN(Number(obra.id));
                                            const isExpanded = selectedObraId === obra.id;
                                            return (
                                                <div key={obra.id} className="border rounded-lg overflow-hidden">
                                                    <div className="flex items-center justify-between p-3 hover:bg-muted/30 transition-colors">
                                                        <div className="flex-1 min-w-0 mr-4">
                                                            <div className="flex items-center gap-2 flex-wrap">
                                                                <h4 className="font-semibold text-sm">{obra.name}</h4>
                                                                <Badge variant="secondary" className="text-xs shrink-0">
                                                                    {obra.images.length} foto{obra.images.length !== 1 ? 's' : ''}
                                                                </Badge>
                                                                {!isDbObra && (
                                                                    <Badge variant="outline" className="text-xs shrink-0 text-amber-600 border-amber-300">
                                                                        Estática
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <p className="text-xs text-muted-foreground mt-0.5">{obra.category} · {obra.location}</p>
                                                        </div>
                                                        <div className="flex items-center gap-2 shrink-0">
                                                            <Button
                                                                variant={isExpanded ? "default" : "outline"}
                                                                size="sm"
                                                                onClick={() => { setSelectedObraId(isExpanded ? null : obra.id); setObraAddFiles([]); }}
                                                            >
                                                                <Images className="h-4 w-4 mr-1.5" />
                                                                {isExpanded ? "Fechar" : "Gerenciar Fotos"}
                                                                {isExpanded ? <ChevronUp className="h-3 w-3 ml-1" /> : <ChevronDown className="h-3 w-3 ml-1" />}
                                                            </Button>
                                                            {isDbObra && (
                                                                <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => deleteWork(obra.id)}>
                                                                    <Trash2 className="h-4 w-4" />
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {isExpanded && (
                                                        <div className="border-t bg-muted/20 p-4 space-y-4">
                                                            {!isDbObra && (
                                                                <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded p-2">
                                                                    Esta obra está como dado estático do site. Ao adicionar ou remover fotos, ela será importada para o banco de dados automaticamente.
                                                                </div>
                                                            )}
                                                            {obra.images.length > 0 ? (
                                                                <div>
                                                                    <p className="text-sm font-medium mb-3">
                                                                        Fotos atuais ({obra.images.length}) — passe o mouse e clique na lixeira para excluir
                                                                    </p>
                                                                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                                                                        {obra.images.map((img, idx) => (
                                                                            <div key={idx} className="relative group aspect-square rounded overflow-hidden border bg-muted">
                                                                                <img
                                                                                    src={getImageUrl(obra, img)}
                                                                                    alt={img}
                                                                                    className="w-full h-full object-cover"
                                                                                    loading="lazy"
                                                                                />
                                                                                <button
                                                                                    title={`Excluir: ${img}`}
                                                                                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
                                                                                    onClick={() => handleDeleteImage(obra, img)}
                                                                                >
                                                                                    <Trash2 className="h-4 w-4 text-white" />
                                                                                </button>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <p className="text-sm text-muted-foreground text-center py-2">Nenhuma foto cadastrada.</p>
                                                            )}
                                                            <div className="space-y-2 pt-2 border-t">
                                                                <Label className="text-sm font-medium">Adicionar novas fotos</Label>
                                                                <Input
                                                                    type="file"
                                                                    multiple
                                                                    accept="image/*"
                                                                    onChange={e => setObraAddFiles(Array.from(e.target.files || []))}
                                                                />
                                                                {obraAddFiles.length > 0 && (
                                                                    <Button onClick={() => handleAddImagesToObra(obra, obraAddFiles)} disabled={addingImagesToObra} size="sm">
                                                                        {addingImagesToObra
                                                                            ? <><Loader2 className="h-4 w-4 animate-spin mr-2" />Enviando...</>
                                                                            : <><Upload className="h-4 w-4 mr-2" />Enviar {obraAddFiles.length} foto(s)</>
                                                                        }
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        });
                                    })()}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* VIDEOS TAB */}
                    <TabsContent value="videos" className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Adicionar Novo Vídeo</CardTitle>
                                    <CardDescription>Cadastre um link ou caminho de vídeo</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleVideoUpload} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="video-name">Título do Vídeo</Label>
                                            <Input
                                                id="video-name"
                                                value={newVideo.name}
                                                onChange={e => setNewVideo({ ...newVideo, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="video-path">Caminho do arquivo (ex: /midias/video.mp4)</Label>
                                            <Input
                                                id="video-path"
                                                value={newVideo.path}
                                                onChange={e => setNewVideo({ ...newVideo, path: e.target.value })}
                                                required
                                            />
                                            <p className="text-xs text-muted-foreground">Nota: Atualmente o upload de vídeos grandes deve ser feito via FTP na pasta /public/midias para garantir estabilidade.</p>
                                        </div>
                                        <Button type="submit" className="w-full">
                                            <Plus className="mr-2 h-4 w-4" /> Cadastrar Vídeo
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Vídeos Cadastrados</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {videos.length === 0 ? (
                                            <p className="text-center text-muted-foreground py-8">Nenhum vídeo encontrado no banco.</p>
                                        ) : (
                                            videos.map(video => (
                                                <div key={video.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                                    <div>
                                                        <h4 className="font-semibold">{video.name}</h4>
                                                        <p className="text-xs text-muted-foreground">{video.path}</p>
                                                    </div>
                                                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => deleteVideo(video.id)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    {/* COLABORADORES TAB — somente master */}
                    {role === 'master' && (
                        <TabsContent value="colaboradores" className="space-y-4">

                            {/* Modal alterar senha */}
                            <Dialog open={isChangePwOpen} onOpenChange={setIsChangePwOpen}>
                                <DialogContent className="max-w-sm">
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center gap-2">
                                            <KeyRound className="h-5 w-5" /> Alterar Senha
                                        </DialogTitle>
                                        <DialogDescription>Nova senha para <strong>{changePwUser?.name}</strong> (@{changePwUser?.username})</DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleChangePassword} className="space-y-4 pt-2">
                                        <div className="space-y-2">
                                            <Label>Nova senha</Label>
                                            <Input
                                                type="password"
                                                placeholder="Mínimo 6 caracteres"
                                                value={changePwValue}
                                                onChange={e => setChangePwValue(e.target.value)}
                                                required
                                                minLength={6}
                                                autoFocus
                                            />
                                        </div>
                                        <Button type="submit" className="w-full" disabled={isChangingPw}>
                                            {isChangingPw
                                                ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Salvando...</>
                                                : <><KeyRound className="h-4 w-4 mr-2" />Salvar Nova Senha</>}
                                        </Button>
                                    </form>
                                </DialogContent>
                            </Dialog>

                            {/* Modal alterar senha */}
                            <Dialog open={isChangePwOpen} onOpenChange={setIsChangePwOpen}>
                                <DialogContent className="max-w-sm">
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center gap-2">
                                            <KeyRound className="h-5 w-5" /> Alterar Senha
                                        </DialogTitle>
                                        <DialogDescription>Nova senha para <strong>{changePwUser?.name}</strong> (@{changePwUser?.username})</DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleChangePassword} className="space-y-4 pt-2">
                                        <div className="space-y-2">
                                            <Label>Nova senha</Label>
                                            <Input
                                                type="password"
                                                placeholder="Mínimo 6 caracteres"
                                                value={changePwValue}
                                                onChange={e => setChangePwValue(e.target.value)}
                                                required
                                                minLength={6}
                                                autoFocus
                                            />
                                        </div>
                                        <Button type="submit" className="w-full" disabled={isChangingPw}>
                                            {isChangingPw
                                                ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Salvando...</>
                                                : <><KeyRound className="h-4 w-4 mr-2" />Salvar Nova Senha</>}
                                        </Button>
                                    </form>
                                </DialogContent>
                            </Dialog>

                            {/* Modal criar colaborador */}
                            <Dialog open={isAddColabOpen} onOpenChange={setIsAddColabOpen}>
                                <DialogContent className="max-w-md">
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center gap-2">
                                            <UserPlus className="h-5 w-5" /> Novo Usuário
                                        </DialogTitle>
                                        <DialogDescription>Crie um acesso master ou colaborador para gerenciar o conteúdo do site.</DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleCreateColab} className="space-y-4 pt-2">
                                        <div className="space-y-2">
                                            <Label>Nome completo</Label>
                                            <Input
                                                placeholder="Ex: João Silva"
                                                value={newColab.name}
                                                onChange={e => setNewColab({ ...newColab, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Usuário</Label>
                                                <Input
                                                    placeholder="joaosilva"
                                                    value={newColab.username}
                                                    onChange={e => setNewColab({ ...newColab, username: e.target.value.toLowerCase().replace(/\s/g, '') })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Senha</Label>
                                                <Input
                                                    type="password"
                                                    placeholder="Mínimo 6 caracteres"
                                                    value={newColab.password}
                                                    onChange={e => setNewColab({ ...newColab, password: e.target.value })}
                                                    required
                                                    minLength={6}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>E-mail <span className="text-muted-foreground text-xs">(opcional)</span></Label>
                                                <Input
                                                    type="email"
                                                    placeholder="joao@email.com"
                                                    value={newColab.email}
                                                    onChange={e => setNewColab({ ...newColab, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Perfil</Label>
                                                <Select value={newColab.role} onValueChange={v => setNewColab({ ...newColab, role: v })}>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="colaborador">Colaborador</SelectItem>
                                                        <SelectItem value="master">Master</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <Button type="submit" className="w-full" disabled={isCreatingColab}>
                                            {isCreatingColab
                                                ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Criando...</>
                                                : <><UserPlus className="h-4 w-4 mr-2" />Criar {newColab.role === 'master' ? 'Master' : 'Colaborador'}</>}
                                        </Button>
                                    </form>
                                </DialogContent>
                            </Dialog>

                            {/* Toolbar */}
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <h2 className="text-lg font-semibold">Colaboradores</h2>
                                    <p className="text-sm text-muted-foreground">{colaboradores.length} usuário(s) com acesso ao painel</p>
                                </div>
                                <Button onClick={() => setIsAddColabOpen(true)}>
                                    <UserPlus className="h-4 w-4 mr-2" /> Novo Colaborador
                                </Button>
                            </div>

                            {/* Lista */}
                            <Card>
                                <CardContent className="p-0">
                                    {colaboradores.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
                                            <Users className="h-10 w-10 text-muted-foreground/40" />
                                            <p className="text-muted-foreground">Nenhum colaborador cadastrado.</p>
                                            <Button variant="outline" size="sm" onClick={() => setIsAddColabOpen(true)}>
                                                <UserPlus className="h-4 w-4 mr-2" /> Criar primeiro colaborador
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="divide-y">
                                            {colaboradores.map(colab => (
                                                <div key={colab.id} className="flex items-center justify-between px-4 py-3 hover:bg-muted/40 transition-colors">
                                                    <div className="flex items-center gap-3 min-w-0">
                                                        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${colab.role === 'master' ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                                                            <span className={`text-sm font-semibold ${colab.role === 'master' ? '' : 'text-primary'}`}>{colab.name.charAt(0).toUpperCase()}</span>
                                                        </div>
                                                        <div className="min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <p className="font-medium text-sm truncate">{colab.name}</p>
                                                                {colab.role === 'master' && (
                                                                    <Badge className="text-xs shrink-0 bg-primary"><ShieldCheck className="h-3 w-3 mr-1" />Master</Badge>
                                                                )}
                                                                {colab.role !== 'master' && (
                                                                    <Badge variant={colab.active ? 'default' : 'secondary'} className="text-xs shrink-0">
                                                                        {colab.active ? 'Ativo' : 'Inativo'}
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <p className="text-xs text-muted-foreground truncate">@{colab.username}{colab.email ? ` · ${colab.email}` : ''}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 shrink-0">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => handleOpenChangePw(colab)}
                                                            title="Alterar senha"
                                                        >
                                                            <KeyRound className="h-4 w-4" />
                                                        </Button>
                                                        {colab.role !== 'master' && (
                                                            <>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    onClick={() => handleToggleActive(colab)}
                                                                    title={colab.active ? 'Desativar acesso' : 'Ativar acesso'}
                                                                    className="gap-1.5 text-xs"
                                                                >
                                                                    {colab.active
                                                                        ? <><ToggleRight className="h-4 w-4 text-green-600" />Desativar</>
                                                                        : <><ToggleLeft className="h-4 w-4" />Ativar</>}
                                                                </Button>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="icon"
                                                                    className="text-destructive hover:bg-destructive/10"
                                                                    onClick={() => handleDeleteColab(colab)}
                                                                    title="Remover usuário"
                                                                >
                                                                    <Trash2 className="h-4 w-4" />
                                                                </Button>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
                                <ShieldCheck className="h-4 w-4 shrink-0" />
                                <span>Colaboradores têm acesso ao painel para gerenciar obras e vídeos. Apenas o master pode gerenciar colaboradores.</span>
                            </div>
                        </TabsContent>
                    )}

                </Tabs>
            </div>
        </Layout>
    );
};

export default AdminDashboard;

import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Plus, Trash2, Video, HardHat, LogOut, Upload, Loader2 } from "lucide-react";
import imageCompression from "browser-image-compression";

interface Work {
    id: string;
    name: string;
    category: string;
    location: string;
    images: string[];
}

interface VideoData {
    id: string;
    name: string;
    path: string;
}

const AdminDashboard = () => {
    const { isAuthenticated, loading, logout } = useAuth();
    const [obras, setObras] = useState<Work[]>([]);
    const [videos, setVideos] = useState<VideoData[]>([]);
    const [isUploading, setIsUploading] = useState(false);

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
        try {
            const obrasRes = await fetch("/api/obras.php");
            const obrasData = await obrasRes.json();
            setObras(Array.isArray(obrasData) ? obrasData : []);

            const videosRes = await fetch("/api/videos.php");
            const videosData = await videosRes.json();
            setVideos(Array.isArray(videosData) ? videosData : []);
        } catch (error) {
            console.error("Erro ao carregar dados", error);
        }
    };

    const handleWorkUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsUploading(true);
        const token = localStorage.getItem("b2a_admin_token");
        const uploadedFileNames: string[] = [];

        try {
            // 1. Otimizar e fazer upload das imagens
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
                formData.append("folder", newWork.galleryPath || newWork.name.replace(/\s+/g, '-').toLowerCase());
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

            // 2. Salvar no banco de dados
            const generatedFolder = newWork.name.replace(/\s+/g, '-').toLowerCase();
            const finalGalleryPath = newWork.galleryPath || `obras/${generatedFolder}`;

            const obraToSave = {
                ...newWork,
                slug: newWork.name.replace(/\s+/g, '-').toLowerCase(),
                images: uploadedFileNames,
                gallery_path: finalGalleryPath
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
                    <TabsList className="grid w-full grid-cols-2 max-w-md">
                        <TabsTrigger value="obras" className="flex items-center gap-2">
                            <HardHat className="h-4 w-4" /> Obras
                        </TabsTrigger>
                        <TabsTrigger value="videos" className="flex items-center gap-2">
                            <Video className="h-4 w-4" /> Vídeos
                        </TabsTrigger>
                    </TabsList>

                    {/* OBRAS TAB */}
                    <TabsContent value="obras" className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Form de Nova Obra */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Adicionar Nova Obra</CardTitle>
                                    <CardDescription>Cadastre um novo projeto no seu portfólio</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleWorkUpload} className="space-y-4">
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
                                                    {Array.from(new Set(obras.map(o => o.category))).map(cat => (
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
                                                <Label htmlFor="work-loc">Localizacão (Cidade - UF)</Label>
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
                                            <Label htmlFor="work-folder">Pasta das Imagens (Opcional)</Label>
                                            <Input
                                                id="work-folder"
                                                placeholder="Ex: obras/novo-projeto (Deixe vazio para automático)"
                                                value={newWork.galleryPath}
                                                onChange={e => setNewWork({ ...newWork, galleryPath: e.target.value })}
                                            />
                                            <p className="text-[10px] text-muted-foreground leading-tight">
                                                Se você já subiu fotos via FTP, coloque o caminho da pasta aqui. Caso contrário, as fotos abaixo serão salvas na pasta padrão.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="work-images">Imagens (Múltiplas)</Label>
                                            <Input
                                                id="work-images"
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={e => setWorkFiles(Array.from(e.target.files || []))}
                                                required
                                            />
                                            {workFiles.length > 0 && (
                                                <p className="text-sm text-primary font-medium">{workFiles.length} arquivos selecionados</p>
                                            )}
                                        </div>
                                        <Button type="submit" className="w-full" disabled={isUploading}>
                                            {isUploading ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Otimizando Imagens e Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <Plus className="mr-2 h-4 w-4" /> Cadastrar Obra
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Lista de Obras */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Obras Cadastradas</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {obras.length === 0 ? (
                                            <p className="text-center text-muted-foreground py-8">Nenhuma obra encontrada no banco.</p>
                                        ) : (
                                            obras.map(obra => (
                                                <div key={obra.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                                    <div>
                                                        <h4 className="font-semibold">{obra.name}</h4>
                                                        <p className="text-xs text-muted-foreground">{obra.category} | {obra.location}</p>
                                                    </div>
                                                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => deleteWork(obra.id)}>
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
                </Tabs>
            </div>
        </Layout>
    );
};

export default AdminDashboard;

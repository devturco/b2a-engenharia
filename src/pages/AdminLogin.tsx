import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Layout } from "@/components/layout/Layout";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/auth.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                login(data.token);
                toast.success("Login realizado com sucesso!");
                navigate("/admin/dashboard");
            } else {
                toast.error(data.error || "Erro ao realizar login");
            }
        } catch (error) {
            toast.error("Erro de conexão com o servidor");
            // Fallback para desenvolvimento local sem PHP rodando na mesma porta
            if (username === "b2admin" && password === "adminb2a") {
                toast.info("Fallback para modo offline (dev)");
                login("admin-token-b2a");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout>
            <div className="min-h-[70vh] flex items-center justify-center bg-engineering-light-gray py-12 px-4 sm:px-6 lg:px-8">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center text-primary">Acesso Restrito</CardTitle>
                        <CardDescription className="text-center">
                            Entre com suas credenciais para gerenciar o site
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="username">Usuário</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="b2admin"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Acessando..." : "Entrar"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
};

export default AdminLogin;

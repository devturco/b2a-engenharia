# Guia de Deploy - B2A Engenharia

## 🚀 Como fazer o deploy do projeto

### 1. Desenvolvimento Local
Para executar o projeto localmente:
```bash
npm run dev
```
O projeto estará disponível em: http://localhost:8080

### 2. Build para Produção
Para gerar os arquivos otimizados para produção:
```bash
npm run build
```

### 3. Scripts Disponíveis
- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run build:prod` - Gera build de produção (explícito)
- `npm run build:clean` - Limpa a pasta dist e gera novo build
- `npm run preview` - Visualiza o build de produção localmente

### 4. Deploy em Hospedagem Compartilhada

#### Arquivos para Upload
Após executar `npm run build`, todos os arquivos necessários estarão na pasta `dist/`:
- `index.html` - Arquivo principal
- `assets/` - Pasta com CSS e JavaScript otimizados
- `favicon.ico` - Ícone do site
- `robots.txt` - Arquivo para SEO
- `placeholder.svg` - Imagens do projeto

#### Passos para Deploy
1. Execute `npm run build` para gerar os arquivos de produção
2. Faça upload de TODOS os arquivos da pasta `dist/` para o diretório público da sua hospedagem (geralmente `public_html/` ou `www/`)
3. Certifique-se de manter a estrutura de pastas (especialmente a pasta `assets/`)

#### Importante
- ⚠️ **SEMPRE** execute `npm run build` antes de fazer upload
- ⚠️ Mantenha a estrutura de pastas da pasta `dist/`
- ⚠️ O arquivo `index.html` deve estar na raiz do diretório público

### 5. Configuração para SPA (Single Page Application)
Se sua hospedagem suporta, configure o servidor para redirecionar todas as rotas para `index.html` para que o React Router funcione corretamente.

### 6. Verificação
Após o upload, acesse seu domínio para verificar se o site está funcionando corretamente.
/**
 * Mock API server para desenvolvimento local.
 * Replica todos os endpoints PHP sem precisar de PHP ou MySQL.
 * Dados persistem em dev-db.json durante a sessão.
 *
 * Iniciar: npm run dev:local
 */

import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;
const DB_FILE = path.join(__dirname, "dev-db.json");

// ── Helpers de banco de dados (JSON) ──────────────────────────────────────────

function readDb() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ obras: [], videos: [] }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
}

function writeDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// ── Middlewares ───────────────────────────────────────────────────────────────

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// ── Auth ──────────────────────────────────────────────────────────────────────

app.post("/api/auth.php", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    // Em dev qualquer credencial funciona; use admin / admin para testar
    console.log(`[auth] login como "${username}"`);
    res.json({ success: true, token: "admin-token-b2a", message: "Login realizado com sucesso" });
  } else {
    res.status(400).json({ error: "Dados incompletos" });
  }
});

// ── Obras ─────────────────────────────────────────────────────────────────────

app.get("/api/obras.php", (req, res) => {
  const db = readDb();
  res.json(db.obras);
});

app.post("/api/obras.php", (req, res) => {
  const db = readDb();
  const obra = { ...req.body, id: Date.now().toString() };
  // Garante que images é array
  if (!Array.isArray(obra.images)) obra.images = [];
  db.obras.push(obra);
  writeDb(db);
  console.log(`[obras] criada: ${obra.name}`);
  res.json({ message: "Obra criada com sucesso", id: obra.id });
});

app.patch("/api/obras.php", (req, res) => {
  const { id } = req.query;
  const db = readDb();
  const idx = db.obras.findIndex((o) => o.id === id);
  if (idx === -1) return res.status(404).json({ error: "Obra não encontrada" });
  if (req.body.images !== undefined) {
    db.obras[idx].images = req.body.images;
    console.log(`[obras] imagens atualizadas id=${id} (${req.body.images.length} fotos)`);
  }
  writeDb(db);
  res.json({ message: "Imagens atualizadas" });
});

app.delete("/api/obras.php", (req, res) => {
  const { id } = req.query;
  const db = readDb();
  const before = db.obras.length;
  db.obras = db.obras.filter((o) => o.id !== id);
  writeDb(db);
  console.log(`[obras] removida id=${id} (eram ${before}, agora ${db.obras.length})`);
  res.json({ message: "Obra removida" });
});

// ── Vídeos ────────────────────────────────────────────────────────────────────

app.get("/api/videos.php", (req, res) => {
  const db = readDb();
  res.json(db.videos);
});

app.post("/api/videos.php", (req, res) => {
  const db = readDb();
  const video = { ...req.body, id: Date.now().toString() };
  db.videos.push(video);
  writeDb(db);
  console.log(`[videos] criado: ${video.name}`);
  res.json({ message: "Vídeo criado", id: video.id });
});

app.delete("/api/videos.php", (req, res) => {
  const { id } = req.query;
  const db = readDb();
  db.videos = db.videos.filter((v) => v.id !== id);
  writeDb(db);
  res.json({ message: "Vídeo removido" });
});

// ── Upload de imagens ─────────────────────────────────────────────────────────

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = req.body.folder || "geral";
    const type = req.body.type || "obras";
    const dir =
      type === "midias"
        ? path.join(__dirname, "public", "midias")
        : path.join(__dirname, "public", "obras", folder);
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload.php", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Nenhum arquivo enviado" });
  console.log(`[upload] ${req.file.originalname} → ${req.file.destination}`);
  res.json({ success: true, path: req.file.originalname });
});

// ── Excluir imagem ────────────────────────────────────────────────────────────

app.delete("/api/delete-image.php", (req, res) => {
  const { folder, filename } = req.body;
  if (!folder || !filename) return res.status(400).json({ error: "Parâmetros inválidos" });
  const filePath = path.join(__dirname, "public", folder, path.basename(filename));
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`[delete-image] removido: ${filePath}`);
  } else {
    console.log(`[delete-image] não encontrado (ok): ${filePath}`);
  }
  res.json({ success: true });
});

// ── Start ─────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`\n✅ Mock API rodando em http://localhost:${PORT}`);
  console.log(`   Banco de dados local: dev-db.json`);
  console.log(`   Login: qualquer usuário/senha funciona em dev\n`);
});

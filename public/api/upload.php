<?php
include_once "config.php";
verifyToken();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];
    $folder = isset($_POST['folder']) ? $_POST['folder'] : 'geral';
    $type = isset($_POST['type']) ? $_POST['type'] : 'obras'; // 'obras' ou 'midias'

    $baseDir = "../";
    if ($type === 'midias') {
        $targetDir = $baseDir . "midias/";
    } else {
        $targetDir = $baseDir . "obras/" . $folder . "/";
    }

    if (!file_exists($targetDir)) {
        mkdir($targetDir, 0777, true);
    }

    $fileName = basename($file['name']);
    $targetFilePath = $targetDir . $fileName;

    if (move_uploaded_file($file['tmp_name'], $targetFilePath)) {
        echo json_encode([
            "success" => true,
            "path" => $fileName
        ]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Erro ao mover arquivo"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Nenhum arquivo enviado"]);
}
?>
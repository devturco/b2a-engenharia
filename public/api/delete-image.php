<?php
include_once "config.php";
verifyToken();

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->folder) || empty($data->filename)) {
        http_response_code(400);
        echo json_encode(["error" => "Parâmetros inválidos"]);
        exit;
    }

    // Prevent path traversal
    $folder = str_replace(['..', '//'], ['', '/'], $data->folder);
    $folder = trim($folder, '/');
    $filename = basename($data->filename);

    if (empty($folder) || empty($filename)) {
        http_response_code(400);
        echo json_encode(["error" => "Caminho inválido"]);
        exit;
    }

    $filepath = "../" . $folder . "/" . $filename;

    if (file_exists($filepath)) {
        if (unlink($filepath)) {
            echo json_encode(["success" => true]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Não foi possível excluir o arquivo"]);
        }
    } else {
        // File not found, but treat as success (already deleted or never existed)
        echo json_encode(["success" => true, "note" => "Arquivo não encontrado no servidor"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
}
?>

<?php
include_once "config.php";

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $query = "SELECT * FROM videos ORDER BY created_at DESC";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $videos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($videos);
        break;

    case 'POST':
        verifyToken();
        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->name) && !empty($data->path)) {
            $query = "INSERT INTO videos (name, path) VALUES (:name, :path)";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(":name", $data->name);
            $stmt->bindParam(":path", $data->path);

            if ($stmt->execute()) {
                echo json_encode(["message" => "Vídeo cadastrado", "id" => $conn->lastInsertId()]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Erro ao cadastrar vídeo"]);
            }
        }
        break;

    case 'DELETE':
        verifyToken();
        if (isset($_GET['id'])) {
            $query = "DELETE FROM videos WHERE id = :id";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(":id", $_GET['id']);
            if ($stmt->execute()) {
                echo json_encode(["message" => "Vídeo removido"]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Erro ao remover vídeo"]);
            }
        }
        break;
}
?>
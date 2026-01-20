<?php
include_once "config.php";

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $query = "SELECT * FROM obras ORDER BY created_at DESC";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $obras = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Converter strings JSON para arrays PHP
        foreach ($obras as &$obra) {
            $obra['images'] = json_decode($obra['images']);
        }

        echo json_encode($obras);
        break;

    case 'POST':
        verifyToken();
        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->name) && !empty($data->category)) {
            $query = "INSERT INTO obras (slug, name, category, location, images, gallery_path) 
                      VALUES (:slug, :name, :category, :location, :images, :gallery_path)";
            $stmt = $conn->prepare($query);

            $images_json = json_encode($data->images);

            $stmt->bindParam(":slug", $data->slug);
            $stmt->bindParam(":name", $data->name);
            $stmt->bindParam(":category", $data->category);
            $stmt->bindParam(":location", $data->location);
            $stmt->bindParam(":images", $images_json);
            $stmt->bindParam(":gallery_path", $data->gallery_path);

            if ($stmt->execute()) {
                echo json_encode(["message" => "Obra criada com sucesso", "id" => $conn->lastInsertId()]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Erro ao criar obra"]);
            }
        }
        break;

    case 'DELETE':
        verifyToken();
        if (isset($_GET['id'])) {
            $query = "DELETE FROM obras WHERE id = :id";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(":id", $_GET['id']);
            if ($stmt->execute()) {
                echo json_encode(["message" => "Obra removida"]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Erro ao remover obra"]);
            }
        }
        break;
}
?>
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
            $query = "INSERT INTO obras (slug, name, category, location, images, gallery_path, latitude, longitude) 
                      VALUES (:slug, :name, :category, :location, :images, :gallery_path, :latitude, :longitude)";
            $stmt = $conn->prepare($query);

            $images_json = json_encode($data->images);
            $latitude  = isset($data->latitude)  && $data->latitude  !== '' ? (float)$data->latitude  : null;
            $longitude = isset($data->longitude) && $data->longitude !== '' ? (float)$data->longitude : null;

            $stmt->bindParam(":slug", $data->slug);
            $stmt->bindParam(":name", $data->name);
            $stmt->bindParam(":category", $data->category);
            $stmt->bindParam(":location", $data->location);
            $stmt->bindParam(":images", $images_json);
            $stmt->bindParam(":gallery_path", $data->gallery_path);
            $stmt->bindParam(":latitude", $latitude);
            $stmt->bindParam(":longitude", $longitude);

            if ($stmt->execute()) {
                echo json_encode(["message" => "Obra criada com sucesso", "id" => $conn->lastInsertId()]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Erro ao criar obra"]);
            }
        }
        break;

    case 'PUT':
        verifyToken();
        if (isset($_GET['id'])) {
            $data = json_decode(file_get_contents("php://input"));
            $latitude  = isset($data->latitude)  && $data->latitude  !== '' ? (float)$data->latitude  : null;
            $longitude = isset($data->longitude) && $data->longitude !== '' ? (float)$data->longitude : null;
            $query = "UPDATE obras SET latitude = :latitude, longitude = :longitude WHERE id = :id";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(":latitude", $latitude);
            $stmt->bindParam(":longitude", $longitude);
            $stmt->bindParam(":id", $_GET['id']);
            if ($stmt->execute()) {
                echo json_encode(["message" => "Coordenadas atualizadas"]);
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Erro ao atualizar coordenadas"]);
            }
        }
        break;

    case 'PATCH':
        verifyToken();
        if (isset($_GET['id'])) {
            $data = json_decode(file_get_contents("php://input"));
            if (isset($data->images)) {
                $images_json = json_encode($data->images);
                $query = "UPDATE obras SET images = :images WHERE id = :id";
                $stmt = $conn->prepare($query);
                $stmt->bindParam(":images", $images_json);
                $stmt->bindParam(":id", $_GET['id']);
                if ($stmt->execute()) {
                    echo json_encode(["message" => "Imagens atualizadas"]);
                } else {
                    http_response_code(500);
                    echo json_encode(["error" => "Erro ao atualizar imagens"]);
                }
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
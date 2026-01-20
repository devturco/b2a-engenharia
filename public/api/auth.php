<?php
include_once "config.php";

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->username) && !empty($data->password)) {
    $query = "SELECT * FROM users WHERE username = :username LIMIT 1";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(":username", $data->username);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && $data->password === $user['password']) {
        // Sucesso no login
        echo json_encode([
            "success" => true,
            "token" => "admin-token-b2a",
            "message" => "Login realizado com sucesso"
        ]);
    } else {
        http_response_code(401);
        echo json_encode(["error" => "Usuário ou senha inválidos"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Dados incompletos"]);
}
?>
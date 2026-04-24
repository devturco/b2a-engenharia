<?php
include_once "config.php";

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->username) && !empty($data->password)) {
    // Compara a senha usando SHA2-256 direto na query (evita expor o hash no PHP)
    $query = "SELECT id, username, name, role, active
              FROM users
              WHERE username = :username
                AND password = SHA2(:password, 256)
              LIMIT 1";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(":username", $data->username);
    $stmt->bindParam(":password", $data->password);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        if (!$user['active']) {
            http_response_code(403);
            echo json_encode(["error" => "Usuário desativado. Contate o administrador."]);
            exit();
        }

        echo json_encode([
            "success" => true,
            "token"   => "admin-token-b2a",
            "role"    => $user['role'],   // 'master' ou 'colaborador'
            "name"    => $user['name'],
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
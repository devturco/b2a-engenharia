<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

// Configurações do Banco de Dados
$host = "localhost";
$db_name = "b2a_engenharia"; // Altere se o nome for diferente no seu phpMyAdmin
$username = "root";          // Geralmente root no local, altere para o da hospedagem
$password = "";              // Geralmente vazio no local, altere para o da hospedagem

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->exec("set names utf8");
} catch(PDOException $exception) {
    echo json_encode(["error" => "Conexão falhou: " . $exception->getMessage()]);
    exit();
}

function verifyToken() {
    // Para simplificar, vamos usar um token estático ou validar a sessão.
    // Em um cenário real, usaríamos JWT ou Session.
    // Para este MVP, vamos validar se o header Authorization está presente.
    if (!isset($_SERVER['HTTP_AUTHORIZATION']) || $_SERVER['HTTP_AUTHORIZATION'] !== 'Bearer admin-token-b2a') {
        http_response_code(401);
        echo json_encode(["error" => "Não autorizado"]);
        exit();
    }
}
?>

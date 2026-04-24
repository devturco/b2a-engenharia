<?php
include_once "config.php";

$method = $_SERVER['REQUEST_METHOD'];

/**
 * Verifica se o usuário autenticado possui role 'master'.
 * Exige header Authorization (token estático) + header X-Admin-User (username).
 */
function verifyMaster(PDO $conn): void
{
    // Verifica token
    if (
        !isset($_SERVER['HTTP_AUTHORIZATION']) ||
        $_SERVER['HTTP_AUTHORIZATION'] !== 'Bearer admin-token-b2a'
    ) {
        http_response_code(401);
        echo json_encode(["error" => "Não autorizado"]);
        exit();
    }

    // Verifica role pelo username enviado no header
    $username = isset($_SERVER['HTTP_X_ADMIN_USER']) ? trim($_SERVER['HTTP_X_ADMIN_USER']) : '';
    if (!$username) {
        http_response_code(403);
        echo json_encode(["error" => "Acesso negado: identificação de usuário ausente"]);
        exit();
    }

    $stmt = $conn->prepare("SELECT role FROM users WHERE username = :username AND active = 1 LIMIT 1");
    $stmt->bindParam(":username", $username);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user || $user['role'] !== 'master') {
        http_response_code(403);
        echo json_encode(["error" => "Acesso negado: apenas o administrador master pode gerenciar colaboradores"]);
        exit();
    }
}

switch ($method) {

    // ── GET: lista todos os usuários (master + colaboradores) ─────────────────
    case 'GET':
        verifyMaster($conn);
        $stmt = $conn->prepare(
            "SELECT id, username, name, email, role, active, created_at
             FROM users
             ORDER BY FIELD(role, 'master', 'colaborador'), created_at ASC"
        );
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        foreach ($users as &$u) {
            $u['id']     = (int) $u['id'];
            $u['active'] = (bool) $u['active'];
        }
        echo json_encode($users);
        break;

    // ── POST: cria um colaborador ────────────────────────────────────────────
    case 'POST':
        verifyMaster($conn);
        $data = json_decode(file_get_contents("php://input"));

        if (empty($data->username) || empty($data->password) || empty($data->name)) {
            http_response_code(400);
            echo json_encode(["error" => "Campos obrigatórios: username, password, name"]);
            exit();
        }

        // Verifica duplicidade de username
        $chk = $conn->prepare("SELECT id FROM users WHERE username = :username LIMIT 1");
        $chk->bindParam(":username", $data->username);
        $chk->execute();
        if ($chk->fetch()) {
            http_response_code(409);
            echo json_encode(["error" => "Nome de usuário já existe"]);
            exit();
        }

        $email    = !empty($data->email) ? $data->email : null;
        $role     = (!empty($data->role) && in_array($data->role, ['master', 'colaborador'])) ? $data->role : 'colaborador';
        $stmt = $conn->prepare(
            "INSERT INTO users (username, password, role, name, email, active, created_by)
             VALUES (:username, SHA2(:password, 256), :role, :name, :email, 1,
                    (SELECT id FROM users u2 WHERE u2.username = :creator LIMIT 1))"
        );
        $creator = isset($_SERVER['HTTP_X_ADMIN_USER']) ? trim($_SERVER['HTTP_X_ADMIN_USER']) : '';
        $stmt->bindParam(":username", $data->username);
        $stmt->bindParam(":password", $data->password);
        $stmt->bindParam(":role",     $role);
        $stmt->bindParam(":name",     $data->name);
        $stmt->bindParam(":email",    $email);
        $stmt->bindParam(":creator",  $creator);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Usuário criado com sucesso", "id" => (int) $conn->lastInsertId()]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Erro ao criar colaborador"]);
        }
        break;

    // ── PATCH: atualiza dados / ativa-desativa ───────────────────────────────
    case 'PATCH':
        verifyMaster($conn);
        if (!isset($_GET['id'])) {
            http_response_code(400);
            echo json_encode(["error" => "ID não informado"]);
            exit();
        }
        $id   = (int) $_GET['id'];
        $data = json_decode(file_get_contents("php://input"));

        $fields = [];
        $params = [":id" => $id];

        if (isset($data->active)) {
            $fields[]          = "active = :active";
            $params[":active"] = $data->active ? 1 : 0;
        }
        if (!empty($data->name)) {
            $fields[]         = "name = :name";
            $params[":name"]  = $data->name;
        }
        if (isset($data->email)) {
            $fields[]          = "email = :email";
            $params[":email"]  = $data->email ?: null;
        }
        if (!empty($data->password)) {
            $fields[]             = "password = SHA2(:password, 256)";
            $params[":password"]  = $data->password;
        }

        if (empty($fields)) {
            http_response_code(400);
            echo json_encode(["error" => "Nenhum campo para atualizar"]);
            exit();
        }

        $sql  = "UPDATE users SET " . implode(", ", $fields) . " WHERE id = :id AND role = 'colaborador'";
        $stmt = $conn->prepare($sql);
        foreach ($params as $key => $val) {
            $stmt->bindValue($key, $val);
        }

        if ($stmt->execute()) {
            echo json_encode(["message" => "Colaborador atualizado"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Erro ao atualizar colaborador"]);
        }
        break;

    // ── DELETE: remove colaborador ───────────────────────────────────────────
    case 'DELETE':
        verifyMaster($conn);
        if (!isset($_GET['id'])) {
            http_response_code(400);
            echo json_encode(["error" => "ID não informado"]);
            exit();
        }
        $id   = (int) $_GET['id'];
        $stmt = $conn->prepare("DELETE FROM users WHERE id = :id AND role = 'colaborador'");
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Colaborador removido"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Erro ao remover colaborador"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método não permitido"]);
}
?>

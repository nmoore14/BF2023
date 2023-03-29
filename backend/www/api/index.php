<?php
require __DIR__."/bootstrap.php";

// Load the API controllers
require PROJECT_ROOT_PATH . "controller/UserController.php";
// require PROJECT_ROOT_PATH . "/controller/";

$api_paths = array('admin', 'user', 'events');

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$uri = explode("/", $uri);

$api_index = array_search("api", $uri);

$uri_api_path = $uri[$api_index + 2];
$uri_api_method = $uri[$api_index + 3];

if((isset($uri[3]) && !in_array($uri_api_path, $api_paths)) || !isset($uri[4])) {
  header("HTTP/1.1 404 Not Found");
  exit();
}

// Initialize API controllers
$userController = new UserController();

// Get the routes
if ($uri_api_path == 'user') {
  $data = json_decode(file_get_contents('php://input'), true);
  $strMethodName = $uri_api_method . "User";

  if ($uri_api_method != 'get') {
    $userController->{$strMethodName}($data);
  } else {
    $userController->{$strMethodName}();
  }
}
?>

<?php
include_once PROJECT_ROOT_PATH . 'src/Database.php';

class UserController extends BaseController {
  protected $users = null;

  public function __construct() {
    try {
      $this->users = new Database();
    } catch (Error $e) {
      die('Failed to build user database: ' . $e->getMessage());
    }

    return $this->users;
  }

  public function getUser() {
    $data = $this->users->fetch('users');

    if($data) {
      $this->sendOutput(
        json_encode($data),
        array('Content-Type: application/json', 'HTTP/1.1 200 OK')
      );
    } else {
      $this->sendOutput(
        json_encode(array(
          'error'
        )),
        array('Content-Type: application/json', 'error')
      );
    }
  }
}

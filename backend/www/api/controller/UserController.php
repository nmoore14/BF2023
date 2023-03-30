<?php
include_once PROJECT_ROOT_PATH . 'src/Database.php';

class UserController extends BaseController
{
  protected $users = null;

  public function __construct()
  {
    try {
      $this->users = new Database();
    } catch (Error $e) {
      die('Failed to build user database: ' . $e->getMessage());
    }

    return $this->users;
  }

  private function generateToken($studentId) {
    $string = sha1((rand())) . $studentId;
    $tokenString = substr($string, 0, 16);
    return $tokenString;
  }

  private function hashPassword($password) {
    return password_hash($password, PASSWORD_DEFAULT);
  }

  private function updateValidUser($data) {
    $updateData = [
      "activated" => 1,
      "password" => $this->hashPassword($data["password"]),
      "student_id" => $data["studentId"]
    ];

    $userUpdated = $this->users->updateUser($updateData);

    if ($userUpdated) {
      $this->sendOutput(
        json_encode(array("student_id" => $data["studentId"],"updated" => true, "activated" => true)),
        array('Content-Type: application/json', 'HTTP/1.1 200 OK')
      );
    } else {
      $this->sendOutput(
        json_encode(array(
          "student_id" => $data["student_id"],
          "activated" => false,
        )),
        array('Content-Type: application/json', 'error')
      );
    }
  }

  public function findValidUser($data) {
    $validUser = $this->users->checkValidUser($data["studentId"]);

    if($validUser) {
      $this->sendOutput(
        json_encode($validUser),
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

  public function activateUser($data)
  {
    $this->updateValidUser($data);
  }

  public function loginUser($data) {
    $loginData = [
      "student_id" => $data["studentId"],
    ];

    $user = $this->users->checkLogin($loginData);

    $validLogin = password_verify($data["password"], $user[0]["password"]);

    if ($validLogin) {
      $this->sendOutput(
        json_encode($data),
        array('Content-Type: application/json', 'HTTP/1.1 200 OK')
      );
    } else {
      $this->sendOutput(
        json_encode(array(
          $loginData,
          'error'
        )),
        array('Content-Type: application/json', 'error')
      );
    }
  }

  public function getUser()
  {
    $data = $this->users->fetch('users');

    if ($data) {
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

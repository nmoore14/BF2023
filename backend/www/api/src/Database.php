<?php
include_once 'Config.php';

class Database extends Config {
  public function checkValidUser($data) {
    $sql = "SELECT student_id, activated FROM users WHERE student_id=?";
    $req = $this->conn->prepare($sql);
    $req->execute([$data]);

    return $req->fetchAll();
  }

  public function updateUser($data) {
    try {
      $sql = "UPDATE users SET activated=:activated,password=:password WHERE student_id=:student_id";
      $stmt = $this->conn->prepare($sql);
      $stmt->execute($data);
      return true;
    } catch (PDOException $e) {
      print_r($e);
      return false;
    }
  }

  public function checkLogin($data) {
    $sql = "SELECT student_id, password FROM users WHERE student_id=:student_id";
    $req = $this->conn->prepare($sql);
    $req->execute($data);

    return $req->fetchAll();
  }

  public function fetch($table) {
    $sql = '';

    switch ($table) {
      case 'users':
        $sql = 'SELECT * FROM `users`';
        break;
      default:
        break;
    }

    $req = $this->conn->prepare($sql);
    $req->execute();
    $rows = $req->fetchAll();

    return $rows;
  }
}

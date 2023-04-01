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

  public function fetchUserData($data) {
    $sql = "SELECT u.student_id,
            u.first_name,
            u.last_name,
            ue.keynote_signup AS attending_keynote,
            ue.session1_signup AS session1_id,
            ue.session2_signup AS session2_id,
            ue.alt_signup AS alt_id
            FROM users u
            LEFT JOIN user_events ue ON u.student_id = ue.student_id
            WHERE u.student_id=:student_id
    ";

    $req = $this->conn->prepare($sql);
    $req->execute($data);

    return $req->fetchAll();
  }

  public function updateUserAttendance($data) {
    $keys = [];
    foreach($data as $key => $value) {
      array_push($keys, $key . "=:" . $key);
    }
    try {
      $sql = "UPDATE user_events SET ";
      $sql = $sql . implode(',', $keys) . " WHERE student_id=:student_id";
      $stmt = $this->conn->prepare($sql);
      $stmt->execute($data);
      return true;
    } catch (PDOException $e) {
      print_r($e);
      return false;
    }
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

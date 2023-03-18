<?php
include_once 'Config.php';

class Database extends Config {
  public function fetch($table) {
    var_dump($table);
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

<?php

class Config {
  // DB Details
  private const DBHOST = 'db';
  private const DBNAME = 'lamp_bf2023';
  private const DBUSER = 'nmoore_bf2023';
  private const DBPASS = 'password_2023';

  // Data source
  private $dbs = 'mysql:host=' . self::DBHOST . ';dbname=' . self::DBNAME . '';

  // DB Connection
  protected $conn = null;

  // Constructor
  public function __construct() {
    try {
      $this->conn = new PDO($this->dbs, self::DBUSER, self::DBPASS);
      $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      die('Connection Failed : ' . $e->getMessage());
    }

    return $this->conn;
  }

  // Clean and Sanitize the data
  public function clean_input($data) {
    $data = strip_tags($data);
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
    $data = trim($data);

    return $data;
  }

  // Convert to JSON
  public function message($content, $status) {
    return json_encode(['message' => $content, 'error' => $status]);
  }
}
?>

<?php
use DotEnv;

(new DotEnv(__DIR__ . '../.env'))->load();

class Config {
  // DB Details
  private const DBHOST = getenv('DBHOST');
  private const DBNAME = getenv('DBNAME');
  private const DBUSER = getenv('DBUSER');
  private const DBPASS = getenv('DBPASS');

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

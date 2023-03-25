CREATE TABLE lamp_bf2023.users (
  user_id INT NOT NULL AUTO_INCREMENT,
  student_id VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  class VARCHAR(50) NULL,
  activated INT(3) NOT NULL DEFAULT 0,
  password VARCHAR(255) NOT NULL DEFAULT 'bf2023!',
  token VARCHAR(255),
  PRIMARY KEY (user_id)
);

CREATE TABLE lamp_bf2023.admins (
  admin_id INT NOT NULL AUTO_INCREMENT,
  admin_email VARCHAR(100) NOT NULL,
  admin_first_name VARCHAR(50) NOT NULL,
  admin_last_name VARCHAR(50) NOT NULL,
  admin_permission VARCHAR(255) NOT NULL,
  admin_token VARCHAR(255),
  PRIMARY KEY (admin_id)
);

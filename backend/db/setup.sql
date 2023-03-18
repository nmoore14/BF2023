CREATE TABLE lamp_bf2023.users (
  user_id INT NOT NULL AUTO_INCREMENT,
  student_id INT NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
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

CREATE TABLE lamp_bf2023.users (
  user_id INT NOT NULL AUTO_INCREMENT,
  student_id VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  class VARCHAR(50) NULL,
  activated INT(3) NOT NULL DEFAULT 0,
  password VARCHAR(255) NOT NULL DEFAULT 'bf2023!',
  token VARCHAR(255),
  PRIMARY KEY (user_id),
  INDEX (student_id)
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

CREATE TABLE lamp_bf2023.user_events (
  id INT NOT NULL AUTO_INCREMENT,
  student_id VARCHAR(50) NOT NULL,
  keynote_signup INT NOT NULL DEFAULT 0,
  session1_signup INT NOT NULL DEFAULT 0,
  session2_signup INT NOT NULL DEFAULT 0,
  alt_signup INT NOT NULL DEFAULT 0,
  keynote_attendance INT NOT NULL DEFAULT 0,
  session1_attendance INT NOT NULL DEFAULT 0,
  session2_attendance INT NOT NULL DEFAULT 0,
  alt_attendance INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  INDEX (student_id),
  FOREIGN KEY (student_id) REFERENCES users(student_id) ON DELETE CASCADE
);

CREATE TABLE lamp_bf2023.speakers (
  id INT NOT NULL AUTO_INCREMENT,
  speaker_first_name VARCHAR(255) NOT NULL,
  speaker_last_name VARCHAR(255) NOT NULL,
  speaker_prefix VARCHAR(255),
  PRIMARY KEY (id),
  INDEX (id)
);

CREATE TABLE lamp_bf2023.events (
  id INT NOT NULL AUTO_INCREMENT,
  session VARCHAR(255) NOT NULL,
  speaker_id INT NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  attendance_link_open TIMESTAMP NOT NULL,
  attendance_link_close TIMESTAMP NOT NULL,
  PRIMARY KEY (id),
  INDEX (speaker_id),
  FOREIGN KEY (speaker_id) REFERENCES speakers(id) ON DELETE CASCADE
);

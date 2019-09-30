CREATE DATABASE IF NOT EXISTS cows_list;

USE cows_list;


-- CREATE TABLE student (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(100) NOT NULL, classroom VARCHAR(40) NOT NULL, PRIMARY KEY (id));

          -- username: 'Valjean',
          -- message: 'In mercy\'s name, three days is all I need.',
          -- roomname: 'Hello'

DROP TABLE IF EXISTS cows;

CREATE TABLE cows(
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(18) NOT NULL UNIQUE,
  description VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `cows` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `cows` (`id`,`name`,`description`) VALUES
-- ('','','');
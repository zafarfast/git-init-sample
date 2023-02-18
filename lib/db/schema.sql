DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  dept_name VARCHAR(50));

CREATE TABLE role1 (
    id INT,
    title VARCHAR(50),
    salary INT,
    department_id INT ,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
    );

  
CREATE TABLE employee (
  id INT ,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY(role_id)
  REFERENCES role1(id)
  ON DELETE SET NULL
);




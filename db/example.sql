DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE department (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  name VARCHAR(30) NOT NULL
); 

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER NOT NULL,
  manager_id INTEGER NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employees(id)
);

INSERT INTO department (name)
VALUES 
('Front Desk'),
('Medical Assistants'),
('Doctors'),
('Billing');

INSERT INTO role (title, salary, department_id)
VALUES 
('Front desk personel', '40000', 1),
('Lead front desk personel', '60000', 1),
('MA', '50000', 2),
('MA lead', '75000', 2),
('Dr', '150000', 3),
('Bill staff', '70000', 4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
('omar', 'valsam', 2),
('leslie', 'guerrero', 1),
('trisha', 'torres', 4),
('kim', 'parry', 3),
('kirti', 'sivakoti', 5),
('tera', 'idunno', 6);



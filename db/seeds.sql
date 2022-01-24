INSERT INTO department (id, name)
VALUES 
(1, 'Front Desk'),
(2, 'Medical Assistants'),
(3, 'Doctors'),
(4, 'Billing');

INSERT INTO role (id, title, salary, department_id)
VALUES 
(1, 'Front desk personel', '40000',1),
(2, 'Lead front desk personel', '60000', 1),
(3, 'MA', '50000', 2),
(4, 'MA lead', '75000', 2),
(5, 'Dr', '150000', 3),
(6, 'Bill staff', '70000', 4);

INSERT INTO employees (id, first_name, last_name, role_id)
VALUES
(1, 'omar', 'valsam', 2),
(2, 'leslie', 'guerrero', 1),
(3, 'trisha', 'torres', 4),
(4, 'kim', 'parry', 3),
(5, 'kirti', 'sivakoti', 5),
(6, 'tera', 'idunno', 6);



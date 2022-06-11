use employees_db;

INSERT INTO department(name)

VALUES
('Sales');
('Legal');
('IT');
('Finance');

INSERT INTO role
(title, salary, department_id)
VALUES
('Sales Consultant', 50000, 1),
('Sales Representative', 40000, 1),
('Legal Advisor', 60000, 2),
('Lawyer', 70000, 2),
('IT Project Manager', 55000, 3),
('Software Engineer', 45000, 3),
('Auditor', 35000, 4),
('Accountant', 26000, 4),

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Luca', 'Terry', 1, NULL),
('Darius', 'Stubbs', 2, 1),
('Makayla', 'Grimes', 3, NULL),
('Luca', 'Terry', 4, 3),
('Luca', 'Terry', 5, NULL),
('Luca', 'Terry', 6, 5),
('Luca', 'Terry', 7, NULL),
('Luca', 'Terry', 8, 7),
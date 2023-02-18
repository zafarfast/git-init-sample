INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Alice", "Parket",111,4),
       (2, "Bob", "Dylon",444,3),
       (3, "Garry", "Kumar",222,4),
       (4, "Charlie", "Ryan",333, null);

INSERT INTO role1 (id, title, salary, department_id)
VALUES (111, "Manager", 100000,11),
       (222, "Assistant", 60000,33),
       (333, "CEO",250000,22),
       (444, "CFO",20000,44);

INSERT INTO department (id, dept_name)
VALUES (11, "Finance"),
       (22, "Operations"),
       (33, "IT"),
       (44, "Marketing");

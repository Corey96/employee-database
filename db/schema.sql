drop database if exists employee_db;
create database employee_db;

use employee_db;

create table department (
id int not null,
employee_name varchar(30) not null,
primary key (id)
);


create table _role (
    id int not null,
    title varchar(30) not null,
    salary decimal, 
    department_id int not null,
    foreign key (employee_id) references employee(id)
)


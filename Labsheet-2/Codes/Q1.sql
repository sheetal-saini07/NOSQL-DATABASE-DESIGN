CREATE DATABASE CollegeDB;
USE CollegeDB;

CREATE TABLE Student (
 Student_ID INT PRIMARY KEY,
 Name VARCHAR(50),
 Course VARCHAR(30),
 Semester INT,
 Marks INT
);

INSERT INTO Student VALUES
(1,'Aman','BCA',3,78),
(2,'Riya','BCA',3,85),
(3,'Neha','BBA',2,72),
(4,'Rahul','BCA',4,80),
(5,'Priya','BBA',2,90);

SELECT * FROM Student;

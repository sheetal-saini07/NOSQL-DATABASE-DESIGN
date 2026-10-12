CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {
 'class':'SimpleStrategy',
 'replication_factor':1
};

USE CollegeDB;

CREATE TABLE IF NOT EXISTS Students (
 Student_ID int PRIMARY KEY,
 Name text,
 Course text,
 Semester int,
 Marks int
);

INSERT INTO Students VALUES (1,'Aman','BCA',3,78);
INSERT INTO Students VALUES (2,'Riya','BCA',3,85);
INSERT INTO Students VALUES (3,'Neha','BBA',2,72);
INSERT INTO Students VALUES (4,'Rahul','BCA',4,80);
INSERT INTO Students VALUES (5,'Priya','BBA',2,90);

SELECT * FROM Students;
SELECT * FROM Students WHERE Course='BCA' ALLOW FILTERING;

UPDATE Students SET Marks=88 WHERE Student_ID=1;

DELETE FROM Students WHERE Student_ID=5;

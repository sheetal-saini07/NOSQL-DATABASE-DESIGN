// Q3. Insert a single student document
use("StudentDB");

db.Students.insertOne({
  RollNumber: 101,
  Name: "Rahul",
  Department: "BCA",
  Semester: 3,
  CGPA: 8.0
});

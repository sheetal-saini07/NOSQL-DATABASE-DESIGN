// Q4. Insert multiple student documents
use("StudentDB");

db.Students.insertMany([
  {
    RollNumber: 102,
    Name: "Priya",
    Department: "BCA",
    Semester: 3,
    CGPA: 8.2
  },
  {
    RollNumber: 103,
    Name: "Aman",
    Department: "BCA",
    Semester: 4,
    CGPA: 7.8
  },
  {
    RollNumber: 104,
    Name: "Neha",
    Department: "BSc",
    Semester: 3,
    CGPA: 8.5
  }
]);

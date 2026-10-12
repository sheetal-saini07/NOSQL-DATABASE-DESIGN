use("StudentDB");
db.Students.updateOne(
  { RollNumber: 101 },
  { $set: { Semesters: 5 } }
);

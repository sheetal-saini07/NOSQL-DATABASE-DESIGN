use("StudentDB");
db.Students.updateOne(
  { RollNumber: 101 },
  { $set: { Department: "CSE" } }
);

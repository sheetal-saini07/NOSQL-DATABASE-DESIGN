// MongoDB single-server CRUD operations
use('LocalCollegeDB');

db.Students.insertMany([
 {Student_ID:1,Name:'Aman',Course:'BCA',Marks:78},
 {Student_ID:2,Name:'Riya',Course:'BCA',Marks:85},
 {Student_ID:3,Name:'Neha',Course:'BBA',Marks:72},
 {Student_ID:4,Name:'Rahul',Course:'BCA',Marks:80},
 {Student_ID:5,Name:'Priya',Course:'BBA',Marks:90}
]);

// Read all records
db.Students.find();

// Update a record
db.Students.updateOne(
 {Student_ID:1},
 {$set:{Marks:88}}
);

// Delete a record
db.Students.deleteOne({Student_ID:5});

// Verify remaining records
db.Students.find();

use('CollegeDB');

db.Students.insertMany([
 {Student_ID:1,Name:'Aman',Course:'BCA',Semester:3,Marks:78},
 {Student_ID:2,Name:'Riya',Course:'BCA',Semester:3,Marks:85},
 {Student_ID:3,Name:'Neha',Course:'BBA',Semester:2,Marks:72},
 {Student_ID:4,Name:'Rahul',Course:'BCA',Semester:4,Marks:80},
 {Student_ID:5,Name:'Priya',Course:'BBA',Semester:2,Marks:90}
]);

db.Students.find();
db.Students.find({Course:'BCA'});
db.Students.updateOne(
 {Student_ID:1},
 {$set:{Marks:88}}
);
db.Students.deleteOne({Student_ID:5});
db.Students.countDocuments();

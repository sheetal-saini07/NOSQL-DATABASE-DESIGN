use('ActivityDB');

db.Students.insertMany([
 {Student_ID:1,Name:'Aman',Courses:['BCA','DBMS'],Attendance:85,Skills:['JavaScript','HTML'],RecentActivities:['Quiz','Assignment']},
 {Student_ID:2,Name:'Riya',Courses:['BCA','MongoDB'],Attendance:92,Skills:['Python','SQL'],RecentActivities:['Project','Quiz']},
 {Student_ID:3,Name:'Neha',Courses:['BBA','DBMS'],Attendance:65,Skills:['Excel'],RecentActivities:['Assignment']},
 {Student_ID:4,Name:'Rahul',Courses:['BCA','Java'],Attendance:78,Skills:['Java','HTML'],RecentActivities:['Quiz','Project']},
 {Student_ID:5,Name:'Priya',Courses:['BCA','DBMS'],Attendance:95,Skills:['Python','SQL'],RecentActivities:['Project','Assignment']}
]);

db.Students.find();
db.Students.find({Courses:'BCA'});
db.Students.find({Attendance:{$gt:80}});
db.Students.find({RecentActivities:'Quiz'});
db.Students.find({Skills:'Python'});

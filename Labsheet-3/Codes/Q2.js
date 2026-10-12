use('EventDB');

db.Events.insertMany([
 {User:'Aman',Event:'login',Time:new Date()},
 {User:'Riya',Event:'logout',Time:new Date()},
 {User:'Aman',Event:'failed-login',Time:new Date()},
 {User:'Aman',Event:'failed-login',Time:new Date()},
 {User:'Aman',Event:'failed-login',Time:new Date()},
 {User:'Neha',Event:'file-upload',Time:new Date()},
 {User:'Riya',Event:'password-change',Time:new Date()},
 {User:'Neha',Event:'file-upload',Time:new Date()},
 {User:'Rahul',Event:'login',Time:new Date()},
 {User:'Riya',Event:'failed-login',Time:new Date()}
]);

db.Events.find();

db.Events.aggregate([
 {$match:{Event:'failed-login'}},
 {$group:{_id:'$User',Attempts:{$sum:1}}},
 {$match:{Attempts:{$gt:1}}}
]);

db.Events.aggregate([
 {$group:{_id:'$Event',Total:{$sum:1}}},
 {$sort:{Total:-1}}
]);

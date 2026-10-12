use('AnalyticsDB');

db.PageVisits.insertMany([
 {Page:'/home',User:'Aman',Device:'Mobile',Browser:'Chrome',Location:'India',Time:new Date()},
 {Page:'/products',User:'Riya',Device:'Laptop',Browser:'Firefox',Location:'India',Time:new Date()},
 {Page:'/home',User:'Neha',Device:'Mobile',Browser:'Chrome',Location:'India',Time:new Date()},
 {Page:'/about',User:'Rahul',Device:'Laptop',Browser:'Chrome',Location:'India',Time:new Date()},
 {Page:'/home',User:'Priya',Device:'Tablet',Browser:'Safari',Location:'India',Time:new Date()},
 {Page:'/products',User:'Aman',Device:'Mobile',Browser:'Chrome',Location:'India',Time:new Date()},
 {Page:'/contact',User:'Riya',Device:'Laptop',Browser:'Firefox',Location:'India',Time:new Date()},
 {Page:'/home',User:'Rahul',Device:'Mobile',Browser:'Chrome',Location:'India',Time:new Date()}
]);

db.PageVisits.find();

db.PageVisits.aggregate([
 {$group:{_id:'$Page',Visits:{$sum:1}}},
 {$sort:{Visits:-1}}
]);

db.PageVisits.aggregate([
 {$group:{_id:'$Device',Total:{$sum:1}}},
 {$sort:{Total:-1}}
]);

db.PageVisits.aggregate([
 {$group:{_id:'$Browser',TotalVisits:{$sum:1}}},
 {$sort:{TotalVisits:-1}}
]);

db.PageVisits.find({Location:'India'});

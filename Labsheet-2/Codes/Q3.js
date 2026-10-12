use('CollegeDB');

db.Orders.insertMany([
 {Order_ID:1,Customer:'Aman',Products:[{name:'Pen',price:10,quantity:2}]},
 {Order_ID:2,Customer:'Riya',Products:[{name:'Book',price:100,quantity:3}]},
 {Order_ID:3,Customer:'Neha',Products:[{name:'Bag',price:500,quantity:1}]},
 {Order_ID:4,Customer:'Rahul',Products:[{name:'Pen',price:10,quantity:5}]},
 {Order_ID:5,Customer:'Priya',Products:[{name:'Book',price:100,quantity:2}]}
]);

db.Orders.find({Customer:'Aman'});
db.Orders.updateOne(
 {Order_ID:1},
 {$set:{'Products.0.quantity':4}}
);

db.Orders.aggregate([
 {$unwind:'$Products'},
 {$group:{_id:'$Order_ID',total:{$sum:{$multiply:['$Products.price','$Products.quantity']}}}}
]);

db.Orders.aggregate([
 {$unwind:'$Products'},
 {$group:{_id:'$Order_ID',total:{$sum:{$multiply:['$Products.price','$Products.quantity']}}}},
 {$match:{total:{$gt:100}}}
]);

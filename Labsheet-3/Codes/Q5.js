use('ECommerceDB');

db.Orders.insertMany([
 {OrderID:1,Customer:'Aman',Products:[{Name:'Laptop',Price:50000,Qty:1},{Name:'Mouse',Price:500,Qty:2}],Status:'Delivered',Date:new Date()},
 {OrderID:2,Customer:'Riya',Products:[{Name:'Mobile',Price:20000,Qty:1}],Status:'Shipped',Date:new Date()},
 {OrderID:3,Customer:'Aman',Products:[{Name:'Keyboard',Price:1500,Qty:1}],Status:'Pending',Date:new Date()},
 {OrderID:4,Customer:'Neha',Products:[{Name:'Headphones',Price:2000,Qty:2}],Status:'Delivered',Date:new Date()},
 {OrderID:5,Customer:'Riya',Products:[{Name:'Laptop',Price:60000,Qty:1}],Status:'Delivered',Date:new Date()}
]);

db.Orders.find();

db.Orders.find({Customer:'Aman'});

db.Orders.find({Status:'Delivered'});

db.Orders.aggregate([
 {$unwind:'$Products'},
 {$group:{
  _id:'$OrderID',
  Customer:{$first:'$Customer'},
  Total:{$sum:{$multiply:['$Products.Price','$Products.Qty']}}
 }}
]);

db.Orders.aggregate([
 {$group:{_id:'$Customer',TotalOrders:{$sum:1}}}
]);

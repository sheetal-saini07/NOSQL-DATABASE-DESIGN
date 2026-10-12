use('ShoppingDB');

db.Carts.insertOne({
 Customer:'Aman',
 Products:[
  {Name:'Laptop',Price:50000,Qty:1},
  {Name:'Mouse',Price:500,Qty:2}
 ]
});

// Display cart
db.Carts.find();

// Add a product
db.Carts.updateOne(
 {Customer:'Aman'},
 {$push:{Products:{Name:'Keyboard',Price:1500,Qty:1}}}
);

// Change quantity
db.Carts.updateOne(
 {Customer:'Aman','Products.Name':'Mouse'},
 {$set:{'Products.$.Qty':3}}
);

// Remove a product
db.Carts.updateOne(
 {Customer:'Aman'},
 {$pull:{Products:{Name:'Keyboard'}}}
);

// Calculate cart value
db.Carts.aggregate([
 {$match:{Customer:'Aman'}},
 {$unwind:'$Products'},
 {$group:{
  _id:'$Customer',
  CartTotal:{$sum:{$multiply:['$Products.Price','$Products.Qty']}}
 }}
]);

db.Carts.find();

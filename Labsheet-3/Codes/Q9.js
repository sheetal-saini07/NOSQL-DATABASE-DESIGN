use('ReviewDB');

db.Reviews.insertMany([
 {Product:'Laptop',User:'Aman',Rating:5,Comment:'Excellent'},
 {Product:'Laptop',User:'Riya',Rating:4,Comment:'Very good'},
 {Product:'Laptop',User:'Neha',Rating:5,Comment:'Great product'},
 {Product:'Mobile',User:'Rahul',Rating:4,Comment:'Good'},
 {Product:'Mobile',User:'Priya',Rating:3,Comment:'Average'},
 {Product:'Camera',User:'Aman',Rating:5,Comment:'Amazing'},
 {Product:'Camera',User:'Riya',Rating:4,Comment:'Nice'}
]);

// Display all reviews
db.Reviews.find();

// Find Laptop reviews
db.Reviews.find({Product:'Laptop'});

// Average rating and total reviews per product
db.Reviews.aggregate([
 {$group:{
  _id:'$Product',
  AverageRating:{$avg:'$Rating'},
  TotalReviews:{$sum:1}
 }}
]);

// Find reviews with rating above 4
db.Reviews.find({Rating:{$gt:4}});

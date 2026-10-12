use('ProductDB');

db.Products.insertMany([
 {Name:'Dell Inspiron',Category:'Laptop',Price:55000,RAM:'8GB',Storage:'512GB SSD',Processor:'Intel i5'},
 {Name:'HP Pavilion',Category:'Laptop',Price:65000,RAM:'16GB',Storage:'1TB SSD',Processor:'Intel i7'},
 {Name:'Samsung Galaxy',Category:'Mobile',Price:25000,RAM:'8GB',Storage:'128GB',Battery:'5000mAh'},
 {Name:'iPhone',Category:'Mobile',Price:70000,RAM:'6GB',Storage:'256GB',Battery:'3500mAh'},
 {Name:'Canon EOS',Category:'Camera',Price:45000,Megapixels:'24MP',Lens:'18-55mm'},
 {Name:'Nikon DSLR',Category:'Camera',Price:60000,Megapixels:'32MP',Lens:'18-140mm'}
]);

db.Products.find();
db.Products.find({Category:'Laptop'});
db.Products.find({Category:'Mobile'});
db.Products.find({Category:'Camera'});
db.Products.find({Price:{$gt:50000}});
db.Products.find({Category:'Laptop',RAM:'16GB'});

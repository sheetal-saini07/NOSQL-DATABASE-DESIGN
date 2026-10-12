use('InventoryDB');

db.Inventory.insertMany([
 {Product:'Laptop',Stock:5,MinimumStock:10,Supplier:'ABC Suppliers',RestockDate:new Date('2026-10-20')},
 {Product:'Mouse',Stock:50,MinimumStock:20,Supplier:'XYZ Suppliers',RestockDate:new Date('2026-10-25')},
 {Product:'Keyboard',Stock:8,MinimumStock:15,Supplier:'ABC Suppliers',RestockDate:new Date('2026-10-18')},
 {Product:'Monitor',Stock:12,MinimumStock:10,Supplier:'Tech Suppliers',RestockDate:new Date('2026-10-22')},
 {Product:'Headphones',Stock:3,MinimumStock:10,Supplier:'Sound Suppliers',RestockDate:new Date('2026-10-16')}
]);

// Display all inventory
db.Inventory.find();

// Find products needing restock
db.Inventory.find({
 $expr:{$lte:['$Stock','$MinimumStock']}
});

// Find products from ABC Suppliers
db.Inventory.find({Supplier:'ABC Suppliers'});

// Sort by available stock
db.Inventory.find().sort({Stock:1});

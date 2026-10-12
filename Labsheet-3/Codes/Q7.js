use('CMSDB');

db.Articles.insertMany([
 {Title:'Introduction to MongoDB',Author:'Aman',Category:'Technology',Tags:['MongoDB','Database'],Status:'Published',Date:new Date()},
 {Title:'HTML Basics',Author:'Riya',Category:'Education',Tags:['HTML','Web'],Status:'Published',Date:new Date()},
 {Title:'Learning Python',Author:'Neha',Category:'Technology',Tags:['Python','Programming'],Status:'Unpublished',Date:new Date()},
 {Title:'CSS Tutorial',Author:'Rahul',Category:'Education',Tags:['CSS','Web'],Status:'Published',Date:new Date()},
Guide',Author:'Priya',Category:'Technology',Tags:['JavaScript','Programming'],Status:'Unpublished',Date:new Date()}
]);

db.Articles.find();
db.Articles.find({Status:'Published'});
db.Articles.find({Status:'Unpublished'});
db.Articles.find({Category:'Technology'});
db.Articles.find({Tags:'Web'});
db.Articles.find({Author:'Aman'});

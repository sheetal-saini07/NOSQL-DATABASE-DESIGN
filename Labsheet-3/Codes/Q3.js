use('BlogDB');

db.Blogs.insertMany([
 {Title:'Learning MongoDB',Author:'Aman',Category:'Technology',Tags:['MongoDB','Database'],Comments:[{User:'Riya',Text:'Useful'}],Published:true,Date:new Date()},
 {Title:'Web Development',Author:'Riya',Category:'Education',Tags:['HTML','CSS','Web'],Comments:[{User:'Aman',Text:'Nice'}],Published:true,Date:new Date()},
 {Title:'JavaScript Guide',Author:'Neha',Category:'Technology',Tags:['JavaScript','Web'],Comments:[],Published:true,Date:new Date()},
 {Title:'Study Tips',Author:'Rahul',Category:'Education',Tags:['Study','Learning'],Comments:[],Published:false,Date:new Date()},
 {Title:'Database Basics',Author:'Priya',Category:'Technology',Tags:['Database','SQL'],Comments:[],Published:true,Date:new Date()}
]);

db.Blogs.find();
db.Blogs.find({Category:'Technology'});
db.Blogs.find({Tags:'Web'});
db.Blogs.find({Category:'Technology',Tags:'Database'});
db.Blogs.find({Published:true});

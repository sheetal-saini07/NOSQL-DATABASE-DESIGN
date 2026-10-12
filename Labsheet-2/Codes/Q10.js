// Run in mongosh connected to a configured MongoDB sharded cluster.

sh.enableSharding('ShardDemo');

use('ShardDemo');

for (let i=1; i<=20; i++) {
  db.Students.insertOne({
    Student_ID:i,
    Name:'Student'+i,
    Course:i%2===0?'BCA':'BBA',
    Marks:50+(i%51)
  });
}

db.Students.createIndex({Student_ID:'hashed'});

sh.shardCollection(
  'ShardDemo.Students',
  {Student_ID:'hashed'}
);

db.Students.countDocuments();
db.Students.find().sort({Student_ID:1});

sh.status();

// Sharding requires configured mongos, config servers,
// and shard replica sets. A standalone server is insufficient.

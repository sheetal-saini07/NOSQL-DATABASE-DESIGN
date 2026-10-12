CREATE
 (s1:Student {id:1,name:'Aman'}),
 (s2:Student {id:2,name:'Riya'}),
 (s3:Student {id:3,name:'Neha'}),
 (s4:Student {id:4,name:'Rahul'}),
 (s5:Student {id:5,name:'Priya'}),
 (c1:Course {name:'BCA'}),
 (c2:Course {name:'BBA'}),
 (c3:Course {name:'BSc'}),
 (s1)-[:ENROLLED_IN]->(c1),
 (s2)-[:ENROLLED_IN]->(c1),
 (s3)-[:ENROLLED_IN]->(c2),
 (s4)-[:ENROLLED_IN]->(c1),
 (s5)-[:ENROLLED_IN]->(c3);

MATCH (s:Student) RETURN s;

MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {name:'BCA'})
RETURN s;

MATCH (:Student {name:'Aman'})-[:ENROLLED_IN]->(c:Course)
RETURN c;

MATCH (s:Student {name:'Aman'}),(c:Course {name:'BBA'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (:Student {name:'Aman'})-[r:ENROLLED_IN]->(:Course {name:'BBA'})
DELETE r;

var node = require('./node');

var a = new node(1,'master','asd');
a.add(1);
a.commit();
a.add(2);
a.commit();
a.rollback(1);
console.log(a);

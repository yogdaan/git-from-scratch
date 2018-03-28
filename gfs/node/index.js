var node = require('./node');

var a = new node(1,'master','asd');
a.add(1);
a.commit();
a.add(2);
a.commit();
console.log(a);

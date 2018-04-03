const gfs = require('./gfs');


var git = new gfs(1,'master',1);

git.add(1);
git.commit();
git.add(2);
git.commit();
git.add(4);
git.commit();
git.log();
git.compile();

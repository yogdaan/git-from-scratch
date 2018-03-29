const gfs = require('./gfs');

// start by creating a new git

const git = new gfs(1,'master',1);
git.add(2);
git.commit();
git.add(3);
git.commit();
console.log(git);

var tempGit = git;
while(tempGit.left){
	console.log(tempGit.value);
	tempGit = tempGit.left;
}

git.rollback(2);

console.log(git);

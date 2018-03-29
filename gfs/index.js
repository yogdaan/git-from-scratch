const gfs = require('./gfs');

// start by creating a new git

const git = new gfs(1);
git.commit(2);
git.commit(3);

var tempGit = git;
while(tempGit.left){
	console.log(tempGit.value);
	tempGit = tempGit.left;
}

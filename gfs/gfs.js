function gfs(value,branch){
	this.value = value;
	this.right = null;
	this.left = null;
	this.branch = this.branch || 'master';
}

gfs.prototype.commit = function(value){
	if(this.branch === 'master'){
		if(!this.left) this.left = new gfs(value);
		else this.left.commit(value);
	}
	else{
		if(!this.right) this.right = new gfs(value);
		else this.right.commit(value);
	}
}

gfs.prototype.commitNewBranch = function(value,branch){
	if(!this.right) this.right = new gfs(value,branch);
	else this.right.commitNewBranch(value,branch);
}

/*
var git = new gfs(3);
git.commit(2);
git.commit(1);
git.commit(5);
git.commit(4);

//console.log(git);
a = git;
while(a.left){
	console.log(a.left);
	a = a.left;
}
*/

module.exports = gfs;

function gfs(value,branch){
	this.value = value;
	this.right = null;
	this.left = null;
	this.branch = this.branch || 'master';
	this.unstaged = null;
}

gfs.prototype.add = function(value){
	if(!this.left && !this.right){
		this.unstaged = value;
	}
	else if(this.branch === 'master') this.left.add(value);
	else this.right.add(value);
}

gfs.prototype.commit = function(){
	if(!this.unstaged) console.log("Changes are not staged");
	else if(this.branch === 'master'){
		if(!this.left) this.left = new gfs(this.unaddd);
		else this.left.commit(this.unaddd);
	}
	else{
		if(!this.right) this.right = new gfs(this.unaddd);
		else this.right.commit(this.unaddd);
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

function gfs(value,branch,number){
	this.value = value;
	this.right = null;
	this.left = null;
	this.branch = this.branch || 'master';
	this.unstaged = null;
	this.number = number || 1;
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
		if(!this.left) this.left = new gfs(this.unstaged,this.branch,this.number + 1);
		else this.left.commit(this.unstaged);
	}
	else{
		if(!this.right) this.right = new gfs(this.unstaged,this.branch,this.number + 1);
		else this.right.commit(this.unstaged);
	}
}

gfs.prototype.commitNewBranch = function(value,branch){
	if(!this.right) this.right = new gfs(value,branch);
	else this.right.commitNewBranch(value,branch);
}

gfs.prototype.rollback = function(number){
	if(this.number === number){
		this.left = null;
		this.right = null;
	}
	else if(this.left) this.left.rollback(number);
	else if(this.right) this.right.rollback(number);
}

module.exports = gfs;

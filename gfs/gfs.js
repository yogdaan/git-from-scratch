const fs = require('fs');

function gfs(value,branch,number){
	this.value = value;
	this.right = null;
	this.left = null;
	this.branch = this.branch || 'master';
	this.unstaged = null;
	this.number = number || 1;
	if(!fs.existsSync('.gfs')){
		fs.mkdirSync('.gfs');
	};
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

	fs.writeFile('.gfs/g.fs',this,function(err){
		if(err){
			console.log(err);
		}
		else{
			console.log('commit added');
		}
	});
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

gfs.prototype.drop = function(number){
	if(this.left.number === number){
		this.left = this.left.left;
	}
	else if(this.right.number === number){
		this.right = this.right.right;
	}
	else if(this.left) this.left.drop(number);
	else if(this.right) this.right.drop(number);
}

module.exports = gfs;

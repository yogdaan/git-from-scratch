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
	if(!this.left){
		this.unstaged = value;
	}else{
		this.left.add(value);
	}
}

gfs.prototype.commit = function(){
	if(this.left){
		return this.left.commit();
	}
	if(this.unstaged){
		if(this.unstaged){
			this.left = new gfs(this.unstaged,'master',this.number + 1);
			return console.log('commit added');
		}else{
			 return console.log('Please use git.add(change) to add changes');
		}
	}
}

gfs.prototype.rollback = function(number){
	if(this.number === number){
		this.left = null;
		this.right = null;
		return this.compile();
	}else return this.left.rollback(number);
}

gfs.prototype.drop = function(number){
	if(this.left.number === number){
		this.left = this.left.left;
		return this.compile();
	}else{
		if(this.left) return this.left.drop(number);
		else return console.log(Number(number).toString() + ' is not a valid commit');
	}
}

gfs.prototype.compile = function(){
	fs.writeFile('.gfs/g.fs',JSON.stringify(this),function(err){
		if(err) return console.log(err);
		else return console.log('commit history modified');
	});
}

gfs.prototype.log = function(){
	fs.readFile('.gfs/g.fs','utf8',function(err,data){
		if(err) return console.log(err);
		else return console.log(JSON.parse(data));
	});
}

module.exports = gfs;

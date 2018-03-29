'use strict';

var commitNumber = 1;

class node {
	constructor(data, branch, filename){
		this.left = null;
		this.right = null;
		this.branch = branch || 'master';
		this.filename = filename || null;
		this.latestCommit = this;
		this.commitNumber = commitNumber++;
	}

	add(data){
		this.unstaged = data;
	}

	commit(){
		if(this.branch === 'master'){
			var temp = this;
			this.latestCommit.left = new node(this.unstaged, this.branch, this.filename);
			this.latestCommit = this.latestCommit.left;
			this.latestCommit.previousCommit = temp;
			this.unstaged = null;
		}
	}
	rollback(_commitNumber){
		while(true){
			if(this.latestCommit.commitNumber === _commitNumber){
				console.log(this.latestCommit.previousCommit);
				//this.latestCommit.previousCommit.left = null;
				this.latestCommit.previousCommit.latestCommit = this.latestCommit.previousCommit;
				break;
			}else{
				this.latestCommit = this.latestCommit.previousCommit;
			}
		}
	}
}

module.exports = node;

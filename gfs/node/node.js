'use strict';

class node {
	constructor(data, branch, filename){
		this.left = null;
		this.right = null;
		this.branch = branch || 'master';
		this.filename = filename || null;
		this.latestCommit = this;
	}

	add(data){
		this.unstaged = data;
	}

	commit(){
		if(this.branch === 'master'){
			this.latestCommit.left = new node(this.unstaged, this.branch, this.filename);
			this.latestCommit = this.latestCommit.left;
			this.unstaged = null;
		}
	}
}

module.exports = node;

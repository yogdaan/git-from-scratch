import { Injectable } from '@angular/core';

@Injectable()
export class CommunicateService {

  commands = ['git log', 'git commit'];
  git = {
    'add' : {
      'message' : '',
      'params' : 1
    },
    'commit' : {
      'message' : 'Added to Git Tree',
      'params' : 2 // -m & commit_message
    },
    'log' : {
      'message': 'some logs',
      'params' : 0
    },
    'error' : 'Some wrong command there!'
  };

  constructor() { }

  getCommands() {
  return this.commands;
  }

  addCommand(command) {
  this.commands.push(command);
  }
}

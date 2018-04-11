import { Component, OnInit, Renderer } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

	commands = ["git init","git add ."]
	cli = ''

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  	const element = this.renderer.selectRootElement('#input-cli')
		setTimeout(() => element.focus(), 0)
  }

  executeCommand($event){
  	if($event.which === 13){
  		this.commands.push(this.cli)
  		this.cli = ''
  	}
  }

}

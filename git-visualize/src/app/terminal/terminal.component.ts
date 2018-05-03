import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommunicateService } from '../communicate.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [ CommunicateService ]
})
export class TerminalComponent implements OnInit {

  commands = this.comm.getCommands();
  cli = '';

  constructor(private renderer: Renderer2, private comm: CommunicateService) { }

  ngOnInit() {
    const element = this.renderer.selectRootElement('#input-cli');
    setTimeout(() => element.focus(), 0);
  }

  executeCommand =($event) => {
    if ($event.which === 13) {
      this.comm.addCommand(this.cli);
      this.cli = '';
    }
  }

}

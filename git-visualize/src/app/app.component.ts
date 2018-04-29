import { Component } from '@angular/core';
import { TreeComponent } from './tree/tree.component';
import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

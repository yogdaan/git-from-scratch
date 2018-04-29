import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TerminalComponent } from './terminal/terminal.component';
import { CommunicateService } from './communicate.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMaterialModule } from './app-material/app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TerminalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppMaterialModule
  ],
  providers: [CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

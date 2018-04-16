import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicateService } from '../communicate.service';
import { TerminalComponent } from './terminal.component';
import { FormsModule } from '@angular/forms';

describe('TerminalComponent', () => {
  let component: TerminalComponent;
  let fixture: ComponentFixture<TerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalComponent ],
      providers: [ CommunicateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

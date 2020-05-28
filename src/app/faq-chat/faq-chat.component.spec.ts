import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqChatComponent } from './faq-chat.component';

describe('FaqChatComponent', () => {
  let component: FaqChatComponent;
  let fixture: ComponentFixture<FaqChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

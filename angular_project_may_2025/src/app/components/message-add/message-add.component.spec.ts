import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAddComponent } from './message-add.component';

describe('MessageAddComponent', () => {
  let component: MessageAddComponent;
  let fixture: ComponentFixture<MessageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

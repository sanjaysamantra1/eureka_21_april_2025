import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDemo3Component } from './signal-demo3.component';

describe('SignalDemo3Component', () => {
  let component: SignalDemo3Component;
  let fixture: ComponentFixture<SignalDemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDemo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

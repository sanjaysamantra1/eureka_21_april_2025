import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemo2Component } from './http-demo2.component';

describe('HttpDemo2Component', () => {
  let component: HttpDemo2Component;
  let fixture: ComponentFixture<HttpDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpDemo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

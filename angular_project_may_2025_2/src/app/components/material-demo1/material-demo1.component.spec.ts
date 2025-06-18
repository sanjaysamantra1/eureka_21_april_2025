import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDemo1Component } from './material-demo1.component';

describe('MaterialDemo1Component', () => {
  let component: MaterialDemo1Component;
  let fixture: ComponentFixture<MaterialDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDemo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

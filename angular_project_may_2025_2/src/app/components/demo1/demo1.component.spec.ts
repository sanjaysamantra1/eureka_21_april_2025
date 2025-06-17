import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Demo1Component } from './demo1.component';

describe('Demo1Component', () => {
  let component: Demo1Component;
  let fixture: ComponentFixture<Demo1Component>;

  beforeAll(() => { // 1
    console.log('Before All...')
  })
  beforeEach(async () => { // Before Every it()
    console.log('Before Each...')
    await TestBed.configureTestingModule({
      imports: [Demo1Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => { // After Every it()
    console.log('After Each...')
  })
  afterAll(() => { // 1
    console.log('After All...')
  })

  it('should create', () => {
    console.log('It-1')
    expect(component).toBeTruthy();
  });
  it('should test sumofdigits', () => {
    console.log('It-2')
    expect(component.sumOfDigits(125)).toBe(8);
    expect(component.sumOfDigits(123)).toBe(6);
  });
});

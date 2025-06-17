import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => { // Group of test cases / test-suite
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {  // testcase / spec
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_project_may_2025_2' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_project_may_2025_2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular_project_may_2025_2');
  });

  it('should test add method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add(2, 3)).toBe(5);
    expect(app.add(2, 3)).not.toBe(0);
    expect(app.add(-2, 3)).toBe(1);
    expect(app.add(-2, -3)).toBe(-5);
    expect(app.add(2, -3)).toBe(-1);
  });
  it('should test addNewCar method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cars).toBeDefined();
    expect(app.cars.length).toBe(2);
    expect(app.cars).toEqual(["Tata",'Honda']);
    expect(app.cars).toContain('Tata');
    expect(app.cars).toContain('Honda');
    app.addNewCar('Maruti');
    expect(app.cars).toBeDefined();
    expect(app.cars.length).toBe(3);
    expect(app.cars).toEqual(["Tata",'Honda','Maruti']);
    expect(app.cars).toContain('Tata');
    expect(app.cars).toContain('Honda');
    expect(app.cars).toContain('Maruti');
    expect(app.cars).not.toContain('audi');
  });
});

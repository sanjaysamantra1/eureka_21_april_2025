import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService : UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers:[
        provideHttpClient(),
        UserService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should verify getAllUsers method', () => {
    const mockresponse: any[] = [{}, {}];
    spyOn(userService, 'getAllUsers').and.returnValue(of(mockresponse));
    component.getAllUsers();
    fixture.detectChanges();
    expect(component.users.length).toBe(2);
  });
});

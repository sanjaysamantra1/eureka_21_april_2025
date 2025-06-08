import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserinfoService } from '../../services/userinfo.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userRole: any;

  constructor(private userinfoService: UserinfoService) {
    this.userRole = this.userinfoService.userRole;
  }

}

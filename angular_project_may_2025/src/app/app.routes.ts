import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { CareersComponent } from './component/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'users', component: UsersComponent },
  { path: 'userdetails/:id', component: UserdetailsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent },
];

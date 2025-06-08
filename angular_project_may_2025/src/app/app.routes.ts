import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { CareersComponent } from './component/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { ArrayComponent } from './components/javascript/array/array.component';
import { StringComponent } from './components/javascript/string/string.component';
import { MathComponent } from './components/javascript/math/math.component';
import { ManageVideosComponent } from './components/manage-videos/manage-videos.component';
import { teacherGuard } from './guards/teacher.guard';
import { canExitGuard } from './guards/can-exit.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'careers', component: CareersComponent },
  {
    path: 'contactus',
    component: ContactusComponent,
    canDeactivate: [canExitGuard]
  },
  { path: 'users', component: UsersComponent },
  { path: 'userdetails/:id', component: UserdetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  {
    path: 'javascript',
    component: JavascriptComponent,
    children: [
      { path: 'array', component: ArrayComponent },
      { path: 'string', component: StringComponent },
      { path: 'math', component: MathComponent },
    ]
  },
  {
    path: 'managevideos',
    component: ManageVideosComponent,
    canActivate: [teacherGuard]
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent },
];

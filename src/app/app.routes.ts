import { Routes } from '@angular/router';
import { LoginComponent } from './faetyres/login/login/login.component';
import { RegisterComponent } from './faetyres/register/register/register.component';
import { FeedsComponent } from './faetyres/feeds/feeds/feeds.component';
import { ProfileComponent } from './faetyres/profile/profile/profile.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { NotificationsComponent } from './faetyres/notifications/notifications/notifications.component';
import { WildcardComponent } from './faetyres/wildcard/wildcard/wildcard.component';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';

export const routes: Routes = [

  {path:'' ,redirectTo:'login' , pathMatch:'full'},
    {path:'' , component: AuthlayoutComponent ,
      canActivate:[guestGuard],
      children:[
      {path:'login' , component:LoginComponent , title: 'Route-Social | Login'},
      {path: 'register' ,component:RegisterComponent ,title: 'Route-Social | Register' },
    ]},
    {path:'' , component: MainlayoutComponent ,
      canActivate:[authGuard],
      children:[
      {path:'feeds' ,loadComponent:()=> import('./faetyres/feeds/feeds/feeds.component').then ( (c)=>FeedsComponent) , title: 'Route-Social | Feeds'},
      {path:'profile' ,loadComponent:()=> import('./faetyres/profile/profile/profile.component').then ( (c)=>ProfileComponent) , title: 'Route-Social | Profile'  },
      {path:'notification' ,loadComponent:()=> import('./faetyres/notifications/notifications/notifications.component').then ( (c)=>NotificationsComponent) , title: 'Route-Social | Notifaction'},
    ]},
    {path:"**", loadComponent:()=> import('./faetyres/wildcard/wildcard/wildcard.component').then ( (c)=>WildcardComponent) , title: 'Route-Social | Error 404'}
];

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';

import { NotFoundComponent } from './admin/not-found/not-found.component';

export const routeConfig = [
{
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule',
},
{
  path: '',
  loadChildren: './front/front.module#FrontModule',
},
{
  path: 'admin/login',
  component: LoginComponent ,
},
{
  path: 'admin/register',
  component: RegisterComponent ,
},
{
  path: '**',
  component: NotFoundComponent ,
},];

@NgModule({
  declarations:[NotFoundComponent,LoginComponent,RegisterComponent],
  imports: [RouterModule.forRoot(routeConfig),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

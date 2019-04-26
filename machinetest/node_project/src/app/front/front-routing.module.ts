import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../front/home/home.component';
import { MainLayoutComponent } from '../front/main-layout/main-layout.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:[{
        path:'',component:HomeComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }

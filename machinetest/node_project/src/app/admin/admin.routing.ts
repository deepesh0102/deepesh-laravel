import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthGuard } from '../_guards/auth.guard';

const adminRoutes: Routes = [
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
        { path: 'add-category', component: AddCategoryComponent, canActivate: [AuthGuard] },
      ],  
    },
  ];

  @NgModule({
    imports:[RouterModule.forChild(adminRoutes)],
    exports:[RouterModule]
  })
  export class AdminRoutingModule {}
  
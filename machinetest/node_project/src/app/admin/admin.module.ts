import { NgModule } from '@angular/core';
import {AdminRoutingModule} from './admin.routing';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { AddCategoryModule } from './add-category/add-category.module';

import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    MainLayoutComponent,
    DashboardComponent,
    AddCategoryComponent
  ],  
  imports: [
    AdminRoutingModule,
    AddCategoryModule,
    DashboardModule,
    SharedModule,
    TableModule
  ],
  exports: [    
    SharedModule,
    TableModule
  ]
})
export class AdminModule { }

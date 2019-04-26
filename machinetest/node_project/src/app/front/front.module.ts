import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from '../front/home/home.component';

@NgModule({
  declarations: [HeaderComponent,FooterComponent, SidebarLayoutComponent, MainLayoutComponent,HomeComponent],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { CategoryFormLayoutComponent } from './category-form-layout/category-form-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule
  ],
  declarations: [
    TableLayoutComponent,
    CategoryFormLayoutComponent,
  ],
  exports: [
    TableLayoutComponent,
    CategoryFormLayoutComponent,
    CommonModule,
    FormsModule,
    TableModule
  ]
})
export class SharedModule { }
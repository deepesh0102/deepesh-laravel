import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../_services/category.service';
import { Category } from '../../_models/category';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent implements OnInit {
  
 @Input('listTitle') listTitle: String;  
 @Input('categoryType') categoryType = 'Category';
 @Input('categories') categories: Category[];
 subCategory:Boolean;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.subCategory = (this.categoryType=="SubCategory")? true: false ;
    }
}
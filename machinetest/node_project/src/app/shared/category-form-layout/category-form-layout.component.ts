import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-category-form-layout',
  templateUrl: './category-form-layout.component.html',
  styleUrls: ['./category-form-layout.component.css']
})
export class CategoryFormLayoutComponent implements OnInit {

@Input('title') title: String;
@Input('categoryType') categoryType: String
@Output() addCategory:EventEmitter<any> = new EventEmitter();
newCategoryname:String;
newCategory: any; 
subCategory:Boolean;

  constructor() { }

  ngOnInit() {
    this.subCategory = (this.categoryType=="SubCategory")? true: false ;
  }

  onAddCategory(){
    this.newCategory = {name: this.newCategoryname};
    this.addCategory.emit(this.newCategory);
  }

}

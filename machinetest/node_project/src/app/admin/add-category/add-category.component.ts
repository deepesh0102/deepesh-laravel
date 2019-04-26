import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../_services/category.service';
import { Category } from '../../_models/category';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
   title = 'Add Category';
   listTitle = 'Category List';
   categoryType = 'Category';
   categories: Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe( categories => { this.categories = categories; });    
  }

  addCategory(newCategory: Category)
  {
     this.categoryService.addCategory(newCategory).subscribe(res=>{ this.categories.push(res); });
  }

}

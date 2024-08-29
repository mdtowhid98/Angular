import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{

  categories:any;

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
    this.categories=this.categoryService.getAllCategory()
  }

 



}

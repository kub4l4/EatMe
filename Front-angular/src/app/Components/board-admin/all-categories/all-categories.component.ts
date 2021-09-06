import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from "../../../_services/category.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ICategory } from "../../../_models/category.model";


@Component({
  selector: 'board-admin-all-categories',
  templateUrl: './all-categories.component.html'
})
export class BoardAdminAllCategoriesComponent implements OnInit {
  @Input() categories:ICategory[]

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../../_services/category.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'board-admin-add-category',
  templateUrl: './add-category.component.html'
})
export class BoardAdminAddCategoryComponent implements OnInit {
  public newCategoryForm!: FormGroup;
  public title!: FormControl
  public description!: FormControl

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.title = new FormControl('', Validators.required)
    this.description = new FormControl('', Validators.required)

    this.newCategoryForm = new FormGroup({
      title: this.title,
      description: this.description,
    })
  }

  saveSession(formValues: { title: string, description: string}) {
    this.categoryService.saveCategory(formValues.title, formValues.description)
      .subscribe(
        data => {
          console.log("DANE:", data)
        },
        error => {
          console.log(error);
        })
    this.router.navigate(['/MyProducts'])
  }
}

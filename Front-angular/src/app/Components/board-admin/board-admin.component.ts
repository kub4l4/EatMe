import { Component, OnInit } from '@angular/core';
import { ICategory } from "../../_models/category.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector : 'app-board-admin',
  templateUrl : './board-admin.component.html'
})
export class BoardAdminComponent implements OnInit {
  name = '';
  categories: ICategory[]

  constructor(private route : ActivatedRoute) {
  }

  ngOnInit() : void {
    this.categories = this.route.snapshot.data['categories']

  }
}

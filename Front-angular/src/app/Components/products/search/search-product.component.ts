import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../../_services/search.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-about',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.html']
})
export class SearchProductComponent implements OnInit {
  public valueSearch: any;

  constructor(public searchService: SearchService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.valueSearch = f.value.search
    this.searchService.options$ = this.searchService.search(this.valueSearch);

    this.searchService.updateSelectedOption({
      id: null,
      servingSize: null,
      code: null,
      ecoscoreTags: null,
      productQuantity: null,
      productName: null,
      novaGroups: null,
      categories: null,
      productSizeType: null,
    });

    this.searchService.isOptionsEmpty$ = this.searchService.options$.pipe(
      map((options) => (options.length == 0))
    );

    f.resetForm();
  }
}

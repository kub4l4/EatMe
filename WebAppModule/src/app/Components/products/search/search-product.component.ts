import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../../_services/search.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { map } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { DialogAddProductComponent } from "./form-add/dialog-add-product.component";
import { ProductService } from "../../../_services/product.service";

export interface DialogData {
  userDecision: boolean;
  expireDate: string;
  quantity: number;
  quantityType: string;
}

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  public valueSearch: any;
  userDecision: boolean | undefined;
  expireDate: string;
  quantity: number | undefined;
  quantityType: string | undefined;

  constructor(public searchService: SearchService,
              private router: Router,
              public dialog: MatDialog,
              public productService: ProductService) {
  }

  ngOnInit(): void {
  }

  addProduct(id: number): void {
    let expireDate = new Date(this.expireDate)
    if (this.quantity === undefined || this.quantityType === undefined) {
      this.productService.fillProduct1(id, expireDate.getTime())
        .subscribe(
          data => {
            console.log("DANE:", data)
          },
          error => {
            console.log(error);
          })

      return
    }

    this.productService.fillProduct2(id, expireDate.getTime(), this.quantity, this.quantityType)
      .subscribe(
        data => {
          console.log("DANE:", data)
        },
        error => {
          console.log(error);
        })
    return
  }

  openDialog(id: number | null): void {
    const dialogRef = this.dialog.open(DialogAddProductComponent, {
      width: '30em',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userDecision = result.userDecision;
      this.expireDate = result.expireDate;
      this.quantity = result.quantity;
      this.quantityType = result.quantityType;
      if (this.userDecision && id != null) {
        this.addProduct(id)
      }
    });
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

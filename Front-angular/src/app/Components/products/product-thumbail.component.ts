import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-product-thumbail',
  template: `
    <div class="row">
        <div class="col-sm-1">
          <input type="checkbox" id="produkt1" name="produkt1" value="Produkt1">
        </div>
        <div class="col-md-4 col-sm-1">
          {{product?.name}}
        </div>
        <div class="col-sm-1">
          {{product?.quantity}}
        </div>
        <div class="col-sm-1" >
          {{product?.dateExp}}
        </div>
        <div class="col-sm-1">
          Dodaj 
        </div>
        <div class="col-sm-1">
          Pokaż przepisy 
        </div>
        <div class="col-sm-1">
          Usuń
        </div>
    </div>
    `
})
export class ProductThumbailComponent{
  @Input() product:any
  
  constructor() { }


}

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { DialogData } from "../search-product.component";


@Component({
  selector: 'dialog-add-product',
  templateUrl: 'dialog-add-product.component.html',
})
export class DialogAddProductComponent {
  changeData: Boolean = false

  constructor(
    public dialogRef: MatDialogRef<DialogAddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  reverseValue(): void {
    this.changeData = !this.changeData;
  }

  onNoClick(): void {
    this.data.userDecision = false
    this.dialogRef.close(this.data);
  }

  onYesClick() {
    this.data.userDecision = true
    this.dialogRef.close(this.data);
  }
}

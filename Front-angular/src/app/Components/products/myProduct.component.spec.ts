import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductComponent } from './myProduct.component';

describe('ProductListComponent', () => {
  let component: MyProductComponent;
  let fixture: ComponentFixture<MyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyProductComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

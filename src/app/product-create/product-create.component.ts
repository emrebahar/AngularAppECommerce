import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductModel } from '../product/models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: 'product-create.component.html',
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      category: ['Categori 1'],
      productName: [
        'Ürün 1',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
      quantityPerUnit: [
        'Açıklama 1',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
      unitPrice: 111,
    });
  }
  onSave() {
    const formData = this.form.getRawValue() as ProductModel;
  }
}

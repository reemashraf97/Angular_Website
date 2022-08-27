import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  formValue!: UntypedFormGroup;
  updateFormValue!: UntypedFormGroup;
  listData: any;
  newData: any;
  editDataModal: any;
  searchData?: any;
  searchTerm!: string;
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private dataService:ProductService, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.listData = this.dataService
      .getData()
      .subscribe((res: any) => {
        this.listData = res;
        console.log(this.listData);
      });
  }

}



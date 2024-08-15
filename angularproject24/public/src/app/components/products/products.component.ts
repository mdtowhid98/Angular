import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  closeResult = '';
  closeResultPost = '';

  products: Product[] = [];
  productData: Product = {} as Product;

  constructor(
    private productsService: ProductService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.onGetProducts();
  }

  openEditModal(content: any, id: number) {
    if (typeof id === 'number') {
      this.onGetProduct(id);
    }

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onGetProducts() {
    this.productsService.getProducts().subscribe(
      (res) => {
        this.products = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onGetProduct(id: number) {
    this.productsService.getProduct(id).subscribe(
      (res) => {
        this.productData = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onDeleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(
      (res) => {
        console.log(res);
        this.onGetProducts();
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  openPostModal(productContent: any) {
    this.modalService
      .open(productContent, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResultPost = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResultPost = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  onAddProduct(form: NgForm) {
    if (form.valid) {
      this.productsService.addProduct(form.value).subscribe(
        (res) => {
          console.log(res);
          this.onGetProducts();
        },
        (err: any) => console.log(err),
        () => console.log('complete')
      );
    }
  }

  onUpdateProduct(productId: number, form: NgForm) {
    if (form.valid) {
      this.productsService.updateProduct(productId, form.value).subscribe(
        (res) => {
          console.log(res);
          this.onGetProducts();
        },
        (err: any) => console.log(err),
        () => console.log('complete')
      );
    }
  }
}

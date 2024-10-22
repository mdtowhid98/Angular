import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { SalesService } from '../../service/sales.service';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';
import { faUser, faCalendarAlt, faBox, faSortNumericDown, faDollarSign, faWarehouse, faTrash, faPlus, faCartPlus, faSave, faTags } from '@fortawesome/free-solid-svg-icons';
import { ProductModule } from '../../module/product/product.module';
import { SalesModule } from '../../module/sales/sales.module';
import { CategoryModule } from '../../module/category/category.module';

@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrls: ['./createsales.component.css']
})
export class CreatesalesComponent implements OnInit {

  products: ProductModule[] = [];
  salesForm!: FormGroup;
  sale: SalesModule = new SalesModule();
  categories: CategoryModule[] = []; 
  
  faUser = faUser;
  faCalendarAlt = faCalendarAlt;
  faBox = faBox;
  faSortNumericDown = faSortNumericDown;
  faDollarSign = faDollarSign;
  faWarehouse = faWarehouse;
  faTrash = faTrash;
  faPlus = faPlus;
  faCartPlus = faCartPlus;
  faSave = faSave;
  faTags = faTags;

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProduct();

    // Set the current date
    const currentDate = new Date().toISOString().substring(0, 10); // Format as YYYY-MM-DD

    this.salesForm = this.formBuilder.group({
      customername: ['', Validators.required],
      salesdate: [currentDate, Validators.required],
      products: this.formBuilder.array([]),
      totalprice: [{ value: '' }]
    });

    this.addProduct(); // Add initial product form group
    this.salesForm.get('products')?.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });
  }

  get productsArray(): FormArray {
    return this.salesForm.get('products') as FormArray;
  }

  loadCategories() {
    this.categoryService.getAllCategory().subscribe({
      next: res => {
        this.categories = res;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  loadProduct() {
    this.productService.getAllProductForSales().subscribe({
      next: res => {
        this.products = res;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  onCategoryChange(index: number) {
    const selectedCategory = this.productsArray.at(index).get('category')?.value;

    const filteredProducts = this.products.filter(
      product => product.categories.some(cat => cat.categoryname === selectedCategory)
    );

    this.productsArray.at(index).get('name')?.reset(); 
    this.productsArray.at(index).get('filteredProducts')?.setValue(filteredProducts); 
  }

  addProduct() {
    const productGroup = this.formBuilder.group({
      id: [''],  
      category: ['', Validators.required],
      name: ['', Validators.required],
      filteredProducts: [[]], // Store filtered products for each product form group
      quantity: [{ value: 0, disabled: true }, Validators.required],
      unitprice: [{ value: 0, disabled: true }],
      stock: [{ value: 0, disabled: true }],
    });
  
    productGroup.get('name')?.valueChanges.subscribe(name => {
      const selectedProduct = this.products.find(prod => prod.name === name);
      if (selectedProduct) {
        const oldStock = selectedProduct.stock;
        if (oldStock > 0) {
          productGroup.patchValue({
            id: selectedProduct.id,  // Set the id here, which is a string
            unitprice: selectedProduct.unitprice,
            stock: oldStock // Set the current stock
          });
          productGroup.get('quantity')?.enable(); // Enable quantity input if stock is available
        } else {
          alert(`The product ${selectedProduct.name} is out of stock!`);
          productGroup.patchValue({
            id: selectedProduct.id,
            unitprice: selectedProduct.unitprice,
            stock: oldStock,
            quantity: 0 // Reset quantity to 0
          });
          productGroup.get('quantity')?.disable(); // Disable quantity input if out of stock
        }
        this.calculateTotalPrice();
      }
    });
  
    productGroup.get('quantity')?.valueChanges.subscribe(quantity => {
      const stock = productGroup.get('stock')?.value || 0;
      const quantityValue = quantity ?? 0; // Use 0 as the default if quantity is null
  
      if (quantityValue > stock) {
        alert(`The selected quantity exceeds the available stock of ${stock}. Please reduce the quantity.`);
        productGroup.patchValue({ quantity: stock }); // Set quantity to the maximum available stock
      }
  
      this.calculateTotalPrice();
    });
  
    this.productsArray.push(productGroup);
  }
  
  

  getFilteredProducts(index: number): ProductModule[] {
    return this.productsArray.at(index).get('filteredProducts')?.value || [];
  }

  removeProduct(index: number) {
    this.productsArray.removeAt(index);
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let totalprice = 0;
    this.productsArray.controls.forEach(control => {
      const quantity = control.get('quantity')?.value || 0;
      const unitprice = control.get('unitprice')?.value || 0;
      totalprice += quantity * unitprice;
    });
    this.salesForm.patchValue({ totalprice });
  }

  createSales() {
    this.sale.customername = this.salesForm.value.customername;
    this.sale.salesdate = this.salesForm.value.salesdate;
    this.sale.totalprice = this.salesForm.value.totalprice;

    this.sale.product = this.salesForm.value.products.map((product: any) => {
      const originalProduct = this.products.find(p => p.id === product.id);
      if (originalProduct) {
        originalProduct.stock -= product.quantity; // Adjust the stock based on the quantity sold
      }
      return {
        id: originalProduct?.id,
        name: originalProduct?.name,
        photo: originalProduct?.photo,
        stock: originalProduct?.stock, // Updated stock
        unitprice: originalProduct?.unitprice,
        quantity: product.quantity
      };
    });

    // Create the sales order
    this.salesService.createSales(this.sale).subscribe({
      next: res => {
        // After successful creation of the sales order, update product stock
        this.sale.product.forEach(prod => {
          this.productService.updateProducts(prod).subscribe({
            next: () => {
              console.log(`Stock reduced and updated for product ID ${prod.id}`);
            },
            error: (error) => {
              console.log(error);
            }
          });
        });

        // Reset the form and navigate
        this.salesForm.reset();
        this.router.navigate(['viewsales']);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}

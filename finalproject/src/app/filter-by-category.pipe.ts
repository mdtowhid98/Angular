import { Pipe, PipeTransform } from '@angular/core';
import { ProductModule } from './module/product/product.module';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(products: ProductModule[], category: string): ProductModule[] {
    if (!category) return products;
    return products.filter(product => product.categories.some(cat => cat.categoryname === category));
  }
}

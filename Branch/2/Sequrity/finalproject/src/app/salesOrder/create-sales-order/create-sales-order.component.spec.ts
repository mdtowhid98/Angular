import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesOrderComponent } from './create-sales-order.component';

describe('CreateSalesOrderComponent', () => {
  let component: CreateSalesOrderComponent;
  let fixture: ComponentFixture<CreateSalesOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSalesOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSalesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

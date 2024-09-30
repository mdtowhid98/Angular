import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalesOrderComponent } from './view-sales-order.component';

describe('ViewSalesOrderComponent', () => {
  let component: ViewSalesOrderComponent;
  let fixture: ComponentFixture<ViewSalesOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSalesOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSalesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

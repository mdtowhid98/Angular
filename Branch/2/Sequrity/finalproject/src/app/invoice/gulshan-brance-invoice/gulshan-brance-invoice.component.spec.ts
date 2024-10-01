import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulshanBranceInvoiceComponent } from './gulshan-brance-invoice.component';

describe('GulshanBranceInvoiceComponent', () => {
  let component: GulshanBranceInvoiceComponent;
  let fixture: ComponentFixture<GulshanBranceInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GulshanBranceInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GulshanBranceInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

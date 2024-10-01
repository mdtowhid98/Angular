import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananiBranceInvoiceComponent } from './banani-brance-invoice.component';

describe('BananiBranceInvoiceComponent', () => {
  let component: BananiBranceInvoiceComponent;
  let fixture: ComponentFixture<BananiBranceInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BananiBranceInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BananiBranceInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

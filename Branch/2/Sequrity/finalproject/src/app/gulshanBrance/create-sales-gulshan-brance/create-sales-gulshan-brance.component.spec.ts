import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesGulshanBranceComponent } from './create-sales-gulshan-brance.component';

describe('CreateSalesGulshanBranceComponent', () => {
  let component: CreateSalesGulshanBranceComponent;
  let fixture: ComponentFixture<CreateSalesGulshanBranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSalesGulshanBranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSalesGulshanBranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

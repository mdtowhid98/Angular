import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicineCategoryComponent } from './view-medicine-category.component';

describe('ViewMedicineCategoryComponent', () => {
  let component: ViewMedicineCategoryComponent;
  let fixture: ComponentFixture<ViewMedicineCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMedicineCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMedicineCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

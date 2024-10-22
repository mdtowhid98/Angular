import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicineCategoryComponent } from './create-medicine-category.component';

describe('CreateMedicineCategoryComponent', () => {
  let component: CreateMedicineCategoryComponent;
  let fixture: ComponentFixture<CreateMedicineCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMedicineCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMedicineCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

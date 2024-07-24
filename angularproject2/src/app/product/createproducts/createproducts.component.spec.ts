import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproductsComponent } from './createproducts.component';

describe('CreateproductsComponent', () => {
  let component: CreateproductsComponent;
  let fixture: ComponentFixture<CreateproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

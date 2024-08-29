import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductsComponent } from './updateproducts.component';

describe('UpdateproductsComponent', () => {
  let component: UpdateproductsComponent;
  let fixture: ComponentFixture<UpdateproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

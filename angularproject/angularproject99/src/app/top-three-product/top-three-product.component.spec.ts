import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeProductComponent } from './top-three-product.component';

describe('TopThreeProductComponent', () => {
  let component: TopThreeProductComponent;
  let fixture: ComponentFixture<TopThreeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopThreeProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopThreeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

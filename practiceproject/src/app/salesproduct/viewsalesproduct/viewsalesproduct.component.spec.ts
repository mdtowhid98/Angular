import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalesproductComponent } from './viewsalesproduct.component';

describe('ViewsalesproductComponent', () => {
  let component: ViewsalesproductComponent;
  let fixture: ComponentFixture<ViewsalesproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsalesproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsalesproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

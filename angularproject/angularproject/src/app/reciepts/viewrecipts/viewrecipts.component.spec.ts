import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreciptsComponent } from './viewrecipts.component';

describe('ViewreciptsComponent', () => {
  let component: ViewreciptsComponent;
  let fixture: ComponentFixture<ViewreciptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewreciptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewreciptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

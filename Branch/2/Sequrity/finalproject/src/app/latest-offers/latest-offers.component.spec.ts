import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestOffersComponent } from './latest-offers.component';

describe('LatestOffersComponent', () => {
  let component: LatestOffersComponent;
  let fixture: ComponentFixture<LatestOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

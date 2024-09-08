import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResidenceComponent } from './view-residence.component';

describe('ViewResidenceComponent', () => {
  let component: ViewResidenceComponent;
  let fixture: ComponentFixture<ViewResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewResidenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

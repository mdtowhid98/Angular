import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResidenceComponent } from './create-residence.component';

describe('CreateResidenceComponent', () => {
  let component: CreateResidenceComponent;
  let fixture: ComponentFixture<CreateResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateResidenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

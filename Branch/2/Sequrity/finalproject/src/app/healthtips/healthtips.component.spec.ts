import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthtipsComponent } from './healthtips.component';

describe('HealthtipsComponent', () => {
  let component: HealthtipsComponent;
  let fixture: ComponentFixture<HealthtipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthtipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

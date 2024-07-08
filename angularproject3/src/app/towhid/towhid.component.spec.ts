import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowhidComponent } from './towhid.component';

describe('TowhidComponent', () => {
  let component: TowhidComponent;
  let fixture: ComponentFixture<TowhidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TowhidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowhidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

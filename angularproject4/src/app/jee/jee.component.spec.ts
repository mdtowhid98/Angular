import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeeComponent } from './jee.component';

describe('JeeComponent', () => {
  let component: JeeComponent;
  let fixture: ComponentFixture<JeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

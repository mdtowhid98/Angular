import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdepartmentComponent } from './viewdepartment.component';

describe('ViewdepartmentComponent', () => {
  let component: ViewdepartmentComponent;
  let fixture: ComponentFixture<ViewdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewdepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

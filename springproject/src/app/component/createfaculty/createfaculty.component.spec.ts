import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefacultyComponent } from './createfaculty.component';

describe('CreatefacultyComponent', () => {
  let component: CreatefacultyComponent;
  let fixture: ComponentFixture<CreatefacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatefacultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatefacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

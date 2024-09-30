import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCtegoryComponent } from './update-ctegory.component';

describe('UpdateCtegoryComponent', () => {
  let component: UpdateCtegoryComponent;
  let fixture: ComponentFixture<UpdateCtegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCtegoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCtegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

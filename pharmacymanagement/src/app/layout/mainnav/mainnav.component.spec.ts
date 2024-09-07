import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnavComponent } from './mainnav.component';

describe('MainnavComponent', () => {
  let component: MainnavComponent;
  let fixture: ComponentFixture<MainnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

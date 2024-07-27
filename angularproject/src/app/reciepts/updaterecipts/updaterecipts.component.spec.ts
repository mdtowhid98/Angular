import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereciptsComponent } from './updaterecipts.component';

describe('UpdatereciptsComponent', () => {
  let component: UpdatereciptsComponent;
  let fixture: ComponentFixture<UpdatereciptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatereciptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatereciptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereciptsComponent } from './createrecipts.component';

describe('CreatereciptsComponent', () => {
  let component: CreatereciptsComponent;
  let fixture: ComponentFixture<CreatereciptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatereciptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatereciptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

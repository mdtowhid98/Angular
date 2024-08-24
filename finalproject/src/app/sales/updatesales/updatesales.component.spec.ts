import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesalesComponent } from './updatesales.component';

describe('UpdatesalesComponent', () => {
  let component: UpdatesalesComponent;
  let fixture: ComponentFixture<UpdatesalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatesalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

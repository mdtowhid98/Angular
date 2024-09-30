import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesupplierComponent } from './updatesupplier.component';

describe('UpdatesupplierComponent', () => {
  let component: UpdatesupplierComponent;
  let fixture: ComponentFixture<UpdatesupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatesupplierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

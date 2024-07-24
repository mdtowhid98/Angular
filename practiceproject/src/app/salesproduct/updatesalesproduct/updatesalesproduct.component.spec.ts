import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesalesproductComponent } from './updatesalesproduct.component';

describe('UpdatesalesproductComponent', () => {
  let component: UpdatesalesproductComponent;
  let fixture: ComponentFixture<UpdatesalesproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatesalesproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesalesproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

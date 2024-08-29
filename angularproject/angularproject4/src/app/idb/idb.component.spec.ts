import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdbComponent } from './idb.component';

describe('IdbComponent', () => {
  let component: IdbComponent;
  let fixture: ComponentFixture<IdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

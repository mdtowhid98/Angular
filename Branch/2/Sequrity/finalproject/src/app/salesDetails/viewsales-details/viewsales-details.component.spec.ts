import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalesDetailsComponent } from './viewsales-details.component';

describe('ViewsalesDetailsComponent', () => {
  let component: ViewsalesDetailsComponent;
  let fixture: ComponentFixture<ViewsalesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsalesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsalesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

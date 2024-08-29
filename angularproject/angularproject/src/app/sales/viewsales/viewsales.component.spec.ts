import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsalesComponent } from './viewsales.component';

describe('ViewsalesComponent', () => {
  let component: ViewsalesComponent;
  let fixture: ComponentFixture<ViewsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

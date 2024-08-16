import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalesproductComponent } from './createsalesproduct.component';

describe('CreatesalesproductComponent', () => {
  let component: CreatesalesproductComponent;
  let fixture: ComponentFixture<CreatesalesproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatesalesproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatesalesproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

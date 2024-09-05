import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomByHotelComponent } from './room-by-hotel.component';

describe('RoomByHotelComponent', () => {
  let component: RoomByHotelComponent;
  let fixture: ComponentFixture<RoomByHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomByHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomByHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewReservationPage } from './new-reservation.page';

describe('NewReservationPage', () => {
  let component: NewReservationPage;
  let fixture: ComponentFixture<NewReservationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

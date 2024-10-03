import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  selectedFlightDate: string = '';  // User-selected flight date
  selectedRoomType: string = '';    // User-selected hotel room type
  selectedTrainDate: string = '';   // User-selected train date

  constructor() { }

  bookFlight() {
    if (this.selectedFlightDate) {
      alert(`Flight booked on ${this.selectedFlightDate}`);
    } else {
      alert('Please select a flight date');
    }
  }

  bookHotel() {
    if (this.selectedRoomType) {
      alert(`Hotel booked: ${this.selectedRoomType}`);
    } else {
      alert('Please select a room type');
    }
  }

  bookTrain() {
    if (this.selectedTrainDate) {
      alert(`Train booked on ${this.selectedTrainDate}`);
    } else {
      alert('Please select a train date');
    }
  }

  bookPackage() {
    alert('Holiday Package booked!');
  }
}

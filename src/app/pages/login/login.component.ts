import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    "phone": "",
    "password": ""
  };

  constructor(private roomSrv: RoomService, private router: Router) {}

  onLogin() {
    this.roomSrv.login(this.loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          localStorage.setItem('hotelUser', JSON.stringify(res.data));
        } else {
          alert('Check User Credentials');
        }
        // Redirect to the dashboard in both success and failure cases
        this.router.navigateByUrl('/dashboard');
      },
      error => {
        // Handle the error case, then redirect to the dashboard
        console.error('Login failed:', error);
        alert('Login failed, but proceeding to dashboard.');
        this.router.navigateByUrl('/dashboard');
      }
    );
  }
}

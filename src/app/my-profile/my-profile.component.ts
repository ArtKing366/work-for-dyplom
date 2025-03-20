import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  user = {
    name: 'John Doe',
    nickname: 'johnny123',
    email: 'johndoe@example.com',
    age: 25,
    imageUrl: 'https://www.w3schools.com/w3images/avatar2.png'
  };
  
  editProfile() {
    console.log('Redirecting to Edit Profile');
  }
}

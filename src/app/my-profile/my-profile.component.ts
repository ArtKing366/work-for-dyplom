import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profile = {
    firstName: 'John',
    lastName: 'Doe',
    nickname: 'johnny',
    age: 30,
    email: 'john.doe@example.com',
    bio: 'Software Developer at TechCorp',
    avatar: 'avatar-image.jpg'
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    }
  }

  openEditProfile() {
    this.router.navigate(['/my-profile/edit']);
  }

  goBack() {
    this.router.navigate(['/courses']); 
  }
}
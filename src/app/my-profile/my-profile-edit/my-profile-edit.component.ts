import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile-edit',
  templateUrl: './my-profile-edit.component.html',
  styleUrls: ['./my-profile-edit.component.css']
})
export class MyProfileEditComponent implements OnInit {
  profile = {
    firstName: '',
    lastName: '',
    nickname: '',
    age: null,
    email: '',
    bio: '',
    avatar: 'avatar1.jpg'
  };

  avatars = this.generateAvatarPaths();

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadProfile();
  }

  private generateAvatarPaths(): string[] {
    const avatars = [];
    for (let i = 1; i <= 14; i++) {
      avatars.push(`avatar${i}.jpg`);
    }
    return avatars;
  }

  loadProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    }
  }

  selectAvatar(avatar: string) {
    this.profile.avatar = avatar;
  }

  onSave() {
    if (!this.profile.avatar) {
      this.profile.avatar = 'avatar1.jpg'; 
    }
    localStorage.setItem('userProfile', JSON.stringify(this.profile));
    this.router.navigate(['/my-profile']);
  }

  onCancel() {
    this.router.navigate(['/my-profile']);
  }

  private checkAvatarExists(avatar: string): boolean {
    return true;
  }
}
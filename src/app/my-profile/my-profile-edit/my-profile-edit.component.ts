import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';

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

  constructor(private router: Router, private dataStorageService: DataStorageService) { }

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
    this.dataStorageService.fetchProfile((profile) => {
      if (profile) {
        this.profile = profile;
      }
    });
  }

  selectAvatar(avatar: string) {
    this.profile.avatar = avatar;
  }

  onSave() {
    if (!this.profile.avatar) {
      this.profile.avatar = 'avatar1.jpg';
    }
    this.dataStorageService.storeProfile(this.profile);
    this.router.navigate(['/my-profile']);
  }

  onCancel() {
    this.router.navigate(['/my-profile']);
  }

  private checkAvatarExists(avatar: string): boolean {
    return true;
  }
}
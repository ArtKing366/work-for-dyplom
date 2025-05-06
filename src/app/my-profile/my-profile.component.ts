import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  
import { MyProfileEditComponent } from './my-profile-edit/my-profile-edit.component';  

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  profile = {
    firstName: 'John',
    lastName: 'Doe',
    nickname: 'johnny',
    age: 30,
    email: 'john.doe@example.com',
    bio: 'Software Developer at TechCorp'
  };

  constructor(public dialog: MatDialog) { }

  openEditProfile() {
    const dialogRef = this.dialog.open(MyProfileEditComponent, {
      width: '400px',
      data: { ...this.profile } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.profile = result;
      }
    });
  }
}

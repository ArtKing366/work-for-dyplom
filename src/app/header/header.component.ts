import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  
import { MyProfileComponent } from '../my-profile/my-profile.component'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(public dialog: MatDialog) { }

  openProfileModal() {
    this.dialog.open(MyProfileComponent, {
      width: '500px', 
      height: '400px', 
    });
  }


}

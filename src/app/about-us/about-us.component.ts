import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsModalComponent } from './about-us-modal/about-us-modal.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  aboutUsInfo = {
    title: 'About Us',
    description: 'We are a company focused on delivering quality educational resources to learners worldwide. Our mission is to make learning accessible and affordable for everyone.'
  };

  constructor(public dialog: MatDialog) { }

  // Открытие модального окна
  openAboutUsModal() {
    this.dialog.open(AboutUsModalComponent, {
      width: '500px',
      height: '300px',
      data: this.aboutUsInfo
    });
  }
}

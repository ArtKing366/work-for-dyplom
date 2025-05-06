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
    title: '',
    description: ''
  };

  constructor(public dialog: MatDialog) { }

  // openAboutUsModal() {
  //   this.dialog.open(AboutUsModalComponent, {
  //     width: '500px',
  //     height: '300px',
  //     data: this.aboutUsInfo
  //   });
  // }
}

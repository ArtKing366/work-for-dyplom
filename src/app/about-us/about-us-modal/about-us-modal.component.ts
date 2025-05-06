import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog'; 
@Component({
  selector: 'app-about-us-modal',
  templateUrl: './about-us-modal.component.html',
  styleUrls: ['./about-us-modal.component.css']
})
export class AboutUsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AboutUsModalComponent>,  
    @Inject(MAT_DIALOG_DATA) public data: any  
  ) { }

}

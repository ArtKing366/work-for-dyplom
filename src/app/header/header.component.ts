import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  
import { MyProfileComponent } from '../my-profile/my-profile.component'; 
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(public dialog: MatDialog,
    private dataStorageServeice: DataStorageService,
  ) { }

  openProfileModal() {
    this.dialog.open(MyProfileComponent, {
      width: '500px', 
      height: '400px', 
    });
  }



  onSaveData(){
    this.dataStorageServeice.storeCourses();
  }

  onFetchData(){
    this.dataStorageServeice.fetchCourses().subscribe();
  }


}

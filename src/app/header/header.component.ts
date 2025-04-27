import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  
import { MyProfileComponent } from '../my-profile/my-profile.component'; 
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;


  constructor(public dialog: MatDialog,
    private dataStorageServeice: DataStorageService,
    private authService: AuthService,
  ) { }

  openProfileModal() {
    this.dialog.open(MyProfileComponent, {
      width: '500px', 
      height: '400px', 
    });
  }

  ngOnInit(): void{
    this.userSub = this.authService.user.subscribe(user =>{
      this.isAuthenticated = !user ? false : true;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveData(){
    this.dataStorageServeice.storeCourses();
  }

  onFetchData(){
    this.dataStorageServeice.fetchCourses().subscribe();
  }


  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }

}

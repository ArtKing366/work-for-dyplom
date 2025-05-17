import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    public dialog: MatDialog,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user =>{
       this.isAuthenticated = !!user; 
       console.log(!user);
       console.log(!!user);
        
    });
  }



  onSaveData() {
    this.dataStorageService.storeCourses();
  }

  onFetchData() {
    this.dataStorageService.fetchCourses().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }

  openProfileModal() {
    this.dialog.open(MyProfileComponent, {
      width: '500px',
      height: '400px',
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }


}

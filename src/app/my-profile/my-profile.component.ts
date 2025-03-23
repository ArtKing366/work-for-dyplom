import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  // Импортируем MatDialog
import { MyProfileEditComponent } from './my-profile-edit/my-profile-edit.component';  // Импортируем компонент редактирования

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

  // Открытие модального окна для редактирования профиля
  openEditProfile() {
    const dialogRef = this.dialog.open(MyProfileEditComponent, {
      width: '400px',
      data: { ...this.profile }  // Передаем данные профиля в модальное окно
    });

    // Получаем данные из диалога после его закрытия
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.profile = result;
      }
    });
  }
}

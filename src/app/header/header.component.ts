import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  // Импортируем MatDialog
import { MyProfileComponent } from '../my-profile/my-profile.component';  // Импортируем компонент с профилем

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  // Открытие модального окна профиля
  openProfileModal() {
    this.dialog.open(MyProfileComponent, {
      width: '500px', // Размер модального окна
      height: '400px', // Высота модального окна
    });
  }

  // Метод для навигации
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile-edit',
  templateUrl: './my-profile-edit.component.html',
  styleUrls: ['./my-profile-edit.component.css']
})
export class MyProfileEditComponent {
  user = {
    name: 'John Doe',
    nickname: 'johnny123',
    email: 'johndoe@example.com',
    age: 25,
    imageUrl: 'https://www.w3schools.com/w3images/avatar2.png'
  };

  saveChanges() {
    console.log('Changes saved:', this.user);
    // Здесь можно добавить логику для сохранения данных
  }

  cancelEdit() {
    console.log('Edit cancelled');
    // Вернуть данные обратно или скрыть форму редактирования
  }
}

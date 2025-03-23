import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-profile-edit',
  templateUrl: './my-profile-edit.component.html',
  styleUrls: ['./my-profile-edit.component.css']
})
export class MyProfileEditComponent {

  profile = { ...this.data };

  constructor(
    public dialogRef: MatDialogRef<MyProfileEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // Закрытие диалога без сохранения
  onSkip() {
    this.dialogRef.close();
  }

  // Сохранение изменений и закрытие диалога
  onSave() {
    this.dialogRef.close(this.profile);
  }

  // Очистка всех полей
  onClear() {
    this.profile = {
      firstName: '',
      lastName: '',
      nickname: '',
      age: null,
      email: '',
      bio: ''
    };
  }
}

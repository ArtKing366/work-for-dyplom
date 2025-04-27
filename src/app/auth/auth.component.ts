import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { zip } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoggingMode = true;
  isLoading = false;
  error: string = null;



  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoggingMode = !this.isLoggingMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoggingMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs =  this.authService.signUp(email, password);
    }

    authObs.subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(['/courses']);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}

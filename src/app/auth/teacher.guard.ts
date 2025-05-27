import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TeacherGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    return this.authService.userRole.pipe(
      take(1),
      map(role => {
        if (role === 'teacher') {
          return true;
        }
        return this.router.createUrlTree(['/courses']);
      })
    );
  }
}
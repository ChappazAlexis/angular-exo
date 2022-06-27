import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private userService: UserService) {}

  /**
   * Method for check the credentials passed in
   * parameter
   * @param email The email to check
   * @param pwd The password to check
   */
  checkAuth(email: string, pwd: string) {

    const currentUser = this.userService.user;
 
    return new Promise(
      (res, rej) => {
        setTimeout(
          () => {

            if (email !== currentUser.email
              || pwd !== currentUser.password) {
              rej('Les identifiants sont incorrects');
            }

            this.signIn();
            res(true);
          }, 2000
        );
      }
    );

  }

  signIn() {
    this.isAuth = true;
  }

  signOut() {
    this.isAuth = false;
  }

}

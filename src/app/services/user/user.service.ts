import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User('Alexis', 'CHAPPAZ',
    'admin@admin', 'admin');

  constructor() { }

  /**
   * Method for update the user
   * @param updatedUser The new vals of the user
   */
  updateUser(updatedUser: User) {
    this.user = updatedUser;
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user/user.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})
export class ProfilViewComponent implements OnInit {

  userForm: FormGroup;

  currentUser: User;

  msg: string;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.currentUser = this.userService.user;

    this.initForm();
  }

  /*
   * Method for init the reactive form
   */
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: [this.currentUser.firstName, Validators.required],
      lastName: [this.currentUser.lastName, Validators.required],
      email: [this.currentUser.email, [Validators.required, Validators.email]],
      password: [this.currentUser.password, Validators.required]
    });
  }

  /*
   * Method call when the user submit the form
   */
  onSubmitForm() {
    const formValue = this.userForm.value;

    const updatedUser = new User(
      formValue.firstName,
      formValue.lastName,
      formValue.email,
      formValue.password
    );

    this.userService.updateUser(updatedUser);

    this.msg = 'Profil mis à jour avec succès !';
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
 
  ngOnInit() {
  }

  /**
   * Method for sign out the user
   */
  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth']);
  }

  /**
   * Method for show the profil of the user
   */
  onShowProfil() {
    this.router.navigate(['profil']);
  }
}

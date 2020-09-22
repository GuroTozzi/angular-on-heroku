import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  private _isLogged = true;
  username = 'Alessandro';

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
  }

  get isLogged(): boolean {
    return this._isLogged;
  }

  set isLogged(value: boolean) {
    this._isLogged = value;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}

import { Component, OnInit } from '@angular/core';
import {User} from '../classes/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  constructor(private actroute: ActivatedRoute, private userService: UsersService, private route: Router) { }

  ngOnInit(): void {
    this.actroute.paramMap.subscribe(
      (p) => {
        this.userService.getUserById(+p.get('id')).subscribe(
          (response) => {
            this.user = response;
          }
        );
      }
    );
  }

  backToHome() {
    this.route.navigate(['home']);
  }

}

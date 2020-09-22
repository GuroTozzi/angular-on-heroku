import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {faGlasses, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {User} from '../classes/user';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User;
  @Output('onDeleteUserEvent') userDeletedEvent = new EventEmitter();
  @Output('onclickedRow') userDetailEvent = new EventEmitter();
  pencil =  faPencilAlt;
  trash = faTrashAlt;
  save = faGlasses;

  constructor(private userService: UsersService, private route: Router) { }

  ngOnInit(): void {
  }

  deleteUser(user: User) {
    // this.userDeletedEvent.emit(this.user);
  }

  updateUser(){
    this.route.navigate(['users', this.user.idUser, 'edit']);
    this.userDetailEvent.emit(this.user);
  }

  showUser(user: User) {
    this.route.navigate(['users', this.user.idUser, 'show']);
  }
}

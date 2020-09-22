import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {User} from '../classes/user';
import {UsersService} from '../services/users.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Users';
  users: User[] = [];
  faPlus = faPlus;

  @Output() updateUser = new EventEmitter<User>();
  @Output() insertUser = new EventEmitter<User>();

  constructor(private userService: UsersService, private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response;
      },
      error => alert(error.message)
    );
  }

  onDeleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(
      () => {
        this.userService.getUsers().subscribe(
          (users) => {
            this.users = users;
          },
          error => alert(error.message)
        );
        this.route.navigate(['home']);
      }
    );
  }

  showUserDetail(user: User) {
    const userCopy = Object.assign({}, user); // questo metodo fa una copia dell'oggetto passato come secondo parametro (user  in questo caso) nel primo oggetto ({} vuoto in questo caso). In questo modo quando modifichiamo i valori dell'oggetto non cambiano i valori in tabella, perchè si tratta di due oggetti differenti.
    this.updateUser.emit(userCopy);
  }

}

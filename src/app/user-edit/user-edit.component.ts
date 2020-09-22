import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {UsersService} from '../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {


  private userCopy: User;
  private __user: User;
  @Input('userInput') set user(user: User){
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  };

  get user(){
    return this.__user;
  }

  //ActivatedRouter ci permette di catturare il valore id dall'url, "ti abboni al servizio"
  constructor(private userService: UsersService, private activateRouter: ActivatedRoute, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.user = new User();

    // this.activateRouter.params.subscribe(
    //   (params) => {
    //     this.user = this.userService.getUserById(+params.id); // con + anteposto fai il cast a number
    //   }
    // );
    //Una alternativa al codice su è quello di usare paramMap che ci mappa tutti i parametri url in un oggetto
    this.activateRouter.paramMap.subscribe(
      (params) => {
        // con + anteposto fai il cast a number
        this.userService.getUserById(+params.get('id')).subscribe(
          (result) => {
            this.user = result;
          }
        );
      }
    );
  }


  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      (response) => {
        this.router.navigate(['home']);
      }
    );
  }

  resetUser(form) {
    this.user = this.userCopy;
  }



}

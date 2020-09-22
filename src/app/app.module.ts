import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { UserComponent } from './user/user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  //Definisci i component
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    UserComponent,
    UserDetailsComponent,
    UserEditComponent
  ],
  //importi i moduli
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  //Importi i services
  providers: [AuthService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

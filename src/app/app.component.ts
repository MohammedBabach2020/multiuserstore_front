import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { Router } from '@angular/router';
import { isAuthenticated } from './JWT/isAuthenticated'
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, SignInComponent, FormsModule, SignUpComponent]
})
export class AppComponent {
  title = 'multiuserstore';

  constructor(private isAuth: isAuthenticated, private router: Router) { }


  ngOnInit() {


    if (this.isAuth.isAuthenticated()) {
      //    this.router.navigate(['/createStore']);
      this.router.navigate(['/layout/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
}

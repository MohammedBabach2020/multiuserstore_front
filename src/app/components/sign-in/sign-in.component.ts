import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { isAuthenticated } from '../../JWT/isAuthenticated';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule, MatButtonModule, HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [AuthService]

})


export class SignInComponent {
  constructor(private authService: AuthService, private isAuth: isAuthenticated, private router: Router) { }
  hide = true;
  emailFormControl!: FormControl;

  pwdFormControl!: FormControl;



  ngOnInit() {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    this.pwdFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  }

  async signIn(): Promise<void> {

    const signIn = await this.authService.signIn(this.emailFormControl.value, this.pwdFormControl.value).then(

      () => {
        if (this.isAuth.isAuthenticated()) {
          this.router.navigate(['/createStore']);
        }
        else {
          console.log("not Auth")
        }
      }
    );


  }


}

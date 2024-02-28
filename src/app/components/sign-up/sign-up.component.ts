import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ControlsConfirmationValidator } from '../../validators/ControlsConfirmationValidator'
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,

} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../services/Auth/auth.service';
import { MatCardModule } from '@angular/material/card';
import { isAuthenticated } from '../../JWT/isAuthenticated'
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule, MatIconModule, MatButtonModule, RouterLink, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: [AuthService]
})
export class SignUpComponent {
  constructor(private authService: AuthService, private isAuth: isAuthenticated, private router: Router) { }
  hide = true;
  nameFormControl !: FormControl;
  emailFormControl !: FormControl;
  emailConfirmationFormControl!: FormControl;
  pwdFormControl!: FormControl;
  pwdConfirmationFormControl!: FormControl;


  ngOnInit() {
    this.nameFormControl = new FormControl('', [Validators.required, Validators.maxLength(30)]);
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    this.emailConfirmationFormControl = new FormControl('');
    this.emailConfirmationFormControl.addValidators(ControlsConfirmationValidator(this.emailFormControl, this.emailConfirmationFormControl))
    this.pwdFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.pwdConfirmationFormControl = new FormControl('');
    this.pwdConfirmationFormControl.addValidators(ControlsConfirmationValidator(this.pwdFormControl, this.pwdConfirmationFormControl));
  }


  async signUp(): Promise<void> {
    const signUp = this.authService.signUp(this.nameFormControl.value,
      this.emailFormControl.value,
      this.emailConfirmationFormControl.value,
      this.pwdFormControl.value,
      this.pwdConfirmationFormControl.value);

    if (this.isAuth.isAuthenticated()) {
      this.router.navigate(['/createStore']);
    }
    else {
      console.log("not Auth")
    }
  }

}

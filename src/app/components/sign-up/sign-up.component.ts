import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthenticationService } from "../../services/authentication.service";
import { UsersService } from "../../services/users.service";


export function passwordMatchValidator() : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword ?{ 'passwordMismatch': true } : null;
  }
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {validators: passwordMatchValidator()}
  );

  constructor(private authService: AuthenticationService, private router: Router, private usersService : UsersService) { }

  ngOnInit() { }

  get name () {
    return this.signUpForm.get('name');
  }

  get password () {
    return this.signUpForm.get('password');
  }

  get confirmPassword () {
    return this.signUpForm.get('confirmPassword');
  }

  get email () {
    return this.signUpForm.get('email');
  }

  submit() {
    const { name, email, password } = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !password || !email) {
      return;
    }

    this.authService
      .signUp(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.usersService.addUser({ uid, email, displayName: name })
        ))
      .subscribe(() => {
        this.router.navigate(['/festivals']);
      });
  }
}


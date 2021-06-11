import { smartiePantsAnimations } from './../../@shared/animations/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '..';
import { passwordMatchValidator } from '@app/@shared/directives/password-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: smartiePantsAnimations,
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  save() {
    const newUser = this.registerForm.value;
    delete newUser.passwordConfirm;
    this.router.navigate(['finish-register']);
    // this.accountService.addAccount(newUser).subscribe(
    //   data => {
    //     log.debug(data);
    //     this.router.navigate(['register/finish']);
    //   },
    //   error => {
    //     log.error(error);
    //     if (error.error && error.error.error && error.error.error.statusCode === 422) {
    //       this.snackBar.open('Email already exists', '', { duration: 3000 });
    //     } else {
    //       this.snackBar.open('Upps Something go wrong', '', { duration: 3000 });
    //     }
    //   }
    // );
  }

  private createForm() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ['', [Validators.required]],
      },
      {
        // check whether our password and confirm password match
        validator: passwordMatchValidator,
      }
    );
  }
}

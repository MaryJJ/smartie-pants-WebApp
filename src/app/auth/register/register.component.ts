import { finalize } from 'rxjs/operators';
import { Logger } from './../../@core/logger.service';
import { smartiePantsAnimations } from './../../@shared/animations/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '..';
import { passwordMatchValidator } from '@app/@shared/directives/password-match-validator';
import { patternValidator } from '@app/@shared/directives/pattern-validator.directive';

const log = new Logger('Register');
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: smartiePantsAnimations,
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hide = true;
  hidecp = true;
  error: string;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  save() {
    this.isLoading = true;
    const newUser = this.registerForm.value;
    delete newUser.passwordConfirm;
    this.authService
      .register(newUser)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (data) => {
          log.debug(data);
          this.router.navigate(['finish-register']);
        },
        (error) => {
          this.error =
            typeof error?.error?.detail === 'string'
              ? error.error.detail
              : 'Oops, something went wrong';
        }
      );
  }

  private createForm() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            patternValidator(/\d/, { passwordValidator: true }),
            patternValidator(/[A-Z]/, { passwordValidator: true }),
            patternValidator(/[a-z]/, { passwordValidator: true }),
            patternValidator(/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/, {
              passwordValidator: true,
            }),
          ],
        ],
        passwordConfirm: ['', [Validators.required]],
      },
      {
        // check whether our password and confirm password match
        validator: passwordMatchValidator,
      }
    );
  }
}

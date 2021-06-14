import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { Logger, untilDestroyed, User } from '@core';
import { AuthenticationService } from '..';
import { smartiePantsAnimations } from '@app/@shared';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: smartiePantsAnimations,
})
export class LoginComponent implements OnInit {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  hide = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    this.isLoading = true;
    const login$ = this.authenticationService.login(this.loginForm.value);
    login$
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        (user: User) => {
          log.debug(`User ${user.name} successfully logged in`);
          this.router.navigate(
            [this.route.snapshot.queryParams.redirect || '/dashboard'],
            { replaceUrl: true }
          );
        },
        (error) => {
          log.debug(error);
          this.error =
            typeof error?.error?.detail === 'string'
              ? error.error.detail
              : 'Oops, something went wrong';
        }
      );
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}

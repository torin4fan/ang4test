import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginPageService } from './login-page.service';
import { StorageService } from '../../../core/services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'tr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class LoginPageComponent implements OnInit {
  authForm: FormGroup;
  resultLogin: any;
  errorHandler: boolean;

  constructor(
    private loginPageService: LoginPageService,
    private storageService: StorageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.authForm = this.loginPageService.createForm();
    this.errorHandler = false;
  }

  checkStatusValid(): boolean {
    return this.authForm.status === 'INVALID';
  }

  onSubmit(): void {
    this.resultLogin = this.loginPageService.checkLogin(this.authForm.value);
    this.resultLogin.subscribe(
      response => {
        if (!response) {
          this.errorHandler = true;
          return false;
        }

        this.storageService.setData('user', response);
        this.errorHandler = false;
        this.router.navigateByUrl('/');
      },
      error => {
        // login failed so display error
        // this.alertService.error(error);
      }
    );
  }

}

import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginPageService } from './login-page.service';


@Component({
  selector: 'tr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class LoginPageComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  resultLogin: any;
  errorHandler: boolean;

  constructor(private loginPageService: LoginPageService) {
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
    this.resultLogin.subscribe(response => {
      if (response) {
        localStorage.setItem('user', response);
        this.errorHandler = false;
      } else {
        this.errorHandler = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.resultLogin.unsubscribe();
  }

}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { LoginPageService } from './login-page.service';



@Component({
  selector: 'tr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class LoginPageComponent implements OnInit {
  authForm: FormGroup;
  loginControl: Validators;
  passwordControl: Validators;

  constructor(private loginPageService: LoginPageService) {
  }

  ngOnInit() {
    this.authForm = this.loginPageService.createForm();

    /*this.loginControl = this.authForm.get('loginUser').valueChanges.subscribe((data) => {
      console.log(data, 'data')
    });

    setTimeout(() => this.afterParentInit());

    this.authForm
      .valueChanges
      .subscribe(() => {
        this.loginControl = this.authForm.get('loginUser').errors;
        this.passwordControl = this.authForm.get('passwordUser').errors;
      });*/
  }

  afterParentInit() {

  }

  checkStatusValid(): boolean {
    return this.authForm.status === 'INVALID';
  }

}

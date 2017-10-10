import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginPageService } from './login-page.service';



@Component({
  selector: 'tr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {
  authForm: FormGroup;

  constructor(private loginPageService: LoginPageService) {
  }

  ngOnInit() {
    this.authForm = this.loginPageService.createForm();

    this.authForm
      .valueChanges
      .subscribe(() => {
        console.log(this.authForm);
      });
  }

  checkStatusValid(): boolean {
    return this.authForm.status === 'INVALID';
  }

}

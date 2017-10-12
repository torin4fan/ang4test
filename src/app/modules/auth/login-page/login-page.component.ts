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
  passwordControl: any;

  constructor(private loginPageService: LoginPageService) {
  }

  ngOnInit() {
    this.authForm = this.loginPageService.createForm();
    this.passwordControl = this.authForm.get('passwordUser');

    this.authForm
      .valueChanges
      .subscribe(() => {
        this.passwordControl = this.authForm.get('passwordUser').errors;
        // console.log(this.authForm.get('passwordUser'));
        /*this.passwordControl = math.random();*/
        /*console.log(this.authForm.controls);
        console.log(!!this.authForm.controls.loginUser.errors);*/
        /*if (this.authForm.get('passwordUser').errors) {
          console.log(this.authForm.get('passwordUser').errors.pattern.requiredPattern);
        }
*/
      });
  }

  checkStatusValid(): boolean {
    return this.authForm.status === 'INVALID';
  }

}

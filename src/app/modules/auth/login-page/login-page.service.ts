import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { RegExpConstant } from '../../../core/constants/regex-patters.constant';
import { LoginFormModel } from './login-page.model';
import { error } from 'util';



@Injectable()
export class LoginPageService {

  constructor(
    private fb: FormBuilder,
  ) {}

  createForm(): FormGroup {
    return this.fb.group({
      loginUser: ['', [
                        Validators.required,
                        Validators.pattern(RegExpConstant.latin)
                      ]
      ],
      passwordUser: ['', [
                            Validators.required,
                            Validators.pattern(RegExpConstant.latinAndNumber)
                          ]
      ],
    });
  }

  checkLogin(userCred: LoginFormModel): Observable<any>  {
    let result: string | boolean;

    result = (userCred.loginUser === 'q' && userCred.passwordUser === 'q') ? userCred.loginUser : false;

    return new Observable(observer => {
      observer.next(result);
      observer.complete();
    });
  }
}

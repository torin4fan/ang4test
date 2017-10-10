import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegExpConstant } from '../../../core/constants/regex-patters.constant';

@Injectable()
export class LoginPageService {

  constructor(
    private fb: FormBuilder
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
}

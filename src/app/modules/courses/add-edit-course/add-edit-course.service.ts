import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class AddEditCourseService {

  constructor(
    private fb: FormBuilder,
  ) {}

  createForm(): FormGroup {
    return this.fb.group({
      loginUser: ['', [
        Validators.required,
      ]
      ],
      passwordUser: ['', [
        Validators.required,
      ]
      ],
    });
  }

}

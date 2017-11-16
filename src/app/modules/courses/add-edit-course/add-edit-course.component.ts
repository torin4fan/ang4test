import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AddEditCourseService } from './add-edit-course.service';
import { CourseModel } from '../../../models/course.model';

@Component({
  selector: 'tr-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {
  courseForm: FormGroup;
  defaultAuthors: Array<string>;
  CourseResponse: CourseModel;

  constructor(
    private addEditCourseService: AddEditCourseService,
    private route: ActivatedRoute,
    ) {
    this.defaultAuthors = [
      'Smith',
      'John',
      'Casper',
      'Mike'
    ];
  }

  ngOnInit() {
    this.courseForm = this.addEditCourseService.createForm();
    this.getCourse();
  }

  getCourse(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    let result: any;

    if (id) {
      result = this.addEditCourseService.getCourse(id);
      result.subscribe(response => {
        console.log(response);
      });
    }
  }

  onSubmit(): void {
    this.addEditCourseService.addEditCourse(this.courseForm.value);
  }
    /*this.resultLogin = this.loginPageService.checkLogin(this.authForm.value);

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
  }*/

}

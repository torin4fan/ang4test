import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AddEditCourseService } from './add-edit-course.service';

@Component({
  selector: 'tr-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {
  courseForm: FormGroup;
  defaultAuthors: Array<string>;

  constructor(
    private addEditCourseService: AddEditCourseService,
    private router: Router,
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
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AddEditCourseService } from './add-edit-course.service';

@Component({
  selector: 'tr-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {
  courseForm: FormGroup;
  defaultAuthors: Array<string>;
  private id: number;

  constructor(
    private addEditCourseService: AddEditCourseService,
    private route: ActivatedRoute
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
    this.id = +this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.getCourse(this.id);
    }
  }

  getCourse(pageId: number): void {
    let result: any;

    result = this.addEditCourseService.getCourse(pageId);
    result.subscribe(response => {
      this.courseForm.reset(response);
    });
  }

  onSubmit(): void {
    this.addEditCourseService.addEditCourse(this.courseForm.value, this.id);
  }
}

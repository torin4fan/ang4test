import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CoursesListService } from './courses-list.service';
import { CoursesLayoutService } from '../courses-layout/courses-layout.service';
import { AppModel } from '../../../models/app.model';
import { CourseModel } from '../../../models/course.model';



@Component({
  selector: 'tr-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  filterCourse: string;
  courses$: Observable<AppModel | any>;
  courses: CourseModel;

  constructor(private coursesListService: CoursesListService,
              private coursesLayoutService: CoursesLayoutService,
              private store: Store<AppModel>) {

  }

  ngOnInit() {
    this.courses$ = this.store.select('courses');
    console.log(this.courses$);
    this.coursesListService.getCourses();
    console.log(this.courses$);

    this.courses$.subscribe(
      response => {
        this.courses = response.courses;
        console.log(this.courses);
      }
    );

    this.coursesLayoutService._data.subscribe(
      response => {
        this.filterCourse = response;
      }
    );
  }

  /*removeCourse(courseId: number) {
    this.courses = this.courses.filter((data: any) => data.id !== courseId);
  }*/

}

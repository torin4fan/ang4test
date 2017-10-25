import { Component, OnInit } from '@angular/core';
import { CoursesListService } from './courses-list.service';
import { CoursesLayoutService } from '../courses-layout/courses-layout.service';

@Component({
  selector: 'tr-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses;
  filterCourse: string;

  constructor(private coursesListService: CoursesListService,
              private coursesLayoutService: CoursesLayoutService) {
  }

  ngOnInit() {
    this.courses = this.coursesListService.getCourses().subscribe(
      response => {
         this.courses = response;
      }
    );

    this.coursesLayoutService._data.subscribe(
      response => {
        this.filterCourse = response;
      }
    );
  }

  removeCourse(courseId: number) {
    this.courses = this.courses.filter((data: any) => data.id !== courseId);
  }

}

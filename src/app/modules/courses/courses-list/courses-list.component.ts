import { Component, OnInit } from '@angular/core';
import { CoursesListService } from './courses-list.service';

@Component({
  selector: 'tr-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses$;

  constructor(private coursesListService: CoursesListService) { }

  ngOnInit() {
    this.courses$ = this.coursesListService.getCourses();
  }

}

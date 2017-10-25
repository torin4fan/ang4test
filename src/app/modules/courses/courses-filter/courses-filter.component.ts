import { Component, OnInit } from '@angular/core';
import { CoursesLayoutService } from '../courses-layout/courses-layout.service';

@Component({
  selector: 'tr-courses-filter',
  templateUrl: './courses-filter.component.html',
  styleUrls: ['./courses-filter.component.scss']
})
export class CoursesFilterComponent implements OnInit {
  searchInput: string;

  constructor(private coursesLayoutService: CoursesLayoutService) { }

  ngOnInit() {
  }

  filterCourses(): void {
    this.coursesLayoutService.filterCoursesData(this.searchInput);
  }

}

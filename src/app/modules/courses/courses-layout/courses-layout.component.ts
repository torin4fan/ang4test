import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../core/services/storage.service';
import { CoursesLayoutService } from './courses-layout.service';

@Component({
  selector: 'tr-courses-layout',
  templateUrl: './courses-layout.component.html',
  styleUrls: ['./courses-layout.component.scss']
})
export class CoursesLayoutComponent implements OnInit {

  searchInput: string;

  constructor(private storageService: StorageService,
              private coursesLayoutService: CoursesLayoutService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logOut(): void {
    this.storageService.clearData('user');
    this.router.navigate(['/login']);
  }

  filterCourses(): void {
    this.coursesLayoutService.filterCoursesData(this.searchInput);
  }

}

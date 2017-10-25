import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'tr-courses-layout',
  templateUrl: './courses-layout.component.html',
  styleUrls: ['./courses-layout.component.scss']
})
export class CoursesLayoutComponent implements OnInit {

  constructor(private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logOut(): void {
    this.storageService.clearData('user');
    this.router.navigate(['/login']);
  }
}

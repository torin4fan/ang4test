import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AddEditCourseService } from './add-edit-course.service';
import { Store } from '@ngrx/store';
import { CreateCourse, UpdateCourse } from '../../../redux/actions/courses.action';

@Component({
    selector: 'tr-add-edit-course',
    templateUrl: './add-edit-course.component.html',
    styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {
    courseForm: FormGroup;
    defaultAuthors: Array<string>;
    private id: string;

    constructor(
        private addEditCourseService: AddEditCourseService,
        private route: ActivatedRoute,
        private store: Store<any>
    ) {
        this.defaultAuthors = [
            'Smith',
            'John',
            'Casper',
            'Mike'
        ];
    }

    ngOnInit(): void {
        this.courseForm = this.addEditCourseService.createForm();
        this.id = this.route.snapshot.paramMap.get('id');

        if (this.id) {
            this.getCourse(this.id);
        }
    }

    getCourse(pageId: string): void {
        this.addEditCourseService.getCourse(pageId)
            .subscribe(response => this.courseForm.reset(response));
    }

    onSubmit(): void {
        (this.id)
            ? this.store.dispatch(new UpdateCourse(this.courseForm.value, this.id))
            : this.store.dispatch(new CreateCourse(this.courseForm.value));
    }
}

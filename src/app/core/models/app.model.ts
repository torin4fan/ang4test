import { CourseModel } from './course.model';

export interface AppModel {
  courses: CourseModel[];
  filter: CourseModel[];
}

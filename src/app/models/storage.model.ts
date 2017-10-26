import { CourseModel } from './course.model';

export interface StorageModel {
  text: string;
  likes: number;
  courses: CourseModel[];
}

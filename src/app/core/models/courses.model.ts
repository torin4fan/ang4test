export interface CourseModel {
    _id: string;
    date: string;
    description: string;
    duration: number;
    title: string;
}

export interface CoursesModel {
  data: CourseModel[];
  filter: CourseModel[];
}

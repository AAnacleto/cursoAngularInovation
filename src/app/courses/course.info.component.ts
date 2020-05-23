
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './courses.service';

@Component({
  templateUrl: '../courses/course.info.component.html'
})
export class CourseInfoComponent implements OnInit {
  course: Course;
  x: any;
  constructor(private activeRoute: ActivatedRoute, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(+this.activeRoute.snapshot.paramMap.get('id'));
    this.x = +this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.course.name);
    console.log(this.x);
  }
}

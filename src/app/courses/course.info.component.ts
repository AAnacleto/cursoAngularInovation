
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from './course';
import { CourseService } from './courses.service';

@Component({
  templateUrl: '../courses/course.info.component.html'
})
export class CourseInfoComponent implements OnInit {
  course: Course = new Course();

  constructor(private activeRoute: ActivatedRoute,
              private courseService: CourseService,
              private router: Router ) {
  }

  ngOnInit(): void {
    this.courseService.retrieveById(+this.activeRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });

  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('saved with sucess', course),
      error: err => console.log('Error', err)
    });

  }
}

import { Course } from './app.model';
import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  courses: any[];
  // courses: Observable<any[]>;
  constructor(db: AngularFireDatabase){
    // db.list('/courses')
    //   .subscribe(courses => {
    //     this.courses = courses;
    //     console.log(this.courses);
    // });

    db.list('/courses').valueChanges().subscribe(courses => {
        this.courses = courses;
        console.log(this.courses);
    });
  }
}

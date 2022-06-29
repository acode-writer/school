import { SchoolService } from './../services/school.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classrooms-list',
  templateUrl: './classrooms-list.component.html',
  styleUrls: ['./classrooms-list.component.scss']
})
export class ClassroomsListComponent implements OnInit {


  constructor(public schoolService: SchoolService ) { }

  ngOnInit(): void {
    
  }

}

import { Classroom } from './../classrooms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  @Input() classroom !: Classroom;
  constructor() { }

  ngOnInit(): void {
  }

}

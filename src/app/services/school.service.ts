import { classrooms } from './../classrooms';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  classrooms = classrooms
  constructor() { }
}

import { SchoolService } from './../services/school.service';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChoosedStudentClassroomValidator } from '../validators/addstudent.validator';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  addStuddentForm!: FormGroup;
  constructor(public schoolService: SchoolService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.intitAddStudentForm();
  }
  intitAddStudentForm(){
    this.addStuddentForm = this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: ['',[Validators.required, Validators.minLength(2)]],
      info: [''],
      classroom: ['', [Validators.required]],
    },{
      validators: [ChoosedStudentClassroomValidator]
    });
  }
  
  onSubmit() {

  }
}

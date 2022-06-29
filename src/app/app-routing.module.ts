import { AddStudentComponent } from './add-student/add-student.component';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { ClassroomsListComponent } from './classrooms-list/classrooms-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'classrooms-list', component: ClassroomsListComponent},
  { path: 'add-classroom', component: AddClassroomComponent},
  { path: 'add-student', component: AddStudentComponent},
  { path: '', redirectTo: '/classrooms-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

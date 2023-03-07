import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDBComponent } from './StudentDashboard/student-db.component';
import { EditStudentComponent } from './EditStudent/edit-student.component';
import { AddStudentComponent } from './AddStudent/add-student.component';

const routes: Routes = [
  {
    path: 'student-db',
    component: StudentDBComponent
  },
  {
    path: '',
    redirectTo: 'student-db',
    pathMatch: 'full'
  },
  {
    path: 'edit-student/:id', //Dynamic Routing
    component: EditStudentComponent
  },
  {
    path: 'add-student',
    component: AddStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

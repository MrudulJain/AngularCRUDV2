import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { student } from '../StudentDashboard/student-db.student';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
  formValue !: FormGroup; // what does !: this do?
  studentObj: student = new student();
  studData !: any; //Used in get call to store student data from json server

  constructor(private formbuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      fullName: [""],
      email: ["",],
      phoneNo: [0],
    })
  }

  onClickAdd() {
    this.formValue.reset();
  }

  postStudentDetails() {
    this.studentObj.fullName = this.formValue.value.fullName;
    this.studentObj.email = this.formValue.value.email;
    this.studentObj.phoneNo = this.formValue.value.phoneNo;

    this.api.postStudent(this.studentObj).subscribe(res => {
      console.log("Student details added");
      alert("Student details added");  // on success res (response) generate alert
      this.formValue.reset();
    },
      err => {
        alert("Something went wrong");
      })

  }

  onClickClose() {
    this.router.navigateByUrl('/student-db'); //defaults to LocalHost:4200
  }
}

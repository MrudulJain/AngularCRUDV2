import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { student } from '../StudentDashboard/student-db.student';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-db',
  templateUrl: './student-db.component.html',
  styleUrls: ['./student-db.component.css']
})

export class StudentDBComponent implements OnInit {

  formValue !: FormGroup // what does !: this do?
  studentObj: student = new student();
  studData !: any //Used in get call to store student data from json server

  constructor(private formbuilder: FormBuilder, private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      fullName : [""],
      email : ["",],
      phoneNo : [0]
    })
    //should run when application starts to get all details from json-server
    this.getStudentDetails();
  }

  onClickAdd() {
    this.router.navigateByUrl('/add-student');
  }

  postStudentDetails() {
    this.studentObj.fullName = this.formValue.value.fullName;
    this.studentObj.email = this.formValue.value.email;
    this.studentObj.phoneNo = this.formValue.value.phoneNo;

    this.api.postStudent(this.studentObj).subscribe(res => {
      console.log("Student details added");
      alert("Student details added");  // on success res (response) generate alert
      this.formValue.reset();
      this.getStudentDetails(); //if new record is posted, get the new record and display it
    },
    err => {
      alert("Something went wrong");
    })
    this.getStudentDetails();
  }

  getStudentDetails() {
    this.api.getStudent().subscribe(res => {
      this.studData = res;
    })
  }

  deleteStudent(row:any) {
    if(confirm("Are you sure you want to delete this entry?")){
      this.api.deleteStudent(row.id).subscribe(res => {
        this.getStudentDetails();
        alert("Student deleted");
        //every time a student is deleted, get changed student list from json server
      },
      err => {
        alert("Something went wrong");
      })
    }
  }

  onClickEdit(id: number) {
    this.router.navigate(['/edit-student', id ]);
  }
}

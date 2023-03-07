import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  endpoint = "http://localhost:3000/posts"

  postStudent(data: any) {
    return this.http.post<any>(this.endpoint, data).pipe(
      map((res: any) => {
        return res;
      }))
  }

  getStudent() {  // To get all the student details to display in main dashboard
    return this.http.get<any>(this.endpoint).pipe(
      map((res: any) => {
        return res;
      }))
  }

  updateStudent(data: any, id: number) {
    console.log(this.endpoint + "/" + id)
    return this.http.put<any>(this.endpoint + "/" + id, data).pipe(
      map((res: any) => {
        return res;
      }))
  }

  deleteStudent(id: number) {
    console.log(this.endpoint + "/" + id)
    return this.http.delete<any>(this.endpoint + "/" + id).pipe(
      map((res: any) => {
        return res;
      }))
  }

  getStudentById(id: number) { // To get ONE student details
    return this.http.get<any>(this.endpoint + "/" + id).pipe(
      map((res: any) => {
        return res;
      }))
  }
}

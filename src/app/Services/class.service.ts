import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(
    private webReqService: WebRequestService,
    private http: HttpClient
  ) { }

  getLevel() {
    return this.webReqService.get('api/level');
  }

  createLevel(name: string) {
    return this.webReqService.post('api/level', { name });
  }

  getClass(levelId: string) {
    return this.webReqService.get(`api/class/${levelId}`);
  }
  getClassDetail(){
    return this.webReqService.get('api/classdetail');
  }
  signupToLearn(studentId: String, status: boolean, qty: Number, classId: String){
    return this.webReqService.put(`api/classdetail/${classId}`, {studentId, status, qty});
  }
  updateTeacher(classId: string, _teacherId: string) {
    return this.webReqService.put(`api/class/${classId}`,{_teacherId});
  }
  createClass(name: string, address: string, start_date: string, end_date: string, weekday: string, start_time: string, end_time: string, price: string, _levelId: string) {
    return this.webReqService.post('api/class',
      {
        name,
        address,
        start_date,
        end_date,
        weekday,
        start_time,
        end_time,
        price,
        _levelId,
      }
    );
  }
  getLecturers(){
    return this.webReqService.get('api/Lecturers');
  }
  createClassDetail(classId){
    return this.webReqService.post(`api/classdetail/${classId}`,null);
  }
  postFilePoint(formData: FormData){
    // formData.append("file","abc", file.name);
    // console.log(file);
     console.log(formData)
    return this.webReqService.post('api/upload', formData)
  }
}

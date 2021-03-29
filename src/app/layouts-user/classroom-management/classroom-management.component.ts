import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ClassService } from 'app/Services/class.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import $ from 'jquery/dist/jquery.min';
import * as _ from "lodash"
import { read, write, utils } from 'xlsx';

@Component({
  selector: 'app-classroom-management',
  templateUrl: './classroom-management.component.html',
  styleUrls: ['./classroom-management.component.css']
})
export class ClassroomManagementComponent implements OnInit {
  fileToUpload: FileList = null;
  fileUploadForm: FormGroup;
  fileInputLabel: string;
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  constructor(
    private classService: ClassService,
    private title: Title,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.title.setTitle("Up Load");
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
  }
  onFileSelect(event) {
    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);

      if (!_.includes(af, file.type)) {
        alert('Only EXCEL Docs Allowed!');
      } else {
        this.fileInputLabel = file.name;
        this.fileUploadForm.get('myfile').setValue(file);
      }
    }
  }


  onFormSubmit() {

    if (!this.fileUploadForm.get('myfile').value) {
      alert('Please fill valid details!');
      return false;
    }

    const formData = new FormData();
    formData.append('formFile', this.fileUploadForm.get('myfile').value);
    formData.append('agentId', '007');

    this.classService.postFilePoint(formData).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      if (res.status === 200) {
        // Reset the file input
        this.uploadFileInput.nativeElement.value = "";
        this.fileInputLabel = undefined;
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error);
    });
    // this.http
    //   .post<any>('http://www.example.com/api/upload', formData).subscribe(response => {
    //     console.log(response);
    //     if (response.statusCode === 200) {
    //       // Reset the file input
    //       this.uploadFileInput.nativeElement.value = "";
    //       this.fileInputLabel = undefined;
    //     }
    //   }, error => {
    //     console.log(error);
    //   });
  }


















  // read() {
  //   const file = new FileReader();
  // }
  // upload(e) {
  //   let input = e.target;
  //   for (var index = 0; index < input.files.length; index++) {
  //     let reader = new FileReader();
  //     reader.onload = () => {
  //       // this 'text' is the content of the file
  //       var text = reader.result;
  //       console.log(reader.result)
  //     }

  //     reader.readAsText(input.files[index]);
  //   };
  // }
  // fileSelected(e) {
  //   let files = e.target;
  //   if (files.files && files.files.length) {
  //     this.fileToUpload = files.files[0];
  //   }
  // }
  // fileUpload() {
  //   if (this.fileToUpload && this.fileToUpload.length > 0) {
  //     const file: File = this.fileToUpload.item(0);
  //     const reader: FileReader = new FileReader();
  //     reader.readAsText(file);
  //     reader.onload = (e) => {
  //       const res = reader.result as string; // This variable contains your file as text
  //       const lines = res.split('\n'); // Splits you file into lines
  //       const ids = [];
  //       lines.forEach((line) => {
  //         ids.push(line.split(',')[0]); // Get first item of line
  //       });
  //       console.log(ids);
  //     };
  //   }
  // }
  //   fileUpload(files) {
  //     if (files && files.length > 0) {
  //         const file: File = files.item(0);
  //         const reader: FileReader = new FileReader();
  //         console.log(file);
  //         this.classService.postFilePoint(file).subscribe(res =>{
  //           console.log(res);
  //         })
  //         reader.readAsText(file);
  //         reader.onload = (e) => {
  //             const res = reader.result as string; // This variable contains your file as text
  //             const lines = res.split('\n'); // Splits you file into lines
  //             const ids = [];
  //             lines.forEach((line) => {
  //                 ids.push(line.split(',')[0]); // Get first item of line
  //             });
  //             console.log(ids);
  //         };
  //     }
  // }
  // fileSelected(files) {
  //   if (files && files.length) {
  //   this.fileToUpload = files[0];
  //   }}
  // handleFileInput(files: FileList) {
  //   this.fileToUpload = files.item(0);
  //   console.log(this.fileToUpload)
  // }
  // uploadFileToActivity() {
  //   this.classService.postFilePoint(this.fileToUpload).subscribe(data => {
  //       console.log(data)
  //     }, error => {
  //       console.log(error);
  //     });
  // }
}

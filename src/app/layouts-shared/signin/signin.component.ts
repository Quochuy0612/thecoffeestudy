import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from 'app/Services/authen.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authenService: AuthenService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }
  roles;
  isSubmitted = false;
  loginForm: FormGroup;
  get formControls() { return this.loginForm.controls; }
  ngOnInit(): void {
    if (window.localStorage.getItem("user-name")) {
      this.router.navigate(['/home']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onLoginButtonClicked(username: string, password: string) {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authenService.login(username, password).subscribe((res: HttpResponse<any>) => {
      console.log("error: ",res);
      if (res.status === 200) {
        //console.log(res)
        const roles = res.body.roles
          if (roles == "Admin") {
            this.router.navigate(['/admin']);
          }
          else {
            this.router.navigate(['/home']);
          }
      }
     
    },
    (error) =>{
      if (error.status === 401) {
        console.log("Sai mật khẩu!");
        
      }
      if (error.status === 404) {
        console.log("Sai tên đăng nhập!");
      }
    });
  };
}
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from 'app/Services/authen.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authenService: AuthenService,
    private router: Router
  ) { }
  ngOnInit(): void {
  }

  onSignupButtonClicked(fullname: string, phonnumber: string, email: string, password: string, sex: string, birthday: string, roles: string) {
    this.authenService.signup( fullname, phonnumber, email, password, sex, birthday, roles).subscribe((res: HttpResponse<any>) => {
      this.router.navigate(['/home']);
    });
    
  }
}

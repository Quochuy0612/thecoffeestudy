import { RoleGuardService } from './Services/role-guard.service';
import { AuthenService } from 'app/Services/authen.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { ViewAdminComponent } from './layouts-admin/view-admin/view-admin.component';
import { DashboardAdminComponent } from './layouts-admin/dashboard-admin/dashboard-admin.component';
import { FooterComponent } from './layouts-block/footer/footer.component';
import { HeaderComponent } from './layouts-block/header/header.component';
import { BannerComponent } from './layouts-block/banner/banner.component';
import { NavbarComponent } from './layouts-block/navbar/navbar.component';
import { SidebarComponent } from './layouts-block/sidebar/sidebar.component';
import { SignupComponent } from './layouts-shared/signup/signup.component';
import { SigninComponent } from './layouts-shared/signin/signin.component';
import { ForgotPasswordComponent } from './layouts-shared/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './layouts-shared/new-password/new-password.component';
import { ViewUserComponent } from './layouts-user/view-user/view-user.component';
import { DashboardUserComponent } from './layouts-user/dashboard-user/dashboard-user.component';
import { FormCoffeeComponent } from './layouts-admin/form-coffee/form-coffee.component';
import { FormStudyComponent } from './layouts-admin/form-study/form-study.component';
import { MenuComponent } from './layouts-block/menu/menu.component';
import { DefaultStudyComponent } from './layouts-user/default-study/default-study.component';
import { DetailProductComponent } from './layouts-user/detail-product/detail-product.component';
import { RatingComponent } from './layouts-user/rating/rating.component';
import { ScheduleComponent } from './layouts-user/schedule/schedule.component';
import { ClassScheduleComponent } from './layouts-user/class-schedule/class-schedule.component';
import { SpecificTranscriptComponent } from './layouts-user/specific-transcript/specific-transcript.component';
import { TestQuizzesComponent } from './layouts-user/test-quizzes/test-quizzes.component';
import { TranscriptComponent } from './layouts-user/transcript/transcript.component';
import { CollectionsMenuComponent } from './layouts-user/collections-menu/collections-menu.component';
import { BlogComponent } from './layouts-user/blog/blog.component';
import { PayComponent } from './layouts-user/pay/pay.component';
import { SignupCourseComponent } from './layouts-user/signup-course/signup-course.component';
import { UserProfileComponent } from './layouts-admin/user-profile/user-profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { ClassService } from './Services/class.service';
import { ProductService } from './Services/product.service';
import { WebRequestService } from './Services/web-request.service';
import { ClassroomManagementComponent } from './layouts-user/classroom-management/classroom-management.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    ViewAdminComponent,
    DashboardAdminComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    NavbarComponent,
    SidebarComponent,
    SignupComponent,
    SigninComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    ViewUserComponent,
    DashboardUserComponent,
    FormCoffeeComponent,
    FormStudyComponent,
    MenuComponent,
    DefaultStudyComponent,
    DetailProductComponent,
    RatingComponent,
    ScheduleComponent,
    ClassScheduleComponent,
    SpecificTranscriptComponent,
    TestQuizzesComponent,
    TranscriptComponent,
    CollectionsMenuComponent,
    BlogComponent,
    PayComponent,
    SignupCourseComponent,
    UserProfileComponent,
    ClassroomManagementComponent,

  ],
  providers: [
    AuthenService,
    ClassService,
    ProductService,
    RoleGuardService,
    WebRequestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Class } from 'app/models/Class.model';
import { Level } from 'app/models/Level-class.model';
import { ClassService } from 'app/Services/class.service';

@Component({
  selector: 'app-form-study',
  templateUrl: './form-study.component.html',
  styleUrls: ['./form-study.component.css']
})
export class FormStudyComponent implements OnInit {

  level: Level[];
  class: Class[];
  form: FormGroup;
  selectedValue: string;
  selectedView: string;
  // name: string;
  // selectedItemsList = [];
  // checkedIDs = [];
  // weekday = [];
  // checkboxesDataList = [
  //   {
  //     id: '2-',
  //     name: 'Thứ 2',
  //     isChecked: false
  //   },
  //   {
  //     id: '3-',
  //     name: 'Thứ 3',
  //     isChecked: false
  //   },
  //   {
  //     id: '4-',
  //     name: 'Thứ 4',
  //     isChecked: false
  //   },
  //   {
  //     id: '5-',
  //     name: 'Thứ 5',
  //     isChecked: false
  //   },
  //   {
  //     id: '6',
  //     name: 'Thứ 6',
  //     isChecked: false
  //   },
  //   {
  //     id: '7',
  //     name: 'thứ 7',
  //   },
  // ]

  constructor(
    private classService: ClassService,
  ) { }

  createNewLevel(title: string) {
    this.classService.createLevel(title).subscribe((response: any) => {
      window.location.reload();
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.classService.getLevel().subscribe((level: any[]) => {
      this.level = level;
      console.log(level);
    })
    this.form = new FormGroup({
      name: new FormControl(null),
      address: new FormControl(null),
      start_date: new FormControl(null),
      end_date: new FormControl(null),
      weekday: new FormControl(null),
      start_time: new FormControl(null),
      end_time: new FormControl(null),
      price: new FormControl(null),

    });
  }

  onSubmit() {
    this.classService.createClass(
      this.form.value.name,
      this.form.value.address,
      this.form.value.start_date,
      this.form.value.end_date,
      this.form.value.weekday,
      this.form.value.start_time,
      this.form.value.end_time,
      this.form.value.price,
      this.selectedValue,
    ).subscribe((response: any) => {
      this.form.reset();
      console.log(response);
      this.classService.createClassDetail(response._id).subscribe(Response =>{
        console.log(Response);
      }, (error) =>{
        console.log(error)
      })
    });
  }

  clickClass() {
    this.classService.getClass(this.selectedView).subscribe((res: any[]) => {
      this.class = res;
      console.log(res);
    })
    
  }

  // changeSelection() {
  //   this.fetchSelectedItems()
  // }

  // fetchSelectedItems() {
  //   this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
  //     return value.isChecked;
  //   });
  //   this.selectedItemsList;
  //   console.log(this.selectedItemsList)
  // }
}

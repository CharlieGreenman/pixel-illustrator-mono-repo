import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'pxl-choose-size',
  templateUrl: './choose-size.component.html',
  styleUrls: ['./choose-size.component.scss']
})
export class ChooseSizeComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      row: new FormControl(),
      column: new FormControl(),
      pixelSize: new FormControl(),
    })
  }

  handleFormSubmit() {
    console.log('handle form submit works');
  }


}

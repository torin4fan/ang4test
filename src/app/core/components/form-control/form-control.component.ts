import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tr-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, OnChanges {
  // @Input() control: FormControl;
  @Input() set control(value: any) {
    console.log(value);
    this._categoryId = value;
  }

  controlValue: string;
  awd: string;
  private _categoryId: FormControl;
  constructor() {

  }

  ngOnInit() {
    /*this.stop = this.control.errors.required.toString();*/
    /*console.log(this.control, 'awd');
    this.awd = 'awd';
    //this.controlValue = this.getControlValue(this.control) ;
    if (this.control) {
      //this.controlValue = this.control.status;
      this.awd = 'awd';
    }*/
    // this.controlValue = this.getControlValue(this.control) || '' ;
    // console.log(this.controlValue);
  }

  get control(): any {

    return this._categoryId;

  }

  ngOnChanges() {
    // this.controlValue = this.getControlValue(this.control) ;
    console.log(this._categoryId, 'dddddddd');
}

  private getControlValue(control: FormControl): string {
    // console.log(control, ' a');
    return 'c';

  }

}

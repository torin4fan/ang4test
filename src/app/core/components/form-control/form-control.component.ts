import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'tr-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlComponent implements OnInit, OnChanges {
  @Input() control: FormControl;

  constructor() {

  }

  ngOnInit() {
    /*this.control.valueChanges.subscribe(
      (value) => {
        this.stateValue = this.control.value;
        console.log(this.stateValue, '1');

        if (this.control.invalid) {
          console.log(this.control.invalid, '2');
          this.stateValue = value;
        }
      }
    );*/


  }


  ngOnChanges() {
    // this.controlValue = this.getControlValue(this.control) ;
    console.log(this.control, 'dddddddd');
}

  private getControlValue(control: Validators): string {
    // console.log(control, ' a');
    return 'c';

  }

}

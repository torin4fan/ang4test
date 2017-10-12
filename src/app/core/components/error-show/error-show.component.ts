import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tr-error-show',
  templateUrl: './error-show.component.html',
  styleUrls: ['./error-show.component.scss'],
})
export class ErrorShowComponent implements OnInit {

  @Input() controlError: FormControl;
  superValue: string = '';
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.controlError.valueChanges.subscribe((value) => {
      this.superValue = value;
      this.changeDetectorRef.markForCheck();
    });
  }
}

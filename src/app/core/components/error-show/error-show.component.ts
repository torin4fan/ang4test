import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { RegExpConstant } from '../../constants/regex-patters.constant';

@Component({
  selector: 'tr-error-show',
  templateUrl: './error-show.component.html',
  styleUrls: ['./error-show.component.scss'],
})
export class ErrorShowComponent implements OnInit {

  @Input() controlError: FormControl;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.controlError
      .valueChanges
      .subscribe(() => {
        this.changeDetectorRef.markForCheck();
      });
  }

  private wrapPattern(value): string {
    return '^' + value + '$';
  }

  checkRequired(): boolean {
    return this.controlError.errors &&
      (this.controlError.touched || this.controlError.dirty) &&
      this.controlError.errors.required;
  }

  checkPatternNumbAndLatin (): boolean {
    return this.controlError.errors &&
      this.controlError.errors.pattern &&
      (this.controlError.touched || this.controlError.dirty) &&
      this.controlError.errors.pattern.requiredPattern === this.wrapPattern(RegExpConstant.latinAndNumber);
  }

  checkPatternLatin (): boolean {
    return this.controlError.errors &&
      this.controlError.errors.pattern &&
      (this.controlError.touched || this.controlError.dirty) &&
      this.controlError.errors.pattern.requiredPattern === this.wrapPattern(RegExpConstant.latin);
  }
}

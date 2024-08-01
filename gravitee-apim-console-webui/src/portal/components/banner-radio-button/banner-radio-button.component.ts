import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatRadioButton} from "@angular/material/radio";

@Component({
  selector: 'banner-radio-button',
  standalone: true,
  imports: [
    MatRadioButton
  ],
  templateUrl: './banner-radio-button.component.html',
  styleUrl: './banner-radio-button.component.scss'
})
export class BannerRadioButtonComponent {
  @Input()
  value!: boolean;

  @Input()
  title!: string;

  @Input()
  subtitle!: string;

  @Input()
  disabled: boolean = false;

  @Input()
  selected: boolean = false;

  @Output()
  bannerOptionSelected = new EventEmitter<boolean>();

  onBannerOptionSelected() {
    this.bannerOptionSelected.emit(this.value);
  }
}

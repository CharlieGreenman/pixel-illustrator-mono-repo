import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseSizeComponent } from './choose-size/choose-size.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule],
  declarations: [ChooseSizeComponent],
  exports: [ChooseSizeComponent],
})
export class PixelAngstCommonUiModule {}

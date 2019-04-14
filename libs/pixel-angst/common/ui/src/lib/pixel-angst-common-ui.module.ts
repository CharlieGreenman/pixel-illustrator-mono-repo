import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseSizeComponent } from './choose-size/choose-size.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [ChooseSizeComponent],
  exports: [ChooseSizeComponent],
})
export class PixelAngstCommonUiModule {}

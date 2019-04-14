import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PixelAngstCommonUiModule } from '@pxl/pixel-angst/common/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PixelAngstCommonUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

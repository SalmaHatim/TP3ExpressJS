import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ColorPickerComponent } from './color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

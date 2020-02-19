import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog'
import {ButtonModule} from 'primeng/primeng';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ButtonModule,
    TableModule,
    DialogModule,
    BrowserModule,
    AngularFontAwesomeModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

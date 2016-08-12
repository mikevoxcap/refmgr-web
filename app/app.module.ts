/**
 * Created by mhoffman on 8/12/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// This is the NG Module decorator. I've defined three things
// Imports are other modules that export material we need in this module. BrowserModule is common
// Declarations are components and directives that belong to this module
// Bootstrap identifies the root component that Angular should bootstrap when it starts this application
@NgModule({
    imports: [BrowserModule], declarations: [AppComponent], bootstrap: [AppComponent]
})
export class AppModule { }
/**
 * Created by mhoffman on 8/12/2016.
 */
import { Component } from '@angular/core';

// A decorator to tell Angular what template to use and how to create the component.
// Selector is a CSS selector and the template is HTML for the template.
@Component({
  selector: 'my-app', template: '<h1>My app</h1>'
})

// Each Angular application has at least one root component. Convention is AppComponent.
// Components control a view through an associated template.
export class AppComponent {}
/**
 * Created by mhoffman on 8/12/2016.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// Tells Angular to bootstrap the application running in a browser. We could bootstrap other
// ways, including through mobile in Apache Cordova or NativeScript.
platformBrowserDynamic().bootstrapModule(AppModule);
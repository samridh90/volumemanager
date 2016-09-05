import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/Rx';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

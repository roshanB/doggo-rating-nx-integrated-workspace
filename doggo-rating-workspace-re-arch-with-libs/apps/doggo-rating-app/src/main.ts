import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '@doggo-rating-workspace-re-arch-with-libs/shared/util-environments';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

if(environment.production) {
  enableProdMode();
}

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { OthComponent } from './oth/oth.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [OthComponent],
})
export class AppServerModule {}

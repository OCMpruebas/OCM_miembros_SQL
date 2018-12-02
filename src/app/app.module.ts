import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

// servicios
import { MiembrosService } from './services/miembros.service';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';

import { AppComponent } from './app.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { MiembroComponent } from './components/miembros/miembro.component';

@NgModule({
  declarations: [
    AppComponent,
    MiembrosComponent,
    MiembroComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    MiembrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

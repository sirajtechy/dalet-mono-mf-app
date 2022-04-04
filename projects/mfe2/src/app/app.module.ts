import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroCardDaletComponent } from './components/micro-card-dalet/micro-card-dalet.component';
// import { DraggableResizableComponent } from './draggable-resizable/draggable-resizable.component';

@NgModule({
  declarations: [
    AppComponent,
    MicroCardDaletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

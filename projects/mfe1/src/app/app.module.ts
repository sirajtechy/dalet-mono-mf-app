import { ResizableDraggableComponent } from './resizable-draggable/resizable-draggable.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { MicroCardModule } from './micro-card/micro-card.module';
import { ResizeDragModule } from './resizable-draggable/resize-drag.module';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop'
// import {Bro} from "@angular/material"
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightsModule,
    ResizeDragModule,
    MicroCardModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    ResizableDraggableComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

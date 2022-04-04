import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ResizableDraggableComponent } from './resizable-draggable/resizable-draggable.component';
import { HomeComponent } from './home/home.component';
import { MicroCardModule } from './micro-card/micro-card.module';
import { MicroCardComponent } from './micro-card/micro-card.component';
import { ResizeDragModule } from './resizable-draggable/resize-drag.module';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ResizeDragModule,
    MicroCardModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    ResizableDraggableComponent,
    MicroCardComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

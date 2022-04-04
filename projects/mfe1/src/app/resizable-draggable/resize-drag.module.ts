import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { DRAG_RESIZE_ROUTES } from './resize-drag.routes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forChild(DRAG_RESIZE_ROUTES)
  ],
  declarations: [
  ]
})
export class ResizeDragModule { }

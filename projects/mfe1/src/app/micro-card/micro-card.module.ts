import { FormsModule } from '@angular/forms';
import { MICRO_CARD_ROUTES } from './micro-card.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    FormsModule,
    RouterModule.forChild(MICRO_CARD_ROUTES)
  ],
  declarations: [
  ]
})
export class MicroCardModule { }

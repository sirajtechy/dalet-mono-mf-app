import { MICRO_CARD_ROUTES } from './micro-card.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { MicroCardComponent } from './micro-card.component';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    RouterModule.forChild(MICRO_CARD_ROUTES)
  ],
  declarations: [
    MicroCardComponent
  ]
})
export class MicroCardModule { }

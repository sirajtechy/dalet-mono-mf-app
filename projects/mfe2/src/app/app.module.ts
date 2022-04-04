import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItayMicroCardComponent } from './itay-micro-card/itay-micro-card.component';
import { ItayMicroCardModule } from './itay-micro-card/itay-micro-card.module';
import { ItayHomeComponent } from './itay-home/itay-home.component';
import { APP_ROUTES } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    ItayHomeComponent,
    ItayMicroCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ItayMicroCardModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ItayHomeComponent } from './itay-home/itay-home.component';
import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
    { path: '', component: ItayHomeComponent, pathMatch: 'full'}
];

import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },

    // Your route here:

    {
      path: 'flights',
      loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: URL,
          exposedModule: './Module1'
        })
        .then(m => m.FlightsModule) 
    },
    {
      path: 'micro-card',
      loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: URL,
          exposedModule: './Module2'
        })
        .then(m => m.MicroCardModule) 
    },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];


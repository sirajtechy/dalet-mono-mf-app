import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const MICRO_APP_ONE_URL = 'http://localhost:3000/remoteEntry.js';
const MICRO_APP_TWO_URL = 'http://localhost:3002/remoteEntry.js'
export const APP_ROUTES: Routes = [
    // {
    //   path: 'home',
    //   component: HomeComponent,
    //   pathMatch: 'full'
    // },

    // // Your route here:

    {
      path: '',
      loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: MICRO_APP_ONE_URL,
          exposedModule: './MicroCard'
        })
        .then(m => m.MicroCardModule) 
    },
    {
      path: '',
      loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: MICRO_APP_ONE_URL,
          exposedModule: './ResizeDrag'
        })
        .then(m => m.ResizeDragModule) 
    },
    {
      path: '',
      loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: MICRO_APP_TWO_URL,
          exposedModule: './ItayMicroCard'
        })
        .then(m => m.ItayMicroCardModule) 
    },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];


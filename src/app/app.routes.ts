import { Routes } from '@angular/router';
import { RxjsSubject } from './components/rxjs-subject/rxjs-subject';
import { RxjsBasic } from './components/rxjs/rxjs';

export const routes: Routes = [
    {
        path: 'rxjs-basic',
        component: RxjsBasic
    },
    {
        path:'rxjs-subject',
        component: RxjsSubject
    }
];

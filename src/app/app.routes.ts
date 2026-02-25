import { Routes } from '@angular/router';
import { CombineObs } from './components/combine-obs/combine-obs';
import { RxjsSubject } from './components/rxjs-subject/rxjs-subject';
import { RxjsBasic } from './components/rxjs/rxjs';

export const routes: Routes = [
    {
        path: 'rxjs-basic',
        component: RxjsBasic
    },
    {
        path: 'rxjs-subject',
        component: RxjsSubject
    },
    {
        path: 'combine-obs',
        component: CombineObs
    }
];

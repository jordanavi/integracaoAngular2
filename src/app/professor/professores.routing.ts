import { Routes, RouterModule } from "@angular/router";
import { ProfessorComponent } from './professor.component';

const PROFESSORES_ROUTES: Routes = [
    {path: '',
    component: ProfessorComponent
},

{
    path: ':id',
    component: ProfessorComponent
}];

export const professoresRouting = RouterModule.forChild(PROFESSORES_ROUTES);
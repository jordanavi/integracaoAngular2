import { Routes, RouterModule } from "@angular/router";
import { ProfessorComponent } from './professor.component';

const PROFESSOR_ROUTES: Routes = [
    {path: '',
    component: ProfessorComponent
}
];

export const professorRouting = RouterModule.forChild(PROFESSOR_ROUTES);
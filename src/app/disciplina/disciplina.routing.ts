import { Routes, RouterModule } from '@angular/router';
import { DisciplinaComponent } from './disciplina.component';


const DISCIPLINA_ROUTES: Routes = [{
  path: '',
  component: DisciplinaComponent
}
];

export const disciplinaRouting = RouterModule.forChild(DISCIPLINA_ROUTES);
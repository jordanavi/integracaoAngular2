/*import {Routes, RouterModule } from '@angular/router'*/
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './professor/professor.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { AreaConhecimentoComponent } from './area-conhecimento/area-conhecimento.component';
import { HomeComponent } from './home/home.component';

export const routes : Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: './home/home.component.html',
        component: HomeComponent
    },

    {
        path: 'professor',
        component: ProfessorComponent
    },
    {
        path: './professor/professor.component.html',
        component: ProfessorComponent
    },

    {
        path: 'conteudo',
        component: ConteudoComponent
        },
    {
        path: './conteudo/conteudo.component.html',
        component: ConteudoComponent
    },

    {
        path: 'disciplina',
        component: DisciplinaComponent
    },
    {
        path: './disciplina/disciplina.component.html',
        component: DisciplinaComponent
    },

    {
        path: 'areaConhecimento',
        component: AreaConhecimentoComponent
    },
    {
        path: './area-conhecimento/area-conhecimento.component.html',
        component: AreaConhecimentoComponent
    }
];

/*export const Routing = RouterModule.forRoot(routes);*/
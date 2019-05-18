import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { disciplinaRouting } from './disciplinas.routing';
import { DisciplinaComponent } from './disciplina.component';

@NgModule({
    imports: [
        CommonModule, disciplinaRouting, FormsModule
    ],
    declarations: [DisciplinaComponent]
})
export class DisciplinasModule{ }
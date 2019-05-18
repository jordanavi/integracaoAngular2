import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { professorRouting } from './professores.routing';
import { FormsModule } from '@angular/forms';
import { ProfessorComponent } from './professor.component';

@NgModule({
    imports: [
        CommonModule, professorRouting, FormsModule
    ],
    declarations: [ProfessorComponent]
})
export class ProfessoresModule{ }
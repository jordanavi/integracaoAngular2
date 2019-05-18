import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
import { professoresRouting } from './professores.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, professoresRouting, FormsModule],
    declarations: [ProfessorComponent]
})
export class ProfessoresModule{ }
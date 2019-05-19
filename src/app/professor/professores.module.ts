import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
import { professoresRouting } from './professores.routing';
import { FormsModule } from '@angular/forms';
import { ProfessoresService } from './professores.service';
import { ProfessorFormComponent } from './professor-form/professor-form.component';

@NgModule({
    imports: [CommonModule, professoresRouting, FormsModule],
    declarations: [ProfessorComponent, ProfessorFormComponent],
    providers: [ProfessoresService]
})
export class ProfessoresModule{ }
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
import { professoresRouting } from './professores.routing';
import { FormsModule } from '@angular/forms';
import { ProfessoresService } from './professores.service';


@NgModule({
    imports: [CommonModule, professoresRouting, FormsModule],
    declarations: [ProfessorComponent],
    providers: [ProfessoresService]
})
export class ProfessoresModule{

 }
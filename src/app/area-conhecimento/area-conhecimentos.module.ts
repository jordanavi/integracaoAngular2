import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { areaConhecimentoRouting } from './area-conhecimentos.routing';
import { AreaConhecimentoComponent } from './area-conhecimento.component';
import { AreaConhecimentosService } from './area-conhecimentos.service';
import { AreaConhecimentoFormComponent } from './area-conhecimento-form/area-conhecimento-form.component';

@NgModule({
    imports: [
        CommonModule, areaConhecimentoRouting, FormsModule],
        declarations: [AreaConhecimentoComponent, AreaConhecimentoFormComponent],
        providers: [AreaConhecimentosService]
})
export class AreaConhecimentosModule{ }
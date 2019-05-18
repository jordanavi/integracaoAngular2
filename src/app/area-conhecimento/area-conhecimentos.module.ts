import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { areaConhecimentoRouting } from './area-conhecimentos.routing';
import { AreaConhecimentoComponent } from './area-conhecimento.component';

@NgModule({
    imports: [
        CommonModule, areaConhecimentoRouting, FormsModule
    ],
    declarations: [AreaConhecimentoComponent]
})
export class AreaConhecimentosModule{ }
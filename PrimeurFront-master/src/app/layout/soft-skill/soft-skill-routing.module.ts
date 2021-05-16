import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SoftSkillComponent} from './soft-skill.component';

const routes: Routes = [
    {
        path: '' , component: SoftSkillComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftSkillRoutingModule { }

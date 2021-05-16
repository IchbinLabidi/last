import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechSkillComponent} from './tech-skill.component';

const routes: Routes = [
    {
        path: '' , component: TechSkillComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechSkillRoutingModule { }

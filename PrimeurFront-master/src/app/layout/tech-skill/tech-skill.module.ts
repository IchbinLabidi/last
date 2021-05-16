import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechSkillRoutingModule } from './tech-skill-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {TechSkillComponent} from './tech-skill.component';

@NgModule({
  declarations: [TechSkillComponent],
  imports: [ CommonModule, TechSkillRoutingModule , PageHeaderModule]
})
export class TechSkillModule { }

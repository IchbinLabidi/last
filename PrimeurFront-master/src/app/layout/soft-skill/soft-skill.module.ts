import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftSkillRoutingModule } from './soft-skill-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {SoftSkillComponent} from './soft-skill.component';
import {ReactiveFormsModule} from '@angular/forms' ;
@NgModule({
  declarations: [SoftSkillComponent],
  imports: [ CommonModule, SoftSkillRoutingModule, PageHeaderModule, ReactiveFormsModule ],
})
export class SoftSkillModule { }

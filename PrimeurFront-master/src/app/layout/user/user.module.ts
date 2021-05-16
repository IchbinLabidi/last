import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserComponent} from './user.component';
import {PageHeaderModule} from '../../shared/modules';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [UserComponent],
    imports: [CommonModule, UserRoutingModule, PageHeaderModule, TranslateModule]
})
export class UserModule { }

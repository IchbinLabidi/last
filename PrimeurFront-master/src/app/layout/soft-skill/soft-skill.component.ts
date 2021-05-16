import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';
import { SoftSkillService } from 'src/app/service/SoftKill/soft-skill.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.scss'],
  animations: [routerTransition()]
})
export class SoftSkillComponent implements OnInit {
  public userForm: FormGroup ;
  public users: any ;
  public skills: any ;
  constructor(private softservice: SoftSkillService,
              public formBuilder: FormBuilder,
              public router: Router,
              private userService: UserService                      ) { }

  ngOnInit() {
    this.getSkills(Number(localStorage.getItem('id'))) ;
    this.userForm = this.formBuilder.group({
      nomSkill: ['', [Validators.required]] ,
      noteAct: ['', [Validators.required]],
      noteFuture: ['', [Validators.required]]


  });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const body = {
       nomSkill: this.userForm.value.nomSkill,
       noteAct: this.userForm.value.noteAct,
       noteFuture: this.userForm.value.noteFuture

      };
      this.softservice.createSoftSkill(Number(localStorage.getItem('id')), body).subscribe(data => {
        console.log(data) ;
      }) ;
    } else {
        alert('form non valide ! ') ;
      }
  }
  getSkills(id: number) {
    this.userService.findById(id)
    .subscribe(data => {
        console.log(data) ;
        this.users = data ;
        this.skills = this.users.softSkills ;
        console.log(this.skills[0].noteAct) ;
     /*this.users = data ;
     this.skills = this.users[id].softSkills[0].noteAct ;
     console.log(id) ;
     console.log('-------' + this.users[id].softSkills[0].noteAct)    ;*/

    });
}
}


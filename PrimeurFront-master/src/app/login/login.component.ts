import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public imagSource = 'assets/images/login-img.jpg';
    public userForm: FormGroup;

    constructor(
        public router: Router,
        private userService: UserService,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');

    }

    onSubmit() {
        if (this.userForm.valid) {
            // alert('User form is valid!!');
            // alert('form email value : ' + this.userForm.value.email + '---password:---' + this.userForm.value.password);
            const body = {
                'mail': this.userForm.value.email,
                'password': this.userForm.value.password
            };
            this.userService.createUser(body).subscribe((data: any) => {
                console.log('------- data --------', data);
                this.router.navigate(['']) ;
            }, (error: any) => {
                console.log('-------- error -------', error);
            });

        } else {
            alert('User form is not valid!!');
        }
    }
}

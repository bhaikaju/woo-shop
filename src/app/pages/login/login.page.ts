import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoadingController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  returnUrl: string;
  authState: boolean;


  constructor(private authService: AuthService,
              private loadingController: LoadingController,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || null;
    this.authService.authState$.subscribe(state => {
      this.authState = state;

      if (this.authState) {
        if (this.returnUrl !== null) {
          this.router.navigateByUrl(this.returnUrl).then();
        } else {
          this.router.navigateByUrl('/').then();
        }

      }
    })
  }

  login(loginForm: NgForm) {

    if (loginForm.invalid) {
      return;
    }
     else {
      const {email, password} = loginForm.value;
      this.authService.login(email, password).then();
    }
  }
}

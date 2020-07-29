import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Storage} from "@ionic/storage";
import {AlertController, LoadingController} from "@ionic/angular";
import {SkipInterceptor} from "./backend.interceptor";
import {take} from "rxjs/operators";
import {CustomerModel} from "../models/customerModel";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private WP_AUTH_URL = environment.auth_url;
    private WP_JWT_VERIFY_URL = environment.token_verify_url;
    private serverUrl = environment.backend_api_url;
    private currentAuthState = false;
    returnUrl: string;

    authState$ = new BehaviorSubject<boolean>(false);


    constructor(private httpClient: HttpClient,
                private router: Router,
                private storage: Storage,
                private loadingController: LoadingController,
                private route: ActivatedRoute,
                private alertController: AlertController) {
        this.init();
    }


    async login(username: string, password: string) {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl;

        const headers = new HttpHeaders().set(SkipInterceptor, '');
        const loader = await this.loadingController.create({
            animated: true,
            backdropDismiss: true,
            message: "Authenticating Account",
            spinner: "crescent",
            id: "auth"
        });

        await loader.present().then();

        if (!this.currentAuthState) {
            this.httpClient.post(`${this.WP_AUTH_URL}`, {username, password}, {headers})
                .subscribe(async (data: AuthResponse) => {
                    await loader.dismiss().then();
                    if (data.token !== null) {
                        this.storage.set('data', {...data}).then(resp => {
                            this.currentAuthState = true;
                            this.authState$.next(this.currentAuthState);
                            this.fetchUserDetails(data.user_email).toPromise().then((user: CustomerModel) => {
                                this.storage.set('user', user);

                                this.router.navigate([this.returnUrl]).then();
                            });
                        });

                    } else {
                        this.currentAuthState = false;
                        this.authState$.next(this.currentAuthState);
                    }
                }, async (err: ErrorResponse) => {
                    await loader.dismiss().then();
                    this.currentAuthState = false;
                    this.authState$.next(this.currentAuthState);
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 403) {
                            const alert = await this.alertController.create({
                                message: 'Bad Username Or Password',
                                buttons: [
                                    {
                                        role: 'cancel',
                                        text: 'Ok'
                                    }
                                ],
                                header: 'Authentication Failed'
                            });

                            await alert.present().then();
                        } else {
                            const alert = await this.alertController.create({
                                message: err.statusText,
                                buttons: [
                                    {
                                        role: 'cancel',
                                        text: 'Ok'
                                    }
                                ],
                                header: 'Authentication Failed'
                            });

                            await alert.present().then();
                        }
                    }
                });
        } else {
            await loader.dismiss().then();
            this.router.navigateByUrl('/').then();
            return;
        }

    }

    private fetchUserDetails(email: string) {
        return this.httpClient.get(`${this.serverUrl}/customers?email=${email}`).pipe(
            take(1)
        );
    }

    logout() {
        this.currentAuthState = false;
        this.authState$.next(this.currentAuthState);
        this.storage.remove('user').then();
        this.storage.remove('data').then();
        this.router.navigateByUrl('/').then();
    }

    init() {
        this.storage.get('data').then(async (data: AuthResponse) => {
            if (data.token !== null) {
                // Verify the token validity
                this.httpClient.post(`${this.WP_JWT_VERIFY_URL}`, {token: data.token}, {
                    headers: {
                        Authorization: `Bearer ${data.token}`
                    }
                }).toPromise().then((res: jwtVerifyResponse) => {
                    if (res.data.status === 200) {
                        this.fetchUserDetails(data.user_email).toPromise().then((user: CustomerModel) => {
                            this.storage.set('user', user);
                            this.currentAuthState = true;
                            this.authState$.next(this.currentAuthState);
                        })
                    } else {
                        this.currentAuthState = false;
                        this.authState$.next(this.currentAuthState);
                    }
                }).catch(async (err: HttpErrorResponse) => {
                    const alert = await this.alertController.create({
                        message: err.statusText,
                        animated: true,
                        buttons: [
                            {
                                role: 'cancel',
                                text: 'Ok'
                            }
                        ]
                    });

                    await alert.present().then();
                })
            }
        }).catch(err => console.log('Token not present'));


    }

    getAuthState$(): Observable<boolean> {
        return this.authState$.asObservable();
    }

    getCurrentAuthState(): boolean {
        return this.currentAuthState;
    }

}


export interface AuthResponse {
    token: string;
    user_email: string;
    user_nicename: string;
    user_display_name: string;
}

// tslint:disable-next-line:class-name
export interface jwtVerifyResponse {
    code: string;
    data: {
        status: number
    };
}


interface ErrorResponse {
    status: number;
    statusText: string;
}


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import * as firebase from 'firebase/compat';
import { Observable, Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';


function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserbool: boolean = false;
  jpAnalyticsData: Subject<any> = new Subject<any>();
  jpPassionCategoryData: Subject<any> = new Subject<any>();
  prodStatusData: Subject<any> = new Subject<any>();
  jpPassionListsData: Subject<any> = new Subject<any>();
  pidvsuidData: Subject<any> = new Subject<any>();
  ipAddress: any;
  public user$: Observable<any> = this.afAuth.user.pipe(shareReplay(1));

  public confirmationResult: any;
  constructor(
    public afAuth: AngularFireAuth, public router: Router, 
  ) {
    this.user$.subscribe();
  }


  get nativeWindow(): any {
    return _window();
  }

  /* It's Phone Login */
  async login(phoneNumber: any, appVerifier: firebase.default.auth.ApplicationVerifier) {
    return await this.afAuth.signInWithPhoneNumber(phoneNumber, appVerifier);
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      // console.log("just oput of app");
      localStorage.clear();
      // this.jpAnalyticsData.unsubscribe();
      this.router.navigate(['']);

    });
  }
}
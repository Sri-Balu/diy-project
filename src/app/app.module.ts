import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from 'src/app/login/loginpage/loginpage.component';
import { OTPpageComponent } from './login/otppage/otppage.component';
import { AppbarComponent } from './home/appbar/appbar.component';
import { MenuComponent } from './home/menu/menu.component';
import { OrgdetailsComponent } from './home/menu/orgdetails/orgdetails.component';
import { IonicModule } from '@ionic/angular';
import { CRUDComponent } from './home/menu/crud/crud.component';
import { WalletComponent } from './home/menu/wallet/wallet.component';
import { LoadingComponent } from './loading/loading.component';
import { NotificationsComponent } from './home/menu/notifications/notifications.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MasterhomeComponent } from './home/masterhome/masterhome.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'
import Swal from 'sweetalert2';
<<<<<<< Updated upstream
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyCcFGawr9nKSzgEQCA9dWFqb1lTk6Z3ujc",
  authDomain: "diy-project-c9df6.firebaseapp.com",
  projectId: "diy-project-c9df6",
  storageBucket: "diy-project-c9df6.appspot.com",
  messagingSenderId: "302206630828",
  appId: "1:302206630828:web:d6d874cd48c3cf1fafd809",
  measurementId: "G-8YH7JH4X5Z"
};
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    OTPpageComponent,
    AppbarComponent,
    MenuComponent,
    OrgdetailsComponent,
    CRUDComponent,
    WalletComponent,
    NotificationsComponent,
    MasterhomeComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    FormsModule,
<<<<<<< Updated upstream
    NgCircleProgressModule,
    BrowserAnimationsModule, 
=======
    NgCircleProgressModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

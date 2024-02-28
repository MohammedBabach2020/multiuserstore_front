import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateStoreComponent } from "./components/create-store/create-store.component";
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: "createStore", component: CreateStoreComponent },
  {
    path: "layout", component: LayoutComponent, children: [
      { path: "dashboard", component: DashboardComponent }

    ]
  }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateLogComponent } from './components/create-log/create-log.component';
import { HomeComponent } from './components/home/home.component';
import { ListLogComponent } from './components/list-log/list-log.component';
import { LogDetailsComponent } from './components/log-details/log-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'create-log', component: CreateLogComponent},
  {path: 'logs-list', component: ListLogComponent},
  {path: 'logDetails/:id', component: LogDetailsComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

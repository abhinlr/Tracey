import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateLogComponent } from './components/create-log/create-log.component';
import { HomeComponent } from './components/home/home.component';
import { ListLogComponent } from './components/list-log/list-log.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-log', component: CreateLogComponent},
  {path: 'logs-list', component: ListLogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from './component/task-one/task-one.component';

const routes: Routes = [
  { path: '', redirectTo: '/task-1', pathMatch: 'full' },
  { path: 'task-1', component: TaskOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

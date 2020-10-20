import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  // { path: 'about', loadChildren: './about/about.module#AboutModule' },  懒加载 未实现
  { path: 'todo/:id', component: DetailComponent },
  { path: 'about', component: AboutComponent},

  { path: '', redirectTo: '/todo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

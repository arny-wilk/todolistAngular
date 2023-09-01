import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodolistComponent } from './components/todos/todolist/todolist.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: ':userId',
    component: PresentationComponent,
    children: [
      {
        path: ':todos',
        component: TodolistComponent,
        children: [
          { path: ':index', component: TodosComponent },
          { path: ':category', component: TodosComponent },
        ],
      },
    ],
  },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'todos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { TodoListPageComponent } from './pages';

export const todosRoutes: Routes = [
  {
    path: '',
    title: 'To-Do List App',
    component: TodoListPageComponent,
  },
];

import { Component } from '@angular/core';

import { TodoFormComponent, TodoListComponent } from '../../components';

@Component({
  selector: 'app-todo-list-page',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.scss',
})
export class TodoListPageComponent {}

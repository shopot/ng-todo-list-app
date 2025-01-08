import { Component, inject } from '@angular/core';

import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoService } from '../../services';

@Component({
  selector: 'app-todo-list',
  imports: [TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  private todoService = inject(TodoService);
  todoList = this.todoService.getTodoList();
}

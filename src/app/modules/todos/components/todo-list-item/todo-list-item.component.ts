import { Component, inject, Input } from '@angular/core';

import { TodoService } from '../../services';
import { TodoItem } from '../../shared';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss',
})
export class TodoListItemComponent {
  @Input() todo: TodoItem = null!;
  todoService = inject(TodoService);

  toggleTodoCompleted() {
    this.todoService.toggleCompleted(this.todo.id);
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id);
  }
}

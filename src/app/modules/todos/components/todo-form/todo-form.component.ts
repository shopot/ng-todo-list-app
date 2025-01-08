import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoService } from '../../services';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  todoText: string = '';
  todoService: TodoService = inject(TodoService);

  addNewTodo(text: string) {
    this.todoService.addTodo(text);

    this.todoText = '';
  }
}

import { v4 as uuidv4 } from 'uuid';
import { Injectable, signal } from '@angular/core';

import { TodoItem } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  localStorageKey = 'NG_TODO_LIST';
  todoList = signal<TodoItem[]>([]);

  constructor() {
    this.loadTodoList();
  }

  addTodo(text: string) {
    const trimmedText = text.trim();

    if (trimmedText) {
      const newTodo: TodoItem = {
        id: uuidv4(),
        task: trimmedText,
        completed: false,
      };

      this.todoList.update(value => [...value, newTodo]);

      this.saveTodoList();
    }
  }

  deleteTodo(todoId: string) {
    this.todoList.update(value => value.filter(item => item.id !== todoId));

    this.saveTodoList();
  }

  toggleCompleted(todoId: string) {
    this.todoList.update(value =>
      value.map(item => {
        if (item.id === todoId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );

    this.saveTodoList();
  }

  getTodoList() {
    return this.todoList.asReadonly();
  }

  loadTodoList() {
    const storedTodoLits = localStorage.getItem(this.localStorageKey);

    if (storedTodoLits) {
      this.todoList.set([...JSON.parse(storedTodoLits)]);
    }
  }

  saveTodoList() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.todoList()));
  }
}

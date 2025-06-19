import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearAllTodos, deleteTodo, toggleTodo } from '../../ngrx/actions/todo.actions';

@Component({
  selector: 'app-todo-crud',
  imports: [
    CommonModule
  ],
  templateUrl: './todo-crud.component.html',
  styleUrl: './todo-crud.component.css'
})
export class TodoCrudComponent {
  todos$: Observable<any> | undefined;

  constructor(private store: Store) {
    this.todos$ = this.store.select((state: any) => state.todoArr); // selector
  }

  deleteMyTodo(id: number) {
    this.store.dispatch(deleteTodo({ id }))
  }
  toggleMyTodo(id: number) {
    this.store.dispatch(toggleTodo({ id }))
  }
  clearAllMyTodos() {
    this.store.dispatch(clearAllTodos());
  }
}

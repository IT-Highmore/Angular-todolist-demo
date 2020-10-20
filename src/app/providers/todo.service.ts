import { Injectable } from '@angular/core';
import { Todo } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private data: Todo[] = [
    { id: 999, description: 'For test purpose', category: 1, content: 'test' },
    { id: 998, description: 'For test purpose aaaa', category: 0, content: 'test aaa' },
  ];
  constructor() { }

  getTodos(): Todo[] {
    return this.data
  }

  delete(ids: number[]): Todo[] {
    return this.data = this.data.filter(item => ids.indexOf(item.id) === -1);
  }
  getTodo(id: number): Todo {
    return this.data.find(item => item.id === id)
  }
  addTodo(todo: Partial<Todo>): Todo[]{
    const id = parseInt(Math.random() * 1000000 + '',10);
    const newTodo = {...todo, id} as Todo;  // 类型强转
    this.data = [...this.data, newTodo];
    return this.data
  }
}

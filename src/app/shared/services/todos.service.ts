import { Injectable } from "@angular/core";
import { TodosComponent } from "src/app/components/todos/todos.component";
import { Todo } from "../models/todo";
import { User } from "../models/user";

@Injectable( { providedIn: 'root' } )
export class Services {

    get todos(): Todo[] {
      return this.findAll()
    }

public findAll() {
  return this.todos;
}

public findTodoById(id: string) {
  return this.todos.findIndex(todo => todo.id === id);
}

public findByCategory(category: string) {
  return this.todos.findIndex( todo => todo.category === category)
}

public findCompleted() {
  return this.todos.filter(todo => todo.done === true);
}

public findUnfinished() {
  return this.todos.filter(todo => todo.done === false);
}



}

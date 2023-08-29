import { Injectable } from "@angular/core";
import { TodosComponent } from "src/app/components/todos/todos.component";
import { Todo } from "../models/todo";

@Injectable( { providedIn: 'root' } )
export class Services {

    get todos() {
      return this.findAll()

}

public findAll() {
  return [
    new Todo('6872aa38-92f7-4abd-b35f-9e476731e339', "Angular pratique", false, false, "A faire pour s'ameliorer avec le framework"),
    new Todo('94313729-c2bf-495c-b88c-2058b1e337a1', 'Faire les courses', false, false, "A faire comme d'hab "),
    new Todo('24c656e3-c77c-4187-a09f-5350fb3e188c', 'Faire du sport', false, false, "A faire pour se maintenir en forme")
  ];
}

public findById(id: string) {}
public create(todo: TodosComponent) {}
public update(updated: TodosComponent) {}
public delete(id: string) {}

}

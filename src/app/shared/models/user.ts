import { Todo } from "./todo";

export interface User {
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    todos: Todo[];
}
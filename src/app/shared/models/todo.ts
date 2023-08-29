export class Todo {
  constructor(public id: string, public desc: string, public done: boolean = false, public updating: boolean = false, details: string) {}
}

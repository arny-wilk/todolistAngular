export class Todo {
  constructor(
    public id: string,
    public category: string,
    public desc: string,
    public done: boolean = false,
    public updating: boolean = false,
    public details: string
  ) {}
}

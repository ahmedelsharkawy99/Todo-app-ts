class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = `${Math.round(Math.random() * 10000)}`;
    this.text = todoText;
  }
}

export default Todo;

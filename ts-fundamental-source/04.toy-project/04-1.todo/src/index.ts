let todoItems: { id: number; title: string; done: boolean }[] ;

// api
function fetchTodoItems(): { id: number, title: string, done: boolean }[] {
  const todos: { id: number, title: string, done: boolean }[] = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos: object[] = fetchTodoItems();
  return todos;
}

function addTodo(todo: {id: number, title: string, done: boolean}): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: { id: number, title: string, done: boolean}): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems(): void {
  const item1 = {
    id: 4,
    title: '아이템 4',
    done: false,
  }
  addTodo(item1);
  addTodo({
    id: 5,
    title: '아이템 5',
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();

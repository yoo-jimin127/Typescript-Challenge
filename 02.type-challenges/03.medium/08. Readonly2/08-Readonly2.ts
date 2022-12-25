type MyReadonly2<T, K extends keyof T = keyof T> = 
T & { readonly [P in K]: T[P]; };

interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }
  
  const todo2: MyReadonly2<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  };
  
  todo2.title = "Hello"; // Error: cannot reassign a readonly property
  todo2.description = "barFoo"; // Error: cannot reassign a readonly property
  todo2.completed = true; // OK
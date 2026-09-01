import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

function TodoAdder() {
  const [todoText, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function addTodo() {
    
    if (todoText.trim() === "") {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: todoText,
    };
    console.log(newTodo);

    setTodos([...todos, newTodo]);

    // ניקוי ה-input
    setTodoText("");
  }

  function completeTodo(id: number) {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={todoText}
        onChange={handleChange}
        placeholder="Enter new task"
      />

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ color: 'red', fontSize: '20px', border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' }}>
            {todo.text}
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoAdder;



//  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  let result = numbers.map((number) => {
//    return number * 2
//  })

//  let newArr = numbers.filter((number) => {
//     return number > 5
//  })
function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
      <div className="todo-item">
        <span
          onClick={() => toggleComplete(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'gray' : 'black',
            cursor: 'pointer'
          }}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    );
  }
  export default TodoItem;
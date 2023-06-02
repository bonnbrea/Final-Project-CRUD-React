
import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Tent",
    complete: false,
  },
  {
    id: 2,
    title: "Sleeping bag",
    complete: false,
  },
  {
    id: 3,
    title: "First aid kit",
    complete: false,
  },
  {
    id: 4,
    title: "Personal essentials",
    complete: false,
  },
  {
    id: 5,
    title: "Stove",
    complete: false,
  },
  {
    id: 6,
    title: "Lighter",
    complete: false,
  },
  {
    id: 7,
    title: "Food",
    complete: false,
  },
  {
    id: 8,
    title: "Knife",
    complete: false,
  },
  {
    id: 9,
    title: "Bear Spray",
    complete: false,
  },
  {
    id: 10,
    title: "Sunscreen",
    complete: false,
  },
  {
    id: 11,
    title: "Compass",
    complete: false,
  },
  {
    id: 12,
    title: "Printed maps",
    complete: false,
  },
  {
    id: 13,
    title: "Whistle",
    complete: false,
  },
  {
  id: 14,
    title: "Water bottle",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function PackingCheck() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
export default PackingCheck;


// ─── TodoList.jsx ─────────────────────────────────────────────────────────────
// Renders the list of todo items.
// Props:
//   todos    — filtered array of todo objects from App
//   onToggle — function to toggle completed status (called with todo id)
//   onDelete — function to remove a todo (called with todo id)
// ─────────────────────────────────────────────────────────────────────────────

export default function TodoList({ todos, onToggle, onDelete }) {

  // Show an empty state message when there are no todos to display
  if (todos.length === 0) {
    return <div className="py-12 text-center text-gray-400 text-lg">Nothing here yet!</div>
  }

  return (
    <ul className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
      {/* .map() renders one <li> for every todo in the array */}
      {todos.map(todo => (
        <li
          key={todo.id} // React needs a unique key for list items
          className="flex items-center px-6 py-4 group hover:bg-gray-50 transition-colors"
        >
          {/* Checkbox: clicking it calls onToggle with this todo's id */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="w-5 h-5 rounded-full cursor-pointer accent-purple-600"
          />

          {/* Todo text: strikethrough + gray when completed */}
          <span className={`ml-4 flex-1 text-lg ${todo.completed ? 'line-through text-gray-300' : 'text-gray-700'}`}>
            {todo.text}
          </span>

          {/* Delete button: only visible on hover (Tailwind: opacity-0 group-hover:opacity-100) */}
          <button
            onClick={() => onDelete(todo.id)}
            className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-all text-xl font-bold"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  )
}

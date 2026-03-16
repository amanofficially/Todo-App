// ─── App.jsx ─────────────────────────────────────────────────────────────────
// Root component of the Todo App.
// Holds ALL state and passes data/functions to child components via props.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import TodoInput from './components/TodoInput'
import FilterButtons from './components/FilterButtons'
import TodoList from './components/TodoList'

export default function App() {

  // ── State ──────────────────────────────────────────────────────────────────
  // Each todo: { id: number, text: string, completed: boolean }
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Hooks', completed: true },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master Tailwind CSS', completed: false },
  ])

  // Active filter tab: 'all' | 'active' | 'completed'
  const [filter, setFilter] = useState('all')

  // ── Handlers ───────────────────────────────────────────────────────────────

  // Add a new todo — spread (...todos) copies existing array, new item appended
  const addTodo = (text) => {
    if (!text.trim()) return
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  // Toggle completed status — .map() returns new array with one item changed
  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  // Delete a todo — .filter() keeps all todos except the one with matching id
  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  // Remove all completed todos from the list
  const clearCompleted = () => setTodos(todos.filter(t => !t.completed))

  // ── Derived Data ───────────────────────────────────────────────────────────

  // Filter the todos array based on active filter tab
  const filtered = todos.filter(t => {
    if (filter === 'active')    return !t.completed
    if (filter === 'completed') return  t.completed
    return true // 'all' — show everything
  })

  // Count of remaining (incomplete) todos for the footer label
  const remaining = todos.filter(t => !t.completed).length

  return (
    // Full-screen gradient background (Tailwind: from-purple-600 to-blue-500)
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center mb-8 tracking-widest uppercase">
          Todo App
        </h1>

        {/* White card wrapping all sections */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Input field + Add button — passes addTodo down as prop */}
          <TodoInput onAdd={addTodo} />

          {/* Filter tabs (All / Active / Completed) */}
          <FilterButtons filter={filter} setFilter={setFilter} />

          {/* Filtered list of todos with toggle and delete capability */}
          <TodoList todos={filtered} onToggle={toggleTodo} onDelete={deleteTodo} />

          {/* Footer row: how many left + clear completed button */}
          <div className="flex justify-between items-center px-6 py-4 bg-gray-50 text-sm text-gray-500">
            <span>{remaining} item{remaining !== 1 ? 's' : ''} left</span>
            <button onClick={clearCompleted} className="hover:text-red-500 transition-colors">
              Clear Completed
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

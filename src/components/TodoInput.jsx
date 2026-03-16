// ─── TodoInput.jsx ────────────────────────────────────────────────────────────
// Controlled input component for adding new todos.
// "Controlled" means the input value is stored in React state (not the DOM).
// Props: onAdd(text) — function received from App to add a todo
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'

export default function TodoInput({ onAdd }) {

  // Local state: tracks what the user is currently typing
  const [value, setValue] = useState('')

  // Called when form is submitted (Enter key OR clicking Add button)
  const handleSubmit = (e) => {
    e.preventDefault()   // prevent browser from refreshing the page
    onAdd(value)         // send the text up to App.jsx
    setValue('')         // clear the input field after adding
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center px-6 py-5 border-b border-gray-100">

      {/* Controlled input: value={value} + onChange keeps it in sync with state */}
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 text-lg outline-none text-gray-700 placeholder-gray-300"
      />

      {/* Submit button — triggers handleSubmit via the form's onSubmit */}
      <button
        type="submit"
        className="ml-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
      >
        Add
      </button>
    </form>
  )
}

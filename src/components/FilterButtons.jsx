// ─── FilterButtons.jsx ────────────────────────────────────────────────────────
// Three filter tab buttons: All / Active / Completed.
// Props:
//   filter    — current active filter (string), passed down from App
//   setFilter — function from App to update the filter state
// ─────────────────────────────────────────────────────────────────────────────

export default function FilterButtons({ filter, setFilter }) {

  // The three filter options
  const filters = ['all', 'active', 'completed']

  return (
    <div className="flex gap-2 px-6 py-3 bg-gray-50 border-b border-gray-100">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)} // update filter in App when clicked
          // Active tab gets purple background; inactive tabs are plain gray
          className={`px-4 py-1 rounded-full text-sm font-medium capitalize transition-colors ${
            filter === f
              ? 'bg-purple-600 text-white'           // active tab style
              : 'text-gray-500 hover:text-purple-600'  // inactive tab style
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

import { useState } from 'react'

function Search({foodQuery, setSearchParams, cb = Function.prototype }) {
  const [value, setValue] = useState(foodQuery)
   const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const query = form.search.value

    const params = {}
    if (query.length) params.search = query
    setSearchParams(params)
  }
  return (
    <form className="Search flex justify-between	" onSubmit={handleSubmit}>
      <input
        type="search"
        id="Search-field"
        className=" w-4/6 border-2 border-green-900 pl-3 outline-0"
        placeholder="Search by categories name"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        name="search"
      />
      <button
        onClick={() => handleSubmit()}
        className="text-center w-2/6 py-2  mt-auto font-semibold text-sm border-2 border-green-900 bg-green-900 hover:bg-green-300 hover:text-green-900 text-white rounded-none shadow-sm"
      >
        Search
      </button>
    </form>
  )
}
export { Search }

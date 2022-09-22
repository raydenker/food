import { useState } from 'react'

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('')
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  const handleSubmit = () => {
    cb(value)
  }
  return (
    <div className="Search flex justify-between	">
      <input
        type="search"
        id="Search-field"
        className=" w-4/6 border-2 border-green-900 pl-3 outline-0"
        placeholder="Search"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => handleSubmit()}
        className="text-center w-2/6 py-2  mt-auto font-semibold text-sm border-2 border-green-900 bg-green-900 hover:bg-green-300 hover:text-green-900 text-white rounded-none shadow-sm"
      >
        Search
      </button>
    </div>
  )
}
export { Search }

import { Link } from 'react-router-dom'
function CategoryItem({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  return (
    <div key={strCategory} className="group relative bg-gray-100 flex flex-col">
      <Link
        to={`/category/${strCategory}`}
        className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
      >
        <img
          src={
            strCategoryThumb
              ? strCategoryThumb
              : `https://via.placeholder.com/230x320?text=${strCategory}`
          }
          alt={strCategory}
          className="w-full h-full object-center object-cover"
        />
      </Link>
      <div className="pt-4 pb-2 px-2  flex flex-col flex-wrap ">
        <div className="w-full mb-2">
          <h3 className="text-lg font-medium text-gray-700">
            <Link to={`/category/${strCategory}`}>
              {/* <span aria-hidden="true" className="absolute inset-0" /> */}
              {strCategory}
            </Link>
          </h3>
          <p className="mt-1 text-md  text-gray-500">
            {strCategoryDescription.slice(0, 250)}...
          </p>
        </div>
        <Link
          to={`/category/${strCategory}`}
          className="text-center py-2 w-28 mt-auto font-semibold text-sm border-2 border-green-900 bg-green-900 hover:bg-green-300 hover:text-green-900 text-white rounded-none shadow-sm"
        >
          More
        </Link>
      </div>
    </div>
  )
}

export { CategoryItem }

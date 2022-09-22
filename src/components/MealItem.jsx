import { Link } from 'react-router-dom'

function MealItem({ strMeal, strMealThumb, idMeal }) {
  return (
    <div key={idMeal} className="group relative bg-gray-100 flex flex-col">
      <Link
        to={`/meal/${idMeal}`}
        className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
      >
        <img
          src={
            strMealThumb
              ? strMealThumb
              : `https://via.placeholder.com/230x320?text=${strMeal}`
          }
          alt={strMeal}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </Link>
      <div className="pt-4 pb-2 px-2  flex justify-between flex-wrap items-center ">
        <div className="w-full mb-2">
          <h3 className="text-lg font-medium text-gray-700">
            <Link to={`/meal/${idMeal}`}>{strMeal}</Link>
          </h3>
        </div>
        <Link
          to={`/meal/${idMeal}`}
          className="text-center py-2 w-3/6 mt-auto font-semibold text-sm border-2 border-green-900 bg-green-900 hover:bg-green-300 hover:text-green-900 text-white rounded-none shadow-sm"
        >
          More
        </Link>
      </div>
    </div>
  )
}

export { MealItem }

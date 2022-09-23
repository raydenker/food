import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getRandomMeal } from '../api'

function Random() {
  const [random, setRandom] = useState([])

  useEffect(() => {
    getRandomMeal().then((data) => setRandom(data.meals[0]))      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      { random.idMeal ? (
        <div className="Random md:flex items-start md:items-center mt-5 w-full lg:w-4/6 mx-auto">
          <Link
            to={`/meal/${random.idMeal}`}
            className="w-1/2 block mx-auto md:h-80 md:mx-0 min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
          >
            <img
              src={
                random.strMealThumb
                  ? random.strMealThumb
                  : `https://via.placeholder.com/230x320?text=${random.strMeal}`
              }
              alt={random.strMeal}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </Link>
          <div className="Random_content md:w-1/2 p-4">
            <h3 className="text-lg font-medium text-gray-700 mb-3 text-center md:text-left">
              <Link to={`/meal/${random.idMeal}`}>{random.strMeal}</Link>
            </h3>
            <p className="mb-4 text-center md:text-left">{random.strInstructions.slice(0, 250)}...</p>
            <Link
              to={`/meal/${random.idMeal}`}
              className="text-center py-2 w-full md:w-28 block font-semibold text-sm border-2 border-green-900 bg-green-900 hover:bg-green-300 hover:text-green-900 text-white rounded-none shadow-sm"
            >
              More
            </Link>
          </div>
        </div>
      ) : null}
    </>
  )
}
export { Random }

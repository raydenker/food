import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMealById } from '../api'
import { useNavigate } from 'react-router-dom'
import { Preloader } from '../components/Preloader'

function Recipe() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [recipe, setRecipe] = useState([])
  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]))
    console.log(recipe)
    // eslint-disable-next-line
  }, [id])
  return (
    <>
      <div className="container mx-auto pt-5">
        <button
          className="text-center w-28 py-2  mt-auto font-semibold text-sm border-2 border-green-900 bg-green-900 hover:bg-green-300 hover:text-green-900 text-white rounded-none shadow-sm mb-5"
          onClick={() => navigate(-1)}
        >
          go back
        </button>
        {!recipe.idMeal ? (
          <Preloader />
        ) : (
          <div className="Recipe">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="h-auto w-3/6 mx-auto"
            />
            <h1 className="mt-5 text-center mb-5 text-green-900 text-3xl font-bold">
              {recipe.strMeal}
            </h1>
            <h6 className="mb-1 text-green-900 text-xl font-bold">
              Category:{' '}
              <Link
                to={`/category/${recipe.strCategory}`}
                className="underline"
              >
                {recipe.strCategory}
              </Link>
            </h6>
            {recipe.strArea ? (
              <h6 className="mb-2 text-green-900 text-xl font-bold">
                Area: {recipe.strArea}
              </h6>
            ) : null}

            <p>{recipe.strInstructions}</p>
            <h6 className="text-center mb-1 mt-4 text-green-900 text-xl font-bold">
              Recipe ingredients
            </h6>
            <table className="mt-5 mb-5 border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
              <thead>
                <tr>
                  <th className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                    ingredient
                  </th>
                  <th className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                    Measure
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                          {recipe[key]}
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                          {recipe[`strMeasure${key.slice(13)}`]}
                        </td>
                      </tr>
                    )
                  }
                  return null
                })}
              </tbody>
            </table>
            {recipe.strYoutube ? (
              <div className="Recipe_video">
                <h5 className="text-center mb-3 mt-4 text-green-900 text-xl font-bold ">
                  Recipe video
                </h5>
                {/* <iframe width="1076" height="605" src="https://www.youtube.com/embed/ph-zTkqn0nA?list=PLm-7ZORXrfaKnereEiLDZpUlwoyuAe85m" title="#77 useEffect & Dependencies Explained || Section 9 Handling Side Effects, Using Reducers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <iframe
                  className="w-5/6 mx-auto"
                  height="400"
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                    -11,
                  )}`}
                  title={recipe.strMeal}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  )
}

export { Recipe }

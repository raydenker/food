import { useState, useEffect } from 'react'
import { Preloader } from '../components/Preloader'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { getFilteredCategoy } from '../api'
import { MealList } from '../components/MealList'




function Category() {
  const navigate = useNavigate();
  const {name} = useParams()
  const [meals, setMeals] = useState([])
  useEffect(()=> {
    getFilteredCategoy(name).then((data)=> setMeals(data.meals))
  }, [name])
  return (
    <>

      <div className="container mx-auto pt-5">
      <button className='w-28 text-center py-2 mt-auto font-semibold text-sm border-2 border-green-900 bg-green-900 hover:bg-green-300 hover:text-green-900 text-white rounded-none shadow-sm mb-5' onClick={() => navigate(-1)}>go back</button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
      </div>
    </>
  )
}
export { Category }

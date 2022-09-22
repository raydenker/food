import { API_URL } from "./config";

// запуcк асинхронной фунции и получение в json формате
const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId)    
    return await response.json()
}

const getAllCategory = async () => {
    const response = await fetch(API_URL + 'categories.php')
    return await response.json()
}
const getFilteredCategoy = async (CatName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + CatName)
    return await response.json()
}

const getRandomMeal = async () => {
    const response = await fetch(API_URL + 'random.php')
    return await response.json()
}


export { getMealById, getAllCategory, getFilteredCategoy, getRandomMeal }
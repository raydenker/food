import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllCategory } from '../api'

import { useLocation } from 'react-router-dom'
import { CategoryList } from '../components/CategoryList'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
import { Random } from '../components/Random'

function Home() {
  const [catalog, setCatalog] = useState([])
  const [filtered, setfilteredCatalog] = useState([])
  let navigate = useNavigate()
  let { search } = useLocation()
  console.log(search)

  const handleSearch = (str) => {
    setfilteredCatalog(
      catalog.filter((item) => {
        return item.strCategory.toLowerCase().includes(str.toLowerCase())
      }),
    )
    navigate(`?search=${str}`)
  }

  useEffect(() => {
    getAllCategory().then((data) => {
      setCatalog(data.categories)
      setfilteredCatalog(
        search
          ? data.categories.filter((item) => {
              return item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            })
          : data.categories,
      )
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  return (
    <>
      <Search cb={handleSearch} />
      <Random/>
      {!catalog.length ? <Preloader /> : <CategoryList catalog={filtered} />}
    </>
  )
}
export { Home }

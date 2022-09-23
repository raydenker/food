import { CategoryItem } from './CategoryItem'

function CategoryList({ catalog = [] }) {
  if (!catalog.length) {
    return <h3>Not a found</h3>
  }
  return (
    <>
    <h2 className='mb-1 text-center mt-5 text-green-900 text-xl font-bold'>
      Categories
    </h2>
      <div className="container mx-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3  xl:gap-x-8 bg-stripes-fuchsia rounded-lg">
        {catalog.map((item) => {
          return <CategoryItem key={item.idCategory} {...item} />
        })}
      </div>
    </>
  )
}
export { CategoryList }

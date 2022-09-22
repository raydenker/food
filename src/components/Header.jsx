import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="App-header  p-4 bg-green-500">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center Header-logo text-white">
            SPA React
          </Link>
        </div>
      </div>
    </header>
  )
}
export { Header }

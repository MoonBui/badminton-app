import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="mt-4">
      <ul className="flex space-x-8">
        <li>
          <Link 
            to="/" 
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="/matches" 
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Matches
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation 
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="text-indigo-600 hover:text-indigo-800 font-medium"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound 
import { Link } from "react-router-dom"

function index() {
  return (
    <div
    className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
         <Link to={"/register"}>Registor page</Link>
      
    </div>
  )
}

export default index

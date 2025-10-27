import { Link } from "react-router-dom"

function Index() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <Link className="relative text-white text-2xl font-semibold tracking-wide
                   after:content-[''] after:absolute after:left-0 after:bottom-0 
                   after:w-0 after:h-[2px] after:bg-blue-500 
                   hover:after:w-full after:transition-all after:duration-300
                   hover:text-blue-600 transition-colors duration-300" to={"/register"}>Registor page</Link>
        </div>
    )
}

export default Index

import { Link } from "react-router-dom"

function Index() {
    return (
        <div className="px-16 py-5">
            <Link to={"/register"}>Registor page</Link>
        </div>
    )
}

export default Index

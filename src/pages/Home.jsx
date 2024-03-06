import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Link } from "react-router-dom"
const Home = ()=> {
    const { session } = useContext(AuthContext)
    return (
    <div>
        {
            session ? <h1>Home page when authenticated</h1>
            : <Link to="/">Go home and login</Link>
        }
    </div>
)}

export default Home
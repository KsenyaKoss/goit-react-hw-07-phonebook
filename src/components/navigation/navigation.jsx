import { Link, Outlet } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="add">Add Contact</Link>
                </li>
            </ul>
            <Outlet/>
        </nav>
    )
}
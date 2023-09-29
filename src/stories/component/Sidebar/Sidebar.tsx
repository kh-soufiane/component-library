import { Link } from "react-router-dom";
import './sidebar.css'

const menuItems = [
    {title: "Dashboard", icon: null, target: "#"},
    {title: "Issues", icon: null, target: "#"},
    {title: "Users", icon: null, target: "#"},
    {title: "Customers", icon: null, target: "#"},
    {title: "Settings", icon: null, target: "#"}
];

export const Sidebar = () => {
    return (
        <nav className="nav-container">
            <ul>
                {menuItems.map(({title, target}, index) => (
                    <li key={index}>
                        <Link to={target}>
                            <a>{title}</a>
                        </Link>
                    </li>
                ))}
            </ul>

            <ul>
                <li>Support</li>           
                <li>Collapse</li>           
            </ul>
        </nav>
    );
}

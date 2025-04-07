import { CiMenuBurger } from "react-icons/ci";
import React ,{useState} from 'react'

export const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)

    const menuToggle = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="container-main">
            <div className="navbar">
                <div className="logo">
                    <h1>Akash</h1>
                </div>
                <nav className = {showMenu ? "menu-mobile":"menu-web"}>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="hamb-menu">
                <button onClick={menuToggle}><CiMenuBurger /></button>
                </div>
            </div>
        </div>
    );
}

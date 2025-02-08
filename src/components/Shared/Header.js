import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-500 p-4">
            <nav className="flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li><Link className="text-white" to="/">Home</Link></li>
                    <li><Link className="text-white" to="/login">Login</Link></li>
                    <li><Link className="text-white" to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
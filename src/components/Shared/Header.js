import React from 'react'
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/images/shopping-cart.svg'
import searchIcon from '../../assets/images/search-icon.svg'
import Logo from '../../assets/images/ecommerceLogo.svg'

function Header({ itemNumber, setSearchQuery }) {


    return (
        <header className="bg-indigo-900 p-4 w-screen">
            <nav className="flex justify-between items-center flex-wrap w-full mx-auto">
                <div className='flex gap-8'>
                    <Link to="/"><img src={Logo} alt='logo' className='w-10' /></Link>
                    <Link className="text-white" to="/login">Login</Link>
                    <div className='gap-1 bg-indigo-800 w-full sm:flex hidden sm:flex-row'>
                        <label for='searchBar'><img src={searchIcon} className='w-6' alt="search-icon" /></label>
                        <input className='searchBar bg-indigo-800 text-white rounded-t-sm w-full sm:w-64' id='searchBar' placeholder='Search Items' onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>

                </div>

                <Link className="text-white relative" to="/cart">
                    <img src={cartIcon} className='w-8' alt='cart-logo' /><p className='absolute font-bold text-xs text-blue-700 top-1 right-2 '>{itemNumber}</p>
                </Link>

            </nav>
        </header>
    )
}

export default Header
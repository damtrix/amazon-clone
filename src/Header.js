import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { UseStateValue } from './StateProvider';


function Header() {
    const [{ basket }] = UseStateValue()

    return (
    <nav className="header">
            

            {/* Logo on the left -> img */}
            <Link to='/'>
                <img 
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" 
                />
            </Link>
            
            {/* Search box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
          
            {/* 3 links */}
            <div className="header_nav">
                {/* 1st link */}
                    <Link to="/login" className="header_link">
                        <div className="header_option">
                            <span className= "header_optionLineOne">Hello Damtrix</span>
                            <span className= "header_optionLineTwo">Sign In</span>
                        </div>
                    </Link>
                {/* 2nd link */}
                    <Link to="/" className="header_link">
                        <div className="header_option">
                            <span className= "header_optionLineOne">Your</span>
                            <span className= "header_optionLineTwo">Prime</span>
                        </div>
                    </Link>
                {/* 3rd link */}
                    <Link to="/login" className="header_link">
                        <div className="header_option">
                            <span className= "header_optionLineOne">Returns</span>
                            <span className= "header_optionLineTwo">& orders</span>
                        </div>
                    </Link>
                {/* 4th link */}
                    <Link to="/checkout" className="header_link">
                        <div className="header_optionBaket">
                            {/* Shoppoing Basket Icon */}
                            <ShoppingBasketIcon />
                            {/* Numbers of items in the Basket */}
                            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>

                        </div>
                    </Link>
                

            </div>
            {/* Basket icon with number */}
        </nav>
    )
}

export default Header

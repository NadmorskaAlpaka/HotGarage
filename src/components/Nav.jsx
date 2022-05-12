import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/hot-garage.png';
import { Link } from 'react-router-dom';

const Nav = ({numberOfCartItems}) => {

    function openMenu(){
        document.body.classList += " menu--open";
    }

    function closeMenu(){
        document.body.classList.remove("menu--open");
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={Logo} className="logo" alt="" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/cars" className="nav__link">
                            Cars
                        </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        {numberOfCartItems > 0 && <span className="cart__length">{numberOfCartItems}</span>}
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list" onClick={closeMenu}>
                            <Link to="/" className="menu__link">
                                Home
                            </Link>
                        </li>
                        <li className="menu__list" onClick={closeMenu}>
                            <Link to="/cars" className="menu__link">
                                Cars
                            </Link>
                        </li>
                        <li className="menu__list" onClick={closeMenu}>
                            <Link to="/cart" className="menu__link">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

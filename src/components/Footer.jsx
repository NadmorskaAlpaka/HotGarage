import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/hot-garage.png"


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={logo} className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">
                            Home
                        </Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/cars" className="footer__link">
                            Cars
                        </Link>
                        <Link to="/cart" className="footer__link">
                            Cart
                        </Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2022 Hot Garage
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
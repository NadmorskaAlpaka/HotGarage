import React from 'react';
import CarImg from '../assets/car-img.png';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Best toys cars on the web</h1>
                        <h2>Find your dream toy with <span className="purple">Hot Garage</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Cars</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={CarImg} alt=""/>
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;

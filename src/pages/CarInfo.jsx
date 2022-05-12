import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Car from '../components/ui/Car';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';


const CarInfo = ({ cars, addToCart, cart }) => {
    const { id } = useParams();
    const car = cars.find(car => car.id === +id);

    function addCarToCart(car){
        addToCart(car)
    }

    function carExistsOnCart(){
        return cart.find(car => +car.id === +id )
    }

    return (
        <div id="cars__body">
            <main id="cars__main">
                <div className="cars__container">
                    <div className="row">
                        <div className="car__selected--top">
                            <Link to="/cars" className="car__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/cars" className="car__link">
                                <h2 className="car__selected--title--top">Cars</h2>
                            </Link>
                        </div>
                        <div className="car__selected">
                            <figure className="car__selected--figure">
                                <img src={car.url} alt="" className="car__selected--img"/>
                            </figure>
                            <div className="car__selected--description">
                                <h2 className="car__selected--title">{car.name}</h2>
                                <Rating rating={car.rating}/>
                                <div className="car__selected--price">
                                    <Price originalPrice={car.originalPrice} salePrice={car.salePrice} />
                                </div>
                                <div className="car__description">
                                    <h3 className="car__description--title">
                                        Description
                                    </h3>
                                    <p className="car__description--para">
                                        A great toy intended for children from an early age, the metal structure allows the car to survive a lot of fun. The paint is resistant to falls and scratches for a long time. The speed of the car depends on how fast you move your arm. Find a child in you.
                                    </p>
                                </div>
                                {
                                    carExistsOnCart() ? (
                                        <Link to={`/cart`} className="car__link">
                                            <button className="btn" > Checkout </button>
                                        </Link>
                                    )   :   (
                                        <button className="btn" onClick={() => addCarToCart(car)}>
                                            Add to cart
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cars__container">
                    <div className="row">
                        <div className="car__selected--top">
                            <h2 className="car__selected--title--top">
                                Recommended Cars
                            </h2>
                        </div>
                        <div>
                            <div className="cars">
                                {
                                    cars
                                        .filter(car => car.rating === 5 && + car.id !== +id)
                                        .slice(0,4)
                                        .map(car => <Car car={car} key={car.id}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default CarInfo;

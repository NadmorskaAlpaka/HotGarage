import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

const Car = ({ car }) => {
    const [img, setImg] = useState()

    const mountedRef = useRef(true);

    useEffect(() => {
        const image = new Image();
        image.src = car.url;
        image.onload = () =>{
            setTimeout(() => {
                if (mountedRef.current){
                    setImg(image);
                }
            }, 300);
        };
        return () => {
            mountedRef.current = false;
        }
    })

    return (
        <div className="car">
            {img ? (
                <>
                    <Link to={`/cars/${car.id}`}>
                        <figure className="car__img--wrapper">
                            <img 
                                src={img.src} 
                                alt="" 
                                className="car__img " 
                            />
                        </figure>
                    </Link>
                    <div className="car__title ">
                        <Link to={`/cars/${car.id}`} className="car__title--link">
                            {car.name}
                        </Link>
                    </div>
                    <Rating rating={car.rating} />
                    <Price originalPrice={car.originalPrice}
                        salePrice={car.salePrice} />
                </>
            ) : (
                <>
                    <div className="car__img--skeleton"></div>
                    <div className="skeleton car__name--skeleton"></div>
                    <div className="skeleton car_rating--skeleton"></div>
                    <div className="skeleton car__price--skeleton"></div>
                </>
            )
            }
        </div>
    );
}

export default Car;

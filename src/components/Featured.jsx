import React from 'react';
import Car from './ui/Car';
import { cars } from '../data'

const Featured = () => {
    
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Cars</span>
                    </h2>
                    <div className="cars">
                        {
                            cars
                            .filter((car) => car.rating === 5)
                            .slice(0,4)
                            .map((car) => (
                                <Car car={car} key={car.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;

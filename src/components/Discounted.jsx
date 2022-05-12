import React from 'react';
import { cars } from '../data'
import Car from './ui/Car'

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discounted <span className="purple">Cars</span>
                    </h2>
                    <div className="cars">
                        {
                            cars
                            .filter((car) => car.salePrice > 0)
                            .slice(0,8)
                            .map((car) => <Car car={car} key={car.id}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;

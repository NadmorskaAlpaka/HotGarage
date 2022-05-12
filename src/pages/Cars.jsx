import React from "react"
import Car from "../components/ui/Car"

const Cars = ({ cars: initialCars }) => {

    const [cars, setCars] = React.useState(initialCars)

    function filterCars(filter){
        if(filter === "LOW_TO_HIGH"){
            setCars(cars
                        .slice()
                        .sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));
        }else if(filter === "HIGH_TO_LOW"){
            setCars(cars
                        .slice()
                        .sort((a,b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)));
        }else if(filter === "RATING"){
            setCars(cars
                        .slice()
                        .sort((a,b) => (b.rating - a.rating)));
        }
    }

    return (
        <div id="cars__body">
            <main id="cars__main">
                <section>
                    <div className="cars__container">
                        <div className="row">
                            <div className="cars__header">
                                <h2 className="section__title cars__header--title">All Cars</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterCars(event.target.value)}>
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="cars">
                                {
                                    
                                    cars.map((car) => <Car car={car} key={car.id}/>)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Cars;
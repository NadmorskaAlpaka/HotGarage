import React from "react"
import { Link } from "react-router-dom"
import EmptyCart from "../assets/empty_cart.svg"
const Cart = ({ cart, changeQuantity, remove }) => {

    const total = () =>{
        let price = 0
        cart.forEach((item) =>{
            price += +(item.quantity * (item.salePrice || item.originalPrice))
        })
        return price
    }

    return (
        <div id="cars__body">
            <main id="cars__main">
                <div className="cars__container">
                    <div className="row">
                        <div className="car__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__car">Cars</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            {
                            cart.length > 0 ? (
                                <div className="cart__body">
                                    {
                                        cart.map(car => {
                                            return (
                                                <div className="cart__item" key={car.id}>
                                                    <div className="cart__car">
                                                        <img src={car.url}
                                                            className="cart__car--img"
                                                            alt=""
                                                        />
                                                        <div className="cart__car--info">
                                                            <span className="cart__car--name">
                                                                {car.name}
                                                            </span>
                                                            <span className="cart__car--price">
                                                                ${(car.salePrice ? car.salePrice : car.originalPrice).toFixed(2)}
                                                            </span>
                                                            <button className="cart__car--remove" onClick={() => remove(car.id)}>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="cart__quantity">
                                                        <input type="number"
                                                            min={0}
                                                            max={99}
                                                            className="cart__input"
                                                            value={car.quantity}
                                                            onChange={(event) => changeQuantity(car, event.target.value)}
                                                        />
                                                    </div>
                                                    <div className="cart__total">
                                                        ${(car.quantity * (car.salePrice || car.originalPrice)).toFixed(2)}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) : (
                                <div className="cart__empty">
                                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                                    <h2>You don't have any cars in your cart</h2>
                                    <Link to="/cars">
                                        <button className="btn">Browse cars</button>
                                    </Link>
                                </div>
                                )
                            }
                        </div>
                        {cart.length > 0 && <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>{(total() * 0.9).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>{(total() * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${total().toFixed(2)}</span>
                            </div>
                            <button className="btn btn__checkout no-cursor"
                                onClick={() => alert("Not implemeted feature yet, sorry")}>
                                Proceed to checkout
                            </button>
                        </div>}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart;
import React from 'react'
import { useStateValue } from '../../store/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./subtotal/Subtotal";
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{basket, user}] = useStateValue();
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h1>you Shopping Basket is empyty</h1>
              <p>you have no items is you shopping basket add some</p>
            </div>
          ) : (
            <div>
              <h3>Hello, {user?.email}</h3>
              <h2 className="checkout__title">Your Shopping Basket</h2>
              {/* list out all product */}
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        <FlipMove>
          {basket.length > 0 && (
            <div className="checkout__right">
              <Subtotal />
            </div>
          )}
        </FlipMove>
      </div>
    );
}

export default Checkout

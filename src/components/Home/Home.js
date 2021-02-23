import React from 'react'
import Product from '../products/Product';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="amazon banner" className="home__image" />
            <div className="home__row">
            <Product 
            id="1234567"
            title='Find Your ideal TV'
            price = {11.96}
            rating={5}
            image = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
            />
            <Product 
            id="1234567"
            title='Computer and Accessories'
            price = {11.96}
            rating={5}
            image = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg'
            />

            </div>
            <div className="home__row">
            <Product 
            id="1234567"
            title='Explore home bed'
            price = {11.96}
            rating={5}
            image = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_2x._SY608_CB418597104_.jpg'
            />
            <Product 
            id="1234567"
            title='Game accessories'
            price = {11.96}
            rating={5}
            image = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Gaming_1x._SY304_CB432517394_.jpg'
            />
            <Product 
            id="1234567"
            title='electronics'
            price = {11.96}
            rating={5}
            image = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg'
            />

            </div>
            <div className="home__row">
            <Product 
            id="1234567"
            title='Find Your ideal TV'
            price = {11.96}
            rating={5}
            image = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
            />
            </div>
        </div>
    )
}

export default Home

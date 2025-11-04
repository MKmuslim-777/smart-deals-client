import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import Header from './Header';
import Footer from '../Footer/Footer';


const latestProductsPromise = fetch("http://localhost:3000/latest-products").then(res => res.json())
const Home = () => {

    return (
        <div>
            <Header></Header>
            <h2 className='text-primary'>This is home</h2>
            <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;
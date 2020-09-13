import React from 'react';
import './home.css';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Product from '../../components/product';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="home_row">
        <Product 
          id="1"
          title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
          price="200"
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/51FHx3A7omL._AC_US218_FMwebp_QL70_.jpg"
        />
        <Product 
          id="1"
          title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
          price="200"
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/51FHx3A7omL._AC_US218_FMwebp_QL70_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

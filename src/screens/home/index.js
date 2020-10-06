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
          id="2"
          title="HONOR Band 5 (MidnightNavy)- Waterproof Full Color AMOLED Touchscreen, SpO2 (Blood Oxygen), Music Control, Watch Faces Store, up to 14 Day Battery Life"
          price="25"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81PvKZ1jnjL._SY355_.jpg"
        />
      </div>
      <div className="home_row">
        <Product 
          id="3"
          title="OnePlus 7T Pro (Haze Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4085mAH Battery)"
          price="120"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61FRLa8IFTL._SX679_.jpg"
        />
        <Product 
          id="4"
          title="Vega Cliff CLF-LK-L Full Face Helmet (Black, L)"
          price="15"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81HwRe1OfAL._SX450_.jpg"
        />
        <Product 
          id="5"
          title="Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation) - Black"
          price="300"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71-dg81FrpL._SX466_.jpg"
        />
      </div>
      <div className="home_row">
        <Product 
          id="6"
          title="Amazon Brand - Solimo Musca Three Seater Fabric Recliner (Chocolate)"
          price="360"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81HXlhGi3uL._SX569_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

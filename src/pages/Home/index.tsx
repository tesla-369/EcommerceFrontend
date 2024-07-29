import React from 'react';
import SliderBanner from './slider/index'
import CatSlider from '../../components/catSlider';

import Banners from '../../components/banners';

import './style.css';
import Product from '../../components/product';
import Banner4 from '../../assets/images/banner-4.png'
import Slide1 from "../../assets/images/slider-1.png";

import Slider from 'react-slick';


const Home = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrow: true,
        
      };

    return(
        <>
        <SliderBanner/>
        <CatSlider/>
        <Banners/>

        <section className='homeProducts'>
            <div className="container-fluid">
                <div className='d-flex align-items-center'>
                <h2 className="hd mb-0  mt-0">Popular Products</h2>
                <ul className='list list-inline ml-auto filterTab mb-0'>
                    <li className='list-inline-item'>
                        <a className='cursor'>All</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Milk and Dairies</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Coffee and Teas</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Pet Foods</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Meats</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Vegetables</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Fruits</a>
                    </li>

                </ul>

                </div>

                <div className="row productRow">
                    <div className="item">
                        <Product tag="sale" />
                    </div>                    
                    <div className="item">
                        <Product tag="hot" />
                    </div>                    
                    <div className="item">
                        <Product  tag="new" />
                    </div>                    
                    <div className="item">
                        <Product  tag="best" />
                    </div>                    
                    <div className="item">
                        <Product/>
                    </div>

                    <div className="item">
                        <Product tag="sale"/>
                    </div>                    
                    <div className="item">
                        <Product tag="best"/>
                    </div>                    
                    <div className="item">
                        <Product/>
                    </div>                    
                    <div className="item">
                        <Product tag="new"/>
                    </div>                    
                    <div className="item">
                        <Product/>
                    </div>

                </div>

            </div>
        </section>



        <section className='homeProducts  homeProductsRow2 pt-0'>
            <div className="container-fluid">
                <div className='d-flex align-items-center'>
                <h2 className="hd mb-0  mt-0">Daily best sells</h2>
                <ul className='list list-inline ml-auto filterTab mb-0'>
                    <li className='list-inline-item'>
                        <a className='cursor'>Featured</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>Popular</a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'>New added</a>
                    </li>
                    

                </ul>

                </div>

<br/><br/>
                <div className="row">
                    <div className="col-md-3 pr-3">
                        <img src={Banner4} className='w-100'/>
                    </div>

                    <div className="col-md-9">
                        <Slider {...settings} className="prodSlider">
                        <div className="item">
                        <Product tag="sale" />
                        </div>
                        <div className="item">
                        <Product tag="new" />
                        </div>
                        <div className="item">
                        <Product tag="sale" />
                        </div>
                        <div className="item">
                        <Product tag="hot" />
                        </div>
                        <div className="item">
                        <Product tag="sale" />
                        </div>
                        <div className="item">
                        <Product tag="hot" />
                        </div>
                        
                        </Slider>
                    </div>

                </div>

              

            </div>
        </section>
        

        </>
    )
        

}

export default Home;
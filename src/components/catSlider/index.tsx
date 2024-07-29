import React, { useState } from "react";
import "./style.css";
import Slider from "react-slick";

const CatSlider = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrow: true,
    autoplay:2000,
    centerMode:true
  };

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>

          <Slider
            {...settings}
            className="cat_slider_Main"
            id="cat_slider_Main"
          >
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div className="item">
                    <div className="info" style={{ background: item }}>
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png"
                        alt=""
                      />
                      <h5>Cake and Milk</h5>
                      <p>26 items</p>
                    </div>
                  </div>
                );
              })}

            {/* <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" />
                            <h5>Cake and Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;

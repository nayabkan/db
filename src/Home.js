import React, { useEffect, useState } from "react";
import slide1 from "./images/demos/demo9/slides/slide-1.jpg";
import slide2 from "./images/demos/demo9/slides/slide-2.jpg";
import slide3 from "./images/demos/demo9/slides/slide-3.jpg";
import banner3 from "./images/demos/demo9/banner/3.jpg";
import axios from "axios";
import { Tabs, Tab, Nav, Fade } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function Home() {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/api/brands")
      .then((res) => setBrands(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/api/products")
      .then((res) => (console.log(res.data), setProducts(res.data)))
      .catch((err) => console.log(err));
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <div className="page-wrapper">
        {/* Start of Header */}
        <Header />
        {/* End of Header */}
        {/* Start of Main */}
        <main className="main">
          <section className="intro-section" style={{
            marginTop : "-28px",
            marginBottom : '25px'
          }}>
            <div
              className="swiper-container swiper-theme animation-slider"
              data-swiper-options="{
              'slidesPerView': 1,
              'autoplay': {
                  'delay': 8000,
                  'disableOnInteraction': false
              }
          }"
            >
              <div className="swiper-wrapper row gutter-no cols-1">
                <Swiper
                  spaceBetween={10}
                  centeredSlides={true}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div
                      className="swiper-slide banner banner-fixed content-center intro-slide intro-slide1"
                      style={{
                        backgroundImage: `url('${slide1}')`,
                        backgroundColor: "#EEF4F4",
                      }}
                    >
                      <div className="container">
                        <div className="banner-content d-inline-block y-50">
                          <div
                            className="slide-animate"
                            data-animation-options="{
                                  'name': 'zoomIn', 'duration': '1s'
                              }"
                          >
                            <h5 className="banner-subtitle text-uppercase font-weight-bold">
                              Deals and Promotions
                            </h5>
                            <h3 className="banner-title text-capitalize ls-25">
                              <span className="text-primary">
                                Winter Season
                              </span>
                              <br />
                              Fashion Lifestyle Collection
                            </h3>
                            <a
                              href="demo9-shop.html"
                              className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                            >
                              Shop Now
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                        <figure
                          className="slide-image skrollable slide-animate floating-item"
                          data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true,'scalarY':0}"
                          data-child-depth="0.4"
                        >
                          <img
                            src={require("./images/demos/demo9/slides/slide-image-1.png")}
                            alt="Banner"
                            data-bottom-top="transform: translatex(-10vh);"
                            data-top-bottom="transform: translateX(10vh);"
                            width={472}
                            height={510}
                          />
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* End of Intro Slide 1 */}
                  <SwiperSlide>
                    <div
                      className="swiper-slide banner banner-fixed intro-slide intro-slide2"
                      style={{
                        backgroundImage: `url('${slide2}')`,
                        backgroundColor: "#EDEEF0",
                      }}
                    >
                      <div className="container">
                        <div className="banner-content d-inline-block y-50">
                          <div
                            className="slide-animate"
                            data-animation-options="{
                                  'name': 'fadeInDownShorter', 'duration': '1s'
                              }"
                          >
                            <h5 className="banner-subtitle text-primary text-uppercase font-weight-bold mb-2">
                              This Week Only!
                            </h5>
                            <h3 className="banner-title text-capitalize ls-25">
                              Originals Comper Star. Shoes
                            </h3>
                            <hr className="banner-divider bg-dark" />
                            <p className="text-dark">
                              Free Shipping on all orders over{" "}
                              <strong>$80.00</strong>
                            </p>
                            <a
                              href="demo9-shop.html"
                              className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                            >
                              Shop Now
                              <i class="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                        <figure
                          className="slide-image skrollable slide-animate floating-item"
                          data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
                          data-child-depth="0.2"
                        >
                          <img
                            src={require("./images/demos/demo9/slides/slide-image-2.png")}
                            alt="Banner"
                            data-bottom-top="transform: translatex(-10vh);"
                            data-top-bottom="transform: translateX(10vh);"
                            width={578}
                            height={364}
                          />
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* End of Intro Slide 2 */}
                    <div
                      className="swiper-slide banner banner-fixed intro-slide intro-slide3 content-center"
                      style={{
                        backgroundImage: `url('${slide2}')`,
                        backgroundColor: "#D4D6D5",
                      }}
                    >
                      <div className="container">
                        <div className="banner-content y-50">
                          <div
                            className="content-left mr-auto slide-animate mb-4 mb-lg-0"
                            data-animation-options="{
                                  'name': 'fadeInUpShorter', 'duration': '1s'
                              }"
                          >
                            <h5 className="banner-subtitle text-white br-xs">
                              Only until the end of this Week
                            </h5>
                            <h3 className="banner-title text-uppercase font-weight-normal mb-0 ls-25">
                              Fashion<strong className="ml-2">Sale</strong>
                            </h3>
                            <p className="text-dark font-weight-normal text-uppercase mb-0 ls-25">
                              Up to{" "}
                              <strong className="text-uppercase text-secondary font-weight-bolder">
                                80% Off
                              </strong>
                            </p>
                          </div>
                          <div
                            className="content-right slide-animate"
                            data-animation-options="{
                                  'name': 'fadeInUpShorter', 'duration': '1s'
                              }"
                          >
                            <h4 className="text-white text-uppercase ls-25">
                              Chooses to extra comfort all around
                            </h4>
                            <a
                              href="demo9-shop.html"
                              className="btn btn-dark btn-rounded btn-icon-right"
                            >
                              Shop Now
                              <i class="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                        <figure className="slide-image skrollable slide-animate">
                          <img
                            src={require("./images/demos/demo9/slides/slide-image-3.png")}
                            alt="Banner"
                            data-bottom-top="transform: translatex(-10vh);"
                            data-top-bottom="transform: translateX(10vh);"
                            width={488}
                            height={510}
                          />
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* End of Intro Slide 3 */}
                    <div
                      className="swiper-slide banner banner-fixed content-center intro-slide intro-slide1"
                      style={{
                        backgroundImage: `url('${slide1}')`,
                        backgroundColor: "#EEF4F4",
                      }}
                    >
                      <div className="container">
                        <div className="banner-content d-inline-block y-50">
                          <div
                            className="slide-animate"
                            data-animation-options="{
                                  'name': 'zoomIn', 'duration': '1s'
                              }"
                          >
                            <h5 className="banner-subtitle text-uppercase font-weight-bold">
                              Deals and Promotions
                            </h5>
                            <h3 className="banner-title text-capitalize ls-25">
                              <span className="text-primary">
                                Winter Season
                              </span>
                              <br />
                              Fashion Lifestyle Collection
                            </h3>
                            <a
                              href="demo9-shop.html"
                              className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                            >
                              Shop Now
                              <i class="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                        <figure className="slide-image skrollable slide-animate">
                          <img
                            src={require("./images/demos/demo9/slides/slide-image-1.png")}
                            alt="Banner"
                            data-bottom-top="transform: translatex(-10vh);"
                            data-top-bottom="transform: translateX(10vh);"
                            width={472}
                            height={510}
                          />
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* End of Intro Slide 1 */}
                    <div
                      className="swiper-slide banner banner-fixed intro-slide intro-slide2"
                      style={{
                        backgroundImage: `url('${slide2})`,
                        backgroundColor: "#EDEEF0",
                      }}
                    >
                      <div className="container">
                        <div className="banner-content d-inline-block y-50">
                          <div
                            className="slide-animate"
                            data-animation-options="{
                                  'name': 'flipInY', 'duration': '1s'
                              }"
                          >
                            <h5 className="banner-subtitle text-primary text-uppercase font-weight-bold mb-2">
                              This Week Only!
                            </h5>
                            <h3 className="banner-title text-capitalize ls-25">
                              Originals Comper Star. Shoes
                            </h3>
                            <hr className="banner-divider bg-dark" />
                            <p className="text-dark">
                              Free Shipping on all orders over{" "}
                              <strong>$80.00</strong>
                            </p>
                            <a
                              href="demo9-shop.html"
                              className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                            >
                              Shop Now
                              <i class="fa-solid fa-arrow-right-long"></i>
                            </a>
                          </div>
                        </div>
                        <figure
                          className="slide-image skrollable slide-animate floating-item"
                          data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
                          data-child-depth="0.2"
                        >
                          <img
                            src={require("./images/demos/demo9/slides/slide-image-2.png")}
                            alt="Banner"
                            data-bottom-top="transform: translatex(-10vh);"
                            data-top-bottom="transform: translateX(10vh);"
                            width={578}
                            height={364}
                          />
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <button
                  ref={navigationPrevRef}
                  className="slide-home-custom-btn"
                  style={{
                    left: "2%",
                    top: "42%",
                  }}
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  ref={navigationNextRef}
                  className="slide-home-custom-btn"
                  style={{
                    left: "94%",
                    top: "45%",
                  }}
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
                {/* End of Intro Slide 2 */}
              </div>
              {/* <div class="custom-dots swiper-img-dots appear-animate">
                        <a href="#" className="active">
                            <img src={require('./images/demos/demo9/slides/dot-1.png')} alt="Dot" width="70" height="70" />
                        </a>
                        <a href="#">
                            <img src={require('./images/demos/demo9/slides/dot-2.png')} alt="Dot" width="70" height="70" />
                        </a>
                        <a href="#">
                            <img src={require('./images/demos/demo9/slides/dot-3.png')} alt="Dot" width="70" height="70" />
                        </a>
                        <a href="#">
                            <img src={require('./images/demos/demo9/slides/dot-1.png')} alt="Dot" width="70" height="70" />
                        </a>
                        <a href="#">
                            <img src={require('./images/demos/demo9/slides/dot-2.png')} alt="Dot" width="70" height="70" />
                        </a>
                    </div> */}
            </div>
          </section>
          {/* End of Intro-section */}
          <div className="container">
            
            {/* End of Iocn Box Wrapper */}
            <div className="row grid grid-float pt-2 banner-grid mb-9 appear-animate">
              <div className="grid-item col-lg-6 height-x2">
                <div className="banner banner-fixed banner-lg br-sm">
                  <figure>
                    <img
                      src={require("./images/demos/demo9/banner/1-1.jpg")}
                      alt="Banner"
                      width={670}
                      height={450}
                      style={{ backgroundColor: "#E3E7EA" }}
                    />
                  </figure>
                  <div className="banner-content y-50">
                    <h5 className="banner-subtitle text-capitalize font-weight-normal mb-0 ls-25">
                      Flash Sale{" "}
                      <strong className="text-secondary text-uppercase">
                        50% Off
                      </strong>
                    </h5>
                    <h3 className="banner-title text-capitalize">
                      Kitchen Collection
                    </h3>
                    <p>Only until the end of this Week</p>
                    <a
                      href="demo9-shop.html"
                      className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                    >
                      Shop Now
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid-item col-lg-6 height-x1">
                <div className="banner banner-fixed banner-md br-sm">
                  <figure>
                    <img
                      src={require("./images/demos/demo9/banner/1-2.jpg")}
                      alt="Banner"
                      width={670}
                      height={450}
                      style={{ backgroundColor: "#2D2E32" }}
                    />
                  </figure>
                  <div className="banner-content">
                    <h3 className="banner-title text-white ls-25">
                      Accessories
                      <br />
                      <span className="font-weight-normal ls-normal">
                        Collection
                      </span>
                    </h3>
                    <a
                      href="demo9-shop.html"
                      className="btn btn-white btn-link btn-underline btn-icon-right"
                    >
                      Shop Now
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid-item col-sm-6 col-lg-3 height-x1">
                <div className="banner banner-fixed banner-sm br-sm">
                  <figure>
                    <img
                      src={require("./images/demos/demo9/banner/1-3.jpg")}
                      alt="Banner"
                      width={330}
                      height={215}
                      style={{ backgroundColor: "#181818" }}
                    />
                  </figure>
                  <div className="banner-content x-50 y-50 w-100 text-center">
                    <h3 className="banner-title font-secondary font-weight-normal mb-0 ls-25">
                      Sale
                    </h3>
                    <div className="banner-price-info font-weight-normal text-white mb-3">
                      Up to <strong className="text-uppercase">20% Off</strong>
                    </div>
                    <a
                      href="demo9-shop.html"
                      className="btn btn-white btn-link btn-underline"
                    >
                      Shop Collection
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid-item col-sm-6 col-lg-3 height-x1">
                <div className="banner banner-fixed banner-sm br-sm">
                  <figure>
                    <img
                      src={require("./images/demos/demo9/banner/1-4.jpg")}
                      alt="Banner"
                      width={330}
                      height={215}
                      style={{ backgroundColor: "#A3A8A6" }}
                    />
                  </figure>
                  <div className="banner-content">
                    <h5 className="banner-subtitle text-uppercase font-weight-bold">
                      20% Off
                    </h5>
                    <h3 className="banner-title text-capitalize ls-25">
                      Kids Store
                    </h3>
                    <a
                      href="https://www.portotheme.com/html/Globlix/demdo9-shop.html"
                      className="btn btn-dark btn-link btn-underline btn-icon-right"
                    >
                      Shop Now
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Banner Grid */}
            <h2 className="title title-underline mb-4 appear-animate">
              Top Weekly Vendors
            </h2>
            <div
              className="swiper-container swiper-theme mb-10 pb-2 appear-animate"
              data-swiper-options="{
              'spaceBetween': 20,
              'slidesPerView': 1,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 2
                  },
                  '768': {
                      'slidesPerView': 3
                  },
                  '1200': {
                      'slidesPerView': 4
                  }
              }
          }"
            >
              <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                <div className="swiper-slide vendor-widget mb-0">
                  <div className="vendor-widget-2">
                    <div className="vendor-details">
                      <figure className="vendor-logo">
                        <a href="vendor-dokan-store.html">
                          <img
                            src={require("./images/demos/demo9/vendor-logo/1.jpg")}
                            alt="Vendor Logo"
                            width={70}
                            height={70}
                          />
                        </a>
                      </figure>
                      <div className="vendor-personal">
                        <h4 className="vendor-name">
                          <a href="vendor-dokan-store.html">Vendor 1</a>
                        </h4>
                        <span className="vendor-product-count">
                          (27 Products)
                        </span>
                        <div className="ratings-container">
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="vendor-products row cols-3 gutter-sm">
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-1.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require(".//images/demos/demo9/product/4-2.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-3.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Vendor widget 2 */}
                <div className="swiper-slide vendor-widget mb-0">
                  <div className="vendor-widget-2">
                    <div className="vendor-details">
                      <figure className="vendor-logo">
                        <a href="vendor-dokan-store.html">
                          <img
                            src={require("./images/demos/demo9/vendor-logo/2.jpg")}
                            alt="Vendor Logo"
                            width={70}
                            height={70}
                          />
                        </a>
                      </figure>
                      <div className="vendor-personal">
                        <h4 className="vendor-name">
                          <a href="vendor-dokan-store.html">Vendor 2</a>
                        </h4>
                        <span className="vendor-product-count">
                          (20 Products)
                        </span>
                        <div className="ratings-container">
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="vendor-products row cols-3 gutter-sm">
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-4.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-5.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-6.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Vendor widget 2 */}
                <div className="swiper-slide vendor-widget mb-0">
                  <div className="vendor-widget-2">
                    <div className="vendor-details">
                      <figure className="vendor-logo">
                        <a href="vendor-dokan-store.html">
                          <img
                            src={require("./images/demos/demo9/vendor-logo/3.jpg")}
                            alt="Vendor Logo"
                            width={70}
                            height={70}
                          />
                        </a>
                      </figure>
                      <div className="vendor-personal">
                        <h4 className="vendor-name">
                          <a href="vendor-dokan-store.html">Vendor 3</a>
                        </h4>
                        <span className="vendor-product-count">
                          (30 Products)
                        </span>
                        <div className="ratings-container">
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="vendor-products row cols-3 gutter-sm">
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-7.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-8.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-9.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Vendor widget 2 */}
                <div className="swiper-slide vendor-widget mb-0">
                  <div className="vendor-widget-2">
                    <div className="vendor-details">
                      <figure className="vendor-logo">
                        <a href="vendor-dokan-store.html">
                          <img
                            src={require("./images/demos/demo9/vendor-logo/4.jpg")}
                            alt="Vendor Logo"
                            width={70}
                            height={70}
                          />
                        </a>
                      </figure>
                      <div className="vendor-personal">
                        <h4 className="vendor-name">
                          <a href="vendor-dokan-store.html">Vendor 4</a>
                        </h4>
                        <span className="vendor-product-count">
                          (17 Products)
                        </span>
                        <div className="ratings-container">
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                          <i
                            class="fa-solid fa-star"
                            style={{
                              color: "gold",
                            }}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="vendor-products row cols-3 gutter-sm">
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-10.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-11.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="vendor-product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/4-12.jpg")}
                              alt="Vendor Product"
                              width={100}
                              height={113}
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Vendor widget 2 */}
              </div>
              <div className="swiper-pagination" />
            </div>
            {/* End of Swiper Container */}
            <div className="row appear-animate">
              <div className="col-lg-4 col-md-5 mb-6">
                <div className="product-lg br-sm">
                  <h2 className="title title-underline mb-4">
                    Deals Of The Week
                  </h2>
                  <div className="swiper">
                    <div
                      className="swiper-container swiper-theme nav-top swiper-nav-md "
                      data-swiper-options="{
                              'spaceBetween': 20
                          }"
                    >
                      <div className="swiper-wrapper row cols-1">
                        <div className="swiper-slide product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src={require("./images/demos/demo9/product/5-1-1.jpg")}
                                alt="Product"
                                width={800}
                                height={900}
                              />
                              <img
                                src={require("./images/demos/demo9/product/5-1-2.jpg")}
                                alt="Product"
                                width={800}
                                height={900}
                              />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h3 className="product-name">
                              <a href="product-default.html">
                                Mobile Electronic Recorder
                              </a>
                            </h3>
                            <div className="product-price">
                              <ins className="new-price">$95.72</ins>
                              <del className="old-price">$97.15</del>
                            </div>
                          </div>
                        </div>
                        {/* End of Product */}
                        <div className="swiper-slide product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src={require("./images/demos/demo9/product/5-2-1.jpg")}
                                alt="Product"
                                width={800}
                                height={900}
                              />
                              <img
                                src={require("./images/demos/demo9/product/5-2-2.jpg")}
                                alt="Product"
                                width={800}
                                height={900}
                              />
                            </a>
                          </figure>
                          <div className="product-details">
                            <h3 className="product-name">
                              <a href="product-default.html">USB Charger</a>
                            </h3>
                            <div className="product-price">
                              <ins className="new-price">$129.62</ins>
                              <del className="old-price">$133.36</del>
                            </div>
                          </div>
                        </div>
                        {/* End of Product */}
                      </div>
                      <button className="swiper-button-next" />
                      <button className="swiper-button-prev" />
                    </div>
                  </div>
                  {/* End of Swiper Container */}
                  <div className="swiper-slide product-countdown-container">
                    <div className="countdown-lable mr-3 mb-2">
                      <h4 className="font-weight-bold ls-10">Hurry up!</h4>
                      <label className="text-dark">Offer end in:</label>
                    </div>
                    <div
                      className="swiper-slide product-countdown countdown-compact mb-2"
                      data-until="2021, 9, 9"
                      data-format="DHMS"
                      data-compact="false"
                      data-labels-short="Days, Hours, Mins, Secs"
                    >
                      00:00:00:00
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Col */}
              <div className="col-lg-8 col-md-7 mb-6">
                <Tabs
                  defaultActiveKey="Featured"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Featured" title="Featured">
                    <div
                      className="swiper-container swiper-theme"
                      data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 2,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 3
                                  },
                                  '992': {
                                      'slidesPerView': 4
                                  }
                              }
                          }"
                    >
                      <div className="swiper-wrapper row cols-lg-4 cols-sm-3 cols-2">
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-3.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">Gold Watch</a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$41.36</ins>
                                <del className="old-price">$48.82</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-7.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Comfortable Backpack
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$138.05</ins>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-4.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Brown Leather Shoes
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$70.28</ins>
                                <del className="old-price">$75.32</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-8.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Comfortable Armchair
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$290.05</ins>
                                <del className="old-price">$302.74</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-5.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Men's Suede Belt
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$37.19</ins>
                                <del className="old-price">$40.57</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-9.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">Prtable Torch</a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$10.73</ins>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-6.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">Wooden Chair</a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$40.21</ins>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-10.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Top Men's Hiking Hat
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$20.84</ins>
                                <del className="old-price">$25.92</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                      </div>
                      <div className="swiper-pagination" />
                    </div>
                  </Tab>

                  {/* End of Tab Pane */}
                  <Tab eventKey="On Sale" title="On Sale">
                    <div
                      className="swiper-container swiper-theme"
                      data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 2,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 3
                                  },
                                  '992': {
                                      'slidesPerView': 4
                                  }
                              }
                          }"
                    >
                      <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-md-2">
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-9.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">Prtable Torch</a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$10.73</ins>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-7.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Comfortable Backpack
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$138.05</ins>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-4.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Brown Leather Shoes
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$70.28</ins>
                                <del className="old-price">$75.32</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-5.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Men's Suede Belt
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$37.19</ins>
                                <del className="old-price">$40.57</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-10.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Top Men's Hiking Hat
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$20.84</ins>
                                <del className="old-price">$25.92</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-8.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Comfortable Armchair
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$290.05</ins>
                                <del className="old-price">$302.74</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-6.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">Wooden Chair</a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$40.21</ins>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-3.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">Gold Watch</a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$41.36</ins>
                                <del className="old-price">$48.82</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                      </div>
                      <div className="swiper-pagination" />
                    </div>
                  </Tab>

                  {/* End of Tab Pane */}
                  <Tab eventKey="Top rated" title="Top rated">
                    <div
                      className="swiper-container swiper-theme"
                      data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 2,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 3
                                  },
                                  '992': {
                                      'slidesPerView': 4
                                  }
                              }
                          }"
                    >
                      <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-md-2">
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-8.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Comfortable Armchair
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$290.05</ins>
                                <del className="old-price">$302.74</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-7.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Comfortable Backpack
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$138.05</ins>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-9.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">Prtable Torch</a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$10.73</ins>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-3.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">Gold Watch</a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$41.36</ins>
                                <del className="old-price">$48.82</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-5.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Men's Suede Belt
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$37.19</ins>
                                <del className="old-price">$40.57</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-6.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">Wooden Chair</a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$40.21</ins>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                        <div className="swiper-slide product-col">
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-10.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Top Men's Hiking Hat
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$20.84</ins>
                                <del className="old-price">$25.92</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                          <div className="product text-center">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("./images/demos/demo9/product/5-4.jpg")}
                                  alt="Product"
                                  width={800}
                                  height={900}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h3 className="product-name">
                                <a href="product-default.html">
                                  Brown Leather Shoes
                                </a>
                              </h3>
                              <div className="product-price">
                                <ins className="new-price">$70.28</ins>
                                <del className="old-price">$75.32</del>
                              </div>
                            </div>
                          </div>
                          {/* End of Product */}
                        </div>
                      </div>
                      <div className="swiper-pagination" />
                    </div>
                  </Tab>

                  {/* End of Tab Pane */}
                </Tabs>
              </div>
              {/* End of Col */}
            </div>
            {/* End of Row */}
            <div className="sale-banner banner br-sm appear-animate">
              <div className="banner-content">
                <h4 className="content-left banner-subtitle text-uppercase mb-8 mb-md-0 mr-0 mr-md-4 text-secondary ls-25">
                  <span className="text-dark font-weight-bold lh-1 ls-normal">
                    Up
                    <br />
                    To
                  </span>
                  20% Sale!
                </h4>
                <div className="content-right">
                  <h3 className="banner-title text-uppercase font-weight-normal mb-4 mb-md-0 ls-25 text-white">
                    <span>
                      Pay Only For
                      <strong className="mr-10 pr-lg-10">
                        Your Lovling Electronics
                      </strong>
                      Pay Only For
                      <strong className="mr-10 pr-lg-10">
                        Your Lovling Electronics
                      </strong>
                      Pay Only For
                      <strong className="mr-10 pr-lg-10">
                        Your Lovling Electronics
                      </strong>
                    </span>
                  </h3>
                  <a
                    href="demo9-shop.html"
                    className="btn btn-white btn-rounded"
                  >
                    Shop Now
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* End of Sale Banner */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <div className="filter-with-title title-underline mb-4 pb-2 appear-animate">
                <h2 className="title">Home &amp; Furnitures</h2>

                <Nav variant="pills" className="nav-filters home-decor">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="nav-filter">
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Garden Supplies</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Kitchen</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Bathroom</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Decor</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">Furniture</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventh">Accessories</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              {/* End of Filter With Title */}

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-1"
                  >
                    <div className="grid-item 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-1.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Lattice Soft Pillow
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$73.40</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-3 1-4 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-2.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Comfortable Armchair
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$290.05</ins>
                            <del className="old-price">$302.74</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-3.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Lantern</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$108.54</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-4.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Morden Table</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$231.47</ins>
                            <del className="old-price">$259.17</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-5.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Plastic Candle Box
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$46.16</ins>
                            <del className="old-price">$51.29</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-1"
                  >
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-3.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Lantern</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$108.54</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-4.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Morden Table</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$231.47</ins>
                            <del className="old-price">$259.17</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-5.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Plastic Candle Box
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$46.16</ins>
                            <del className="old-price">$51.29</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-1"
                  >
                    <div className="grid-item 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-1.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Lattice Soft Pillow
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$73.40</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-4.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Morden Table</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$231.47</ins>
                            <del className="old-price">$259.17</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}

                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-1"
                  >
                    {/* End of Grid Item */}
                    <div className="grid-item 1-3 1-4 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-2.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Comfortable Armchair
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$290.05</ins>
                            <del className="old-price">$302.74</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-3.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Lantern</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$108.54</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-5.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Plastic Candle Box
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$46.16</ins>
                            <del className="old-price">$51.29</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-1"
                  >
                    <div className="grid-item 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-1.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Lattice Soft Pillow
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$73.40</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-3 1-4 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-2.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Comfortable Armchair
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$290.05</ins>
                            <del className="old-price">$302.74</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-4.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Morden Table</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$231.47</ins>
                            <del className="old-price">$259.17</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}

                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-1"
                  >
                    <div className="grid-item 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-1.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Lattice Soft Pillow
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$73.40</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-3.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Lantern</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$108.54</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-5.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Plastic Candle Box
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$46.16</ins>
                            <del className="old-price">$51.29</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-1"
                  >
                    <div className="grid-item 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-1.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Lattice Soft Pillow
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$73.40</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-3 1-4 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-2.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Comfortable Armchair
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$290.05</ins>
                            <del className="old-price">$302.74</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/6-3.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Lantern</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$108.54</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}

                    {/* End of Grid Item */}

                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* End of Grid */}
            <div className="row cols-md-2 mb-6 appear-animate">
              <div className="banner banner-fixed category-banner mb-4">
                <figure className="br-sm">
                  <img
                    src={require("./images/demos/demo9/banner/2-1.jpg")}
                    alt="Category Banner"
                    width={640}
                    height={200}
                    style={{ backgroundColor: "#32373B" }}
                  />
                </figure>
                <div className="banner-content y-50">
                  <h5 className="banner-subtitle text-uppercase text-secondary font-weight-bold">
                    New Arrivals
                  </h5>
                  <h3 className="banner-title text-white text-capitalize font-weight-normal mb-5 ls-25">
                    <strong>Flash Wireless</strong>
                    <br />
                    Earphones
                  </h3>
                  <a
                    href="demo9-shop.html"
                    className="btn btn-white btn-link btn-underline btn-icon-right"
                  >
                    Shop Now
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              {/* End of Banner */}
              <div className="banner banner-fixed category-banner mb-4">
                <figure className="br-sm">
                  <img
                    src={require("./images/demos/demo9/banner/2-2.jpg")}
                    alt="Category Banner"
                    width={640}
                    height={200}
                    style={{ backgroundColor: "#ECECEE" }}
                  />
                </figure>
                <div className="banner-content y-50">
                  <h5 className="banner-subtitle text-capitalize font-weight-normal ls-25">
                    Flash Sale{" "}
                    <span className="text-secondary text-uppercase">
                      50% Off
                    </span>
                  </h5>
                  <h3 className="banner-title text-capitalize font-weight-normal mb-5 ls-25">
                    <strong>Fashion Figure</strong>
                    <br />
                    Skate Sale
                  </h3>
                  <a
                    href="demo9-shop.html"
                    className="btn btn-dark btn-link btn-underline btn-icon-right"
                  >
                    Shop Now
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
              {/* End of Banner */}
            </div>
            {/* End of Row */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <div className="filter-with-title title-underline mb-4 appear-animate">
                <h2 className="title">Consumer Electronic</h2>

                <Nav variant="pills" className="nav-filters home-decor">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="nav-filter">
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">TV &amp; Video</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Cameras</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth"> Audio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Accessories</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">Computers</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventh">Smartphone</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              {/* End of Filter With Title */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div
                    className="row "
                    id="products-2"
                  >
                 <Swiper
                  spaceBetween={30}
                  slidesPerView={5}
                  loop={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  { products.map((product) => (
                     <SwiperSlide>
                     <div className="grid-item 1-2 1-4 1-6">
                       <div className="product text-center">
                         <figure className="product-media">
                           <a href="product-default.html">
                             <img
                               src={product.images[0]}
                               alt="Product"
                               width={600}
                               height={675}
                             />
                           </a>
                         </figure>
                         <div className="product-details">
                           <h3 className="product-name">
                             <a href="product-default.html">{product.title}</a>
                           </h3>
                           <div className="product-price">
                             <ins className="new-price">Rs. {product.price}</ins>
                           </div>
                         </div>
                       </div>
                       {/* End of Product */}
                     </div>
                     </SwiperSlide>
                  ))}
                  
                    {/* End of Grid Item */}
                                        {/* End of Grid Item */}
                    <div className="grid-space col-xl-5col col-1" />

                    </Swiper>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-2"
                  >
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-3.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Fashion Table Sound Marker
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$72.80</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-4.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Charge &amp; Alarm Machine
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$84.25</ins>
                            <del className="old-price">$98.20</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-5.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Red Cap Sound Marker
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$89.50</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-2"
                  >
                    <div className="grid-item 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-1.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Wireless Mouse</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$15.73</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-4.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Charge &amp; Alarm Machine
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$84.25</ins>
                            <del className="old-price">$98.20</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-2"
                  >
                    {/* End of Grid Item */}
                    <div className="grid-item 1-3 1-4 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-2.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Wonderful Sound Music Player
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$50.29 - $58.28</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-3.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Fashion Table Sound Marker
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$72.80</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-5.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Red Cap Sound Marker
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$89.50</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-2"
                  >
                    <div className="grid-item 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-1.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Wireless Mouse</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$15.73</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-3 1-4 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-2.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Wonderful Sound Music Player
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$50.29 - $58.28</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-4.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Charge &amp; Alarm Machine
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$84.25</ins>
                            <del className="old-price">$98.20</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    {/* End of Grid Item */}
                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-2"
                  >
                    {/* End of Grid Item */}
                    <div className="grid-item 1-3 1-4 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-2.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Wonderful Sound Music Player
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$50.29 - $58.28</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-3.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Fashion Table Sound Marker
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$72.80</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-5.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Red Cap Sound Marker
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$89.50</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <div
                    className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate"
                    id="products-2"
                  >
                    <div className="grid-item 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-1.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">Wireless Mouse</a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$15.73</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-3 1-5 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-3.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Fashion Table Sound Marker
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$72.80</ins>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}
                    <div className="grid-item 1-1 1-2 1-4 1-6">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={require("./images/demos/demo9/product/7-4.jpg")}
                              alt="Product"
                              width={600}
                              height={675}
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-name">
                            <a href="product-default.html">
                              Charge &amp; Alarm Machine
                            </a>
                          </h3>
                          <div className="product-price">
                            <ins className="new-price">$84.25</ins>
                            <del className="old-price">$98.20</del>
                          </div>
                        </div>
                      </div>
                      {/* End of Product */}
                    </div>
                    {/* End of Grid Item */}

                    {/* End of Grid Item */}
                    <div className="grid-space col-xl-5col col-1" />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* End of Grid */}
            <div
              className="banner link-banner-newsletter br-sm appear-animate"
              style={{
                backgroundImage: `url('${banner3}')`,
                backgroundColor: "#27393D",
              }}
            >
              <div className="content-left mr-auto">
                <h3 className="banner-title text-white text-capitalize font-weight-bold ls-25">
                  Download Globlix App Now!
                </h3>
                <p className="text-white">
                  Shopping fastly and easily more with our app. Get a link to
                  download the app on your phone.
                </p>
                <form
                  action="#"
                  method="get"
                  className="input-wrapper input-wrapper-inline input-wrapper-rounded"
                >
                  <input
                    className="form-control mb-4"
                    type="email"
                    placeholder="Enter Your Email..."
                    name="email"
                    id="email_4"
                  />
                  <button
                    className="btn btn-primary btn-rounded mb-4"
                    type="submit"
                  >
                    Send Link
                  </button>
                </form>
              </div>
              {/* End of Content Left */}
              <div className="content-right">
                <a href="#">
                  <img
                    src={require("./images/demos/demo9/banner/button-1.jpg")}
                    alt="Button"
                    width={141}
                    height={41}
                    style={{ backgroundColor: "#121315" }}
                  />
                </a>
                <a href="#">
                  <img
                    src={require("./images/demos/demo9/banner/button-2.jpg")}
                    alt="Button"
                    width={141}
                    height={41}
                    style={{ backgroundColor: "#121315" }}
                  />
                </a>
              </div>
              {/* End of Content Right */}
            </div>
            {/* End of Link Banner Newsletter */}
            <div className="title-link-wrapper appear-animate">
              <h2 className="title">Top Rated Products</h2>
              <a
                href="shop-boxed-banner.html"
                className="font-weight-bold ls-25"
              >
                More Products
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            {/* End of Title Link Wrapper */}
            <div className="row cols-lg-4 cols-md-3 cols-xs-2 cols-1 appear-animate" style={{ marginBottom : '30px'}}>
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={require("./images/demos/demo9/product/7-5.jpg")}
                        alt="Product"
                        width={600}
                        height={675}
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">Red Cap Sound Marker</a>
                    </h4>
                    <div className="product-price">$89.50</div>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={require("./images/demos/demo9/product/8-1.jpg")}
                        alt="Product"
                        width={600}
                        height={675}
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">Mini Wireless Earphone</a>
                    </h4>
                    <div className="product-price">$120.57</div>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={require("./images/demos/demo9/product/5-10.jpg")}
                        alt="Product"
                        width={600}
                        height={675}
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">Top Men's Hiking Hat</a>
                    </h4>
                    <div className="product-price">
                      <ins className="new-price">$20.84</ins>
                      <del className="old-price">$25.92</del>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={require("./images/demos/demo9/product/4-5.jpg")}
                        alt="Product"
                        width={600}
                        height={675}
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">
                        Mobile Electronic Recorder
                      </a>
                    </h4>
                    <div className="product-price">
                      <ins className="new-price">$95.72</ins>
                      <del className="old-price">$97.15</del>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={require("./images/demos/demo9/product/7-1.jpg")}
                        alt="Product"
                        width={600}
                        height={675}
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">Wireless Mouse</a>
                    </h4>
                    <div className="product-price">$15.73</div>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={require("./images/demos/demo9/product/8-2.jpg")}
                        alt="Product"
                        width={600}
                        height={675}
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">Handy Camera</a>
                    </h4>
                    <div className="product-price">$360.19</div>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={require("./images/demos/demo9/product/8-3.jpg")}
                        alt="Product"
                        width={600}
                        height={675}
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">
                        Wonderful Sound Music Player
                      </a>
                    </h4>
                    <div className="product-price">$50.29 - $58.28</div>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={require("./images/demos/demo9/product/7-4.jpg")}
                        alt="Product"
                        width={600}
                        height={675}
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">
                        Charge &amp; Alarm Music
                      </a>
                    </h4>
                    <div className="product-price">
                      <ins className="new-price">$84.25</ins>
                      <del className="old-price">$98.20</del>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
            </div>
            {/* End of Product Widget */}
            <div className="title-link-wrapper appear-animate">
              <h2 className="title">New Buying Leads</h2>
              <a
                href="shop-boxed-banner.html"
                className="font-weight-bold ls-25"
              >
                More Products
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className="row cols-lg-4 cols-md-3 cols-xs-2 cols-1 appear-animate" style={{ marginBottom : '30px'}}>
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://media.istockphoto.com/vectors/iran-flag-vector-graphic-rectangle-iranian-flag-illustration-iran-vector-id1220933118?k=20&m=1220933118&s=170667a&w=0&h=BI8y3s5Y4yXYp7GmY8KxMChB2slLg_gV5cHj-K5VZJo="
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">Iran</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}} >
                      <a href="product-default.html">
                      We Buy Iron Ore
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">India</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{  marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">United Kingdom</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/640px-Flag_of_Israel.svg.png"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">Isral</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://cdn.britannica.com/88/7888-004-FD4BC606/Flag-Slovakia.jpg"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">Solvakia</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">England</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{  marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                  <div className="product-price">Australia</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://cdn.britannica.com/62/4562-004-C04E54C5/Flag-Taiwan.jpg"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">Taiwan</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}} >
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
            </div>
            {/* End of Product Widget */}
            <div className="title-link-wrapper appear-animate">
              <h2 className="title">New Selling Leads</h2>
              <a
                href="shop-boxed-banner.html"
                className="font-weight-bold ls-25"
              >
                More Products
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className="row cols-lg-4 cols-md-3 cols-xs-2 cols-1 appear-animate" style={{ marginBottom : '30px'}}>
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://media.istockphoto.com/vectors/iran-flag-vector-graphic-rectangle-iranian-flag-illustration-iran-vector-id1220933118?k=20&m=1220933118&s=170667a&w=0&h=BI8y3s5Y4yXYp7GmY8KxMChB2slLg_gV5cHj-K5VZJo="
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">Iran</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}} >
                      <a href="product-default.html">
                      We Buy Iron Ore
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">India</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{  marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">United Kingdom</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/640px-Flag_of_Israel.svg.png"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">Isral</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://cdn.britannica.com/88/7888-004-FD4BC606/Flag-Slovakia.jpg"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">Solvakia</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">England</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{  marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                  <div className="product-details">
                  <div className="product-price">Australia</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}}>
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
              <div className="product-wrap mb-0">
                <div className="product product-widget">
                <figure className="product-media" style={{
                          maxWidth: "15%",
                          marginTop: "-30px"
                        }}>
                    <a href="product-default.html">
                      <img
                        src="https://cdn.britannica.com/62/4562-004-C04E54C5/Flag-Taiwan.jpg"
                        alt="Product"
                        width={600}
                        height={675}
                        
                      />
                    </a>
                  </figure>
                <div className="product-details">
                  <div className="product-price">Taiwan</div>
                  <p style={{ color : 'grey', marginTop:'-12px'}}> 30 Mar, 2022</p>
                    <h4 className="product-name" style={{ marginTop:'-8px'}} >
                      <a href="product-default.html">
                      We Buy Cooking Oil
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* End of Product Wrap */}
            </div>
            {/* End of Product Widget */}
            <div
              className="swiper-container swiper-theme brands-wrapper br-sm mb-10 appear-animate"
              data-swiper-options="{
              'loop': true,
              'spaceBetween': 20,
              'slidesPerView': 2,
              'autoplay': {
                  'delay': 4000,
                  'disableOnInteraction': false
              },
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 4
                  },
                  '992': {
                      'slidesPerView': 6
                  },
                  '1200': {
                      'slidesPerView': 8
                  }
              }
          }"
            >
              <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
                {brands.map((brand) => (
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src={brand.image}
                        alt="Brand"
                        width={290}
                        height={100}
                      />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
            {/* End of Brands Wrapper */}
            <div className="title-link-wrapper title-post pb-1 mb-4 appear-animate">
              <h2 className="title ls-normal mb-1">From Our Blog</h2>
              <a
                href="blog-listing.html"
                className="font-weight-bold font-size-normal ls-25 mb-0"
              >
                View All Articles
              </a>
            </div>
            <div
              className="swiper-container swiper-theme post-wrapper pb-2 pb-lg-0 mb-10 mb-lg-6 appear-animate"
              data-swiper-options="{
              'slidesPerView': 1,
              'spaceBetween': 20,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 2
                  },
                  '768': {
                      'slidesPerView': 3
                  },
                  '992': {
                      'slidesPerView': 4,
                      'dots': false
                  }
              }
          }"
            >
              <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                <div className="swiper-slide post text-center overlay-zoom">
                  <figure className="post-media br-sm">
                    <a href="post-single.html">
                      <img
                        src={require("./images/demos/demo9/blog/1.jpg")}
                        alt="Post"
                        width={620}
                        height={420}
                        style={{ backgroundColor: "#B9BAB4" }}
                      />
                    </a>
                  </figure>
                  <div className="post-details">
                    <div className="post-meta">
                      by{" "}
                      <a href="#" className="post-author">
                        John Doe
                      </a>
                      -{" "}
                      <a href="#" className="post-date mr-0">
                        03.05.2021
                      </a>
                    </div>
                    <h4 className="post-title">
                      <a href="post-single.html">
                        We want to be different, and Fashion gives me that
                        outlet to do
                      </a>
                    </h4>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-dark btn-underline"
                    >
                      Read More
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide post text-center overlay-zoom">
                  <figure className="post-media br-sm">
                    <a href="post-single.html">
                      <img
                        src={require("./images/demos/demo9/blog/2.jpg")}
                        alt="Post"
                        width={620}
                        height={420}
                        style={{ backgroundColor: "#F2F3F7" }}
                      />
                    </a>
                  </figure>
                  <div className="post-details">
                    <div className="post-meta">
                      by{" "}
                      <a href="#" className="post-author">
                        John Doe
                      </a>
                      -{" "}
                      <a href="#" className="post-date mr-0">
                        03.05.2021
                      </a>
                    </div>
                    <h4 className="post-title">
                      <a href="post-single.html">
                        Explore Fashion For Women In
                      </a>
                    </h4>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-dark btn-underline"
                    >
                      Read More
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide post text-center overlay-zoom">
                  <figure className="post-media br-sm">
                    <a href="post-single.html">
                      <img
                        src={require("./images/demos/demo9/blog/3.jpg")}
                        alt="Post"
                        width={620}
                        height={420}
                        style={{ backgroundColor: "#D7DDDF" }}
                      />
                    </a>
                  </figure>
                  <div className="post-details">
                    <div className="post-meta">
                      by{" "}
                      <a href="#" className="post-author">
                        John Doe
                      </a>
                      -{" "}
                      <a href="#" className="post-date mr-0">
                        03.05.2021
                      </a>
                    </div>
                    <h4 className="post-title">
                      <a href="post-single.html">
                        Fashion tells about who you are from external point of
                        view
                      </a>
                    </h4>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-dark btn-underline"
                    >
                      Read More
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide post text-center overlay-zoom">
                  <figure className="post-media br-sm">
                    <a href="post-single.html">
                      <img
                        src={require("./images/demos/demo9/blog/4.jpg")}
                        alt="Post"
                        width={620}
                        height={420}
                        style={{ backgroundColor: "#E4E8EB" }}
                      />
                    </a>
                  </figure>
                  <div className="post-details">
                    <div className="post-meta">
                      by{" "}
                      <a href="#" className="post-author">
                        John Doe
                      </a>
                      -{" "}
                      <a href="#" className="post-date mr-0">
                        03.05.2021
                      </a>
                    </div>
                    <h4 className="post-title">
                      <a href="post-single.html">
                        Just found the ultimate denim dresses
                      </a>
                    </h4>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-dark btn-underline"
                    >
                      Read More
                      <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          {/* End of Container */}
        </main>
        {/* End of Main */}
        {/* Start of Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
      {/* End of Pgge-wrapper */}
      {/* Start of Sticky Footer */}
      <div className="sticky-footer sticky-content fix-bottom">
        <a href="demo9.html" className="sticky-link active">
          <i className="w-icon-home" />
          <p>Home</p>
        </a>
        <a href="demo9-shop.html" className="sticky-link">
          <i className="w-icon-category" />
          <p>Shop</p>
        </a>
        <a href="my-account.html" className="sticky-link">
          <i className="w-icon-account" />
          <p>Account</p>
        </a>
        <div className="cart-dropdown dir-up">
          <a href="cart.html" className="sticky-link">
            <i className="w-icon-cart" />
            <p>Cart</p>
          </a>
          <div className="dropdown-box">
            <div className="products">
              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">
                      Beige knitted elas
                      <br />
                      tic runner shoes
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$25.68</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/cart/product-1.jpg"
                      alt="product"
                      height={84}
                      width={94}
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times" />
                </button>
              </div>
              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">
                      Blue utility pina
                      <br />
                      fore denim dress
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$32.99</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src={require("./images/cart/product-2.jpg")}
                      alt="product"
                      width={84}
                      height={94}
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="cart-total">
              <label>Subtotal:</label>
              <span className="price">$58.67</span>
            </div>
            <div className="cart-action">
              <a
                href="cart.html"
                className="btn btn-dark btn-outline btn-rounded"
              >
                View Cart
              </a>
              <a href="checkout.html" className="btn btn-primary  btn-rounded">
                Checkout
              </a>
            </div>
          </div>
          {/* End of Dropdown Box */}
        </div>
        <div className="header-search hs-toggle dir-up">
          <a href="#" className="search-toggle sticky-link">
            <i className="w-icon-search" />
            <p>Search</p>
          </a>
          <form action="#" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="Search"
              required=""
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search" />
            </button>
          </form>
        </div>
      </div>
      {/* End of Sticky Footer */}
      {/* Start of Scroll Top */}
      <a
        id="scroll-top"
        className="scroll-top"
        href="#top"
        title="Top"
        role="button"
      >
        {" "}
        <i className="w-icon-angle-up" />{" "}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
        >
          <circle
            id="progress-indicator"
            fill="transparent"
            stroke="#000000"
            strokeMiterlimit={10}
            cx={35}
            cy={35}
            r={34}
            style={{ strokeDasharray: "16.4198, 400" }}
          />
        </svg>{" "}
      </a>
      {/* End of Scroll Top */}
      {/* Start of Mobile Menu */}
      <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay" />
        {/* End of .mobile-menu-overlay */}
        <a href="#" className="mobile-menu-close">
          <i className="close-icon" />
        </a>
        {/* End of .mobile-menu-close */}
        <div className="mobile-menu-container scrollable">
          <form action="#" method="get" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="Search"
              required=""
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search" />
            </button>
          </form>
          {/* End of Search Form */}
          <div className="tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a href="#main-menu" className="nav-link active">
                  Main Menu
                </a>
              </li>
              <li className="nav-item">
                <a href="#categories" className="nav-link">
                  Categories
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="main-menu">
              <ul className="mobile-menu">
                <li>
                  <a href="demo9.html">Home</a>
                </li>
                <li>
                  <a href="demo9-shop.html">Shop</a>
                  <ul>
                    <li>
                      <a href="#">Shop Pages</a>
                      <ul>
                        <li>
                          <a href="shop-banner-sidebar.html">
                            Banner With Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-boxed-banner.html">Boxed Banner</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Full Width Banner
                          </a>
                        </li>
                        <li>
                          <a href="shop-horizontal-filter.html">
                            Horizontal Filter
                            <span className="tip tip-hot">Hot</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-off-canvas.html">
                            Off Canvas Sidebar
                            <span className="tip tip-new">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-infinite-scroll.html">
                            Infinite Ajax Scroll
                          </a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar.html">Right Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-both-sidebar.html">Both Sidebar</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="vendor-dokan-store.html">Vendor</a>
                  <ul>
                    <li>
                      <a href="#">Store Listing</a>
                      <ul>
                        <li>
                          <a href="vendor-dokan-store-list.html">
                            Store listing 1
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcfm-store-list.html">
                            Store listing 2
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcmp-store-list.html">
                            Store listing 3
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wc-store-list.html">
                            Store listing 4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Vendor Store</a>
                      <ul>
                        <li>
                          <a href="vendor-dokan-store.html">Vendor Store 1</a>
                        </li>
                        <li>
                          <a href="vendor-wcfm-store-product-grid.html">
                            Vendor Store 2
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcmp-store-product-grid.html">
                            Vendor Store 3
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wc-store-product-grid.html">
                            Vendor Store 4
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">Classic</a>
                    </li>
                    <li>
                      <a href="blog-listing.html">Listing</a>
                    </li>
                    <li>
                      <a href="https://www.portotheme.com/html/Globlix/blog-grid.html">
                        Grid
                      </a>
                      <ul>
                        <li>
                          <a href="blog-grid-2cols.html">Grid 2 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-3cols.html">Grid 3 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-4cols.html">Grid 4 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-sidebar.html">Grid sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Masonry</a>
                      <ul>
                        <li>
                          <a href="blog-masonry-2cols.html">
                            Masonry 2 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-3cols.html">
                            Masonry 3 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-4cols.html">
                            Masonry 4 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-sidebar.html">
                            Masonry sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                      <ul>
                        <li>
                          <a href="blog-mask-grid.html">Blog mask grid</a>
                        </li>
                        <li>
                          <a href="blog-mask-masonry.html">Blog mask masonry</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="post-single.html">Single Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about-us.html">Pages</a>
                  <ul>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="become-a-vendor.html">Become A Vendor</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="error-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="elements.html">Elements</a>
                  <ul>
                    <li>
                      <a href="element-products.html">Products</a>
                    </li>
                    <li>
                      <a href="element-titles.html">Titles</a>
                    </li>
                    <li>
                      <a href="element-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="element-categories.html">Product Category</a>
                    </li>
                    <li>
                      <a href="element-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="element-accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="element-alerts.html">Alert &amp; Notification</a>
                    </li>
                    <li>
                      <a href="element-tabs.html">Tabs</a>
                    </li>
                    <li>
                      <a href="element-testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="element-blog-posts.html">Blog Posts</a>
                    </li>
                    <li>
                      <a href="element-instagrams.html">Instagrams</a>
                    </li>
                    <li>
                      <a href="element-cta.html">Call to Action</a>
                    </li>
                    <li>
                      <a href="element-vendors.html">Vendors</a>
                    </li>
                    <li>
                      <a href="element-icon-boxes.html">Icon Boxes</a>
                    </li>
                    <li>
                      <a href="element-icons.html">Icons</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="tab-pane" id="categories">
              <ul className="mobile-menu">
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-tshirt2" />
                    Fashion
                  </a>
                  <ul>
                    <li>
                      <a href="#">Women</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">New Arrivals</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Best Sellers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Trending</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Clothing</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Shoes</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bags</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Accessories</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Jewlery &amp; Watches
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Men</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">New Arrivals</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Best Sellers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Trending</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Clothing</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Shoes</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bags</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Accessories</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Jewlery &amp; Watches
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-home" />
                    Home &amp; Garden
                  </a>
                  <ul>
                    <li>
                      <a href="#">Bedroom</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Beds, Frames &amp; Bases
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Dressers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Nightstands</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Kid's Beds &amp; Headboards
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Armoires</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Living Room</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Coffee Tables</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Chairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Tables</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Futons &amp; Sofa Beds
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Cabinets &amp; Chests
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Office</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Office Chairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Desks</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bookcases</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">File Cabinets</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Breakroom Tables
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Kitchen &amp; Dining</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Dining Sets</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Kitchen Storage Cabinets
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bashers Racks</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Dining Chairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Dining Room Tables
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bar Stools</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-electronics" />
                    Electronics
                  </a>
                  <ul>
                    <li>
                      <a href="#">Laptops &amp; Computers</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Desktop Computers
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Monitors</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Laptops</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Hard Drives &amp; Storage
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Computer Accessories
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">TV &amp; Video</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">TVs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Home Audio Speakers
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Projectors</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Media Streaming Devices
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Digital Cameras</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Digital SLR Cameras
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Sports &amp; Action Cameras
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Camera Lenses</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Photo Printer</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Digital Memory Cards
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Cell Phones</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Carrier Phones
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Unlocked Phones
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Phone &amp; Cellphone Cases
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Cellphone Chargers
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-furniture" />
                    Furniture
                  </a>
                  <ul>
                    <li>
                      <a href="#">Furniture</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Sofas &amp; Couches
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Armchairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bed Frames</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Beside Tables</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Dressing Tables
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Lighting</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Light Bulbs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Lamps</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Celling Lights
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Wall Lights</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Bathroom Lighting
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Home Accessories</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Decorative Accessories
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Candals &amp; Holders
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Home Fragrance
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Mirrors</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Clocks</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Garden &amp; Outdoors</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Garden Furniture
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Lawn Mowers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Pressure Washers
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            All Garden Tools
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Outdoor Dining
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-heartbeat" />
                    Healthy &amp; Beauty
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-gift" />
                    Gift Ideas
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-gamepad" />
                    Toy &amp; Games
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ice-cream" />
                    Cooking
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ios" />
                    Smart Phones
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-camera" />
                    Cameras &amp; Photo
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ruby" />
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="shop-banner-sidebar.html"
                    className="font-weight-bold text-primary text-uppercase ls-25"
                  >
                    View All Categories
                    <i className="w-icon-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* End of Newsletter popup */}
      {/* Start of Quick View */}
      <div className="product product-single product-popup">
        <div className="row gutter-lg">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="product-gallery product-gallery-sticky">
              <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                <div className="swiper-wrapper row cols-1 gutter-no">
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src={require("./images/products/popup/1-440x494.jpg")}
                        data-zoom-image={require("./images/products/popup/1-800x900.jpg")}
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src={require("./images/products/popup/2-440x494.jpg")}
                        data-zoom-image={require("./images/products/popup/2-800x900.jpg")}
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src={require("./images/products/popup/3-440x494.jpg")}
                        data-zoom-image={require("./images/products/popup/3-800x900.jpg")}
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src={require("./images/products/popup/4-440x494.jpg")}
                        data-zoom-image={require("./images/products/popup/4-800x900.jpg")}
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                </div>
                <button className="swiper-button-next" />
                <button className="swiper-button-prev" />
              </div>
              <div
                className="product-thumbs-wrap swiper-container"
                data-swiper-options="{
                  'navigation': {
                      'nextEl': '.swiper-button-next',
                      'prevEl': '.swiper-button-prev'
                  }
              }"
              >
                <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                  <div className="product-thumb swiper-slide">
                    <img
                      src={require("./images/products/popup/1-103x116.jpg")}
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src={require("./images/products/popup/2-103x116.jpg")}
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src={require("./images/products/popup/3-103x116.jpg")}
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src={require("./images/products/popup/4-103x116.jpg")}
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                </div>
                <button className="swiper-button-next" />
                <button className="swiper-button-prev" />
              </div>
            </div>
          </div>
          <div className="col-md-6 overflow-hidden p-relative">
            <div className="product-details scrollable pl-0">
              <h2 className="product-title">Electronics Black Wrist Watch</h2>
              <div className="product-bm-wrapper">
                <figure className="brand">
                  <img
                    src={require("./images/products/brand/brand-1.jpg")}
                    alt="Brand"
                    width={102}
                    height={48}
                  />
                </figure>
                <div className="product-meta">
                  <div className="product-categories">
                    Category:
                    <span className="product-category">
                      <a href="#">Electronics</a>
                    </span>
                  </div>
                  <div className="product-sku">
                    SKU: <span>MS46891340</span>
                  </div>
                </div>
              </div>
              <hr className="product-divider" />
              <div className="product-price">$40.00</div>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "80%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
                <a href="#" className="rating-reviews">
                  (3 Reviews)
                </a>
              </div>
              <div className="product-short-desc">
                <ul className="list-type-check list-style-none">
                  <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                  <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                  <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                </ul>
              </div>
              <hr className="product-divider" />
              <div className="product-form product-variation-form product-color-swatch">
                <label>Color:</label>
                <div className="d-flex align-items-center product-variations">
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#ffcc01" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#ca6d00" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#1c93cb" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#ccc" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#333" }}
                  />
                </div>
              </div>
              <div className="product-form product-variation-form product-size-swatch">
                <label className="mb-1">Size:</label>
                <div className="flex-wrap d-flex align-items-center product-variations">
                  <a href="#" className="size">
                    Small
                  </a>
                  <a href="#" className="size">
                    Medium
                  </a>
                  <a href="#" className="size">
                    Large
                  </a>
                  <a href="#" className="size">
                    Extra Large
                  </a>
                </div>
                <a href="#" className="product-variation-clean">
                  Clean All
                </a>
              </div>
              <div className="product-variation-price">
                <span />
              </div>
              <div className="product-form">
                <div className="product-qty-form">
                  <div className="input-group">
                    <input
                      className="quantity form-control"
                      type="number"
                      min={1}
                      max={10000000}
                    />
                    <button className="quantity-plus w-icon-plus" />
                    <button className="quantity-minus w-icon-minus" />
                  </div>
                </div>
                <button className="btn btn-primary btn-cart">
                  <i className="w-icon-cart" />
                  <span>Add to Cart</span>
                </button>
              </div>
              <div className="social-links-wrapper">
                <div className="social-links">
                  <div className="social-icons social-no-color border-thin">
                    <a
                      href="#"
                      className="social-icon social-facebook w-icon-facebook"
                    />
                    <a
                      href="#"
                      className="social-icon social-twitter w-icon-twitter"
                    />
                    <a
                      href="#"
                      className="social-icon social-pinterest fab fa-pinterest-p"
                    />
                    <a
                      href="#"
                      className="social-icon social-whatsapp fab fa-whatsapp"
                    />
                    <a
                      href="#"
                      className="social-icon social-youtube fab fa-linkedin-in"
                    />
                  </div>
                </div>
                <span className="divider d-xs-show" />
                <div className="product-link-wrapper d-flex">
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                  >
                    <span />
                  </a>
                  <a
                    href="#"
                    className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                  >
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Quick view */}
      {/* Plugin JS File */}
      {/* Main JS */}
      {/* Mirrored from portotheme.com/html/Globlix/demo9.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 28 Mar 2022 10:00:05 GMT */}
    </>
  );
}

export default Home;

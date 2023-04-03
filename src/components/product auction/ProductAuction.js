import React from "react";
// import '../../css/main.css'
import Header from "../header/Header";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


function ProductAuction() {

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

  return (
    <>
      
      {/*============= ScrollToTop Section Starts Here =============*/}
      
            {/*============= ScrollToTop Section Ends Here =============*/}
      {/*============= Header Section Starts Here =============*/}
      <Header />
      {/*============= Header Section Ends Here =============*/}
      {/*============= Cart Section Starts Here =============*/}
      <div className="cart-sidebar-area">
        <div className="top-content">
          <a href="index.html" className="logo">
            <img src={require('../../auctionImage/images/logo/logo2.png')} alt="logo" />
          </a>
          <span className="side-sidebar-close-btn">
            <i className="fas fa-times" />
          </span>
        </div>
        <div className="bottom-content">
          <div className="cart-products">
            <h4 className="title">Shopping cart</h4>
            <div className="single-product-item">
              <div className="thumb">
                <a href="#0">
                  <img src={require('../../auctionImage/images/shop/shop01.jpg')} alt="shop" />
                </a>
              </div>
              <div className="content">
                <h4 className="title">
                  <a href="#0">Color Pencil</a>
                </h4>
                <div className="price">
                  <span className="pprice">$80.00</span>{" "}
                  <del className="dprice">$120.00</del>
                </div>
                <a href="#" className="remove-cart">
                  Remove
                </a>
              </div>
            </div>
            <div className="single-product-item">
              <div className="thumb">
                <a href="#0">
                  <img src={require('../../auctionImage/images/shop/shop02.jpg')} alt="shop" />
                </a>
              </div>
              <div className="content">
                <h4 className="title">
                  <a href="#0">Water Pot</a>
                </h4>
                <div className="price">
                  <span className="pprice">$80.00</span>{" "}
                  <del className="dprice">$120.00</del>
                </div>
                <a href="#" className="remove-cart">
                  Remove
                </a>
              </div>
            </div>
            <div className="single-product-item">
              <div className="thumb">
                <a href="#0">
                  <img src={require('../../auctionImage/images/shop/shop03.jpg')} alt="shop" />
                </a>
              </div>
              <div className="content">
                <h4 className="title">
                  <a href="#0">Art Paper</a>
                </h4>
                <div className="price">
                  <span className="pprice">$80.00</span>{" "}
                  <del className="dprice">$120.00</del>
                </div>
                <a href="#" className="remove-cart">
                  Remove
                </a>
              </div>
            </div>
            <div className="single-product-item">
              <div className="thumb">
                <a href="#0">
                  <img src={require('../../auctionImage/images/shop/shop04.jpg')} alt="shop" />
                </a>
              </div>
              <div className="content">
                <h4 className="title">
                  <a href="#0">Stop Watch</a>
                </h4>
                <div className="price">
                  <span className="pprice">$80.00</span>{" "}
                  <del className="dprice">$120.00</del>
                </div>
                <a href="#" className="remove-cart">
                  Remove
                </a>
              </div>
            </div>
            <div className="single-product-item">
              <div className="thumb">
                <a href="#0">
                  <img src={require('../../auctionImage/images/shop/shop05.jpg')} alt="shop" />
                </a>
              </div>
              <div className="content">
                <h4 className="title">
                  <a href="#0">Comics Book</a>
                </h4>
                <div className="price">
                  <span className="pprice">$80.00</span>{" "}
                  <del className="dprice">$120.00</del>
                </div>
                <a href="#" className="remove-cart">
                  Remove
                </a>
              </div>
            </div>
            <div className="btn-wrapper text-center">
              <a href="#0" className="custom-button">
                <span>Checkout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*============= Cart Section Ends Here =============*/}
      {/*============= Banner Section Starts Here =============*/}
      <section
        className="banner-section bg_img"
        data-background={require('../../auctionImage/images/banner/banner-bg-1.png')}
        style={{
            background: '#a3bde6'
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-xl-6">
              <div className="banner-content cl-white">
                <h5 className="cate">Next Generation Auction</h5>
                <h1 className="title">
                  <span className="d-xl-block">Find Your</span> Next Deal!
                </h1>
                <p>
                  Online Auction is where everyone goes to shop, sell,and give,
                  while discovering variety and affordability.
                </p>
                <a href="#0" className="custom-button yellow btn-large">
                  Get Started
                </a>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-6">
              <div className="banner-thumb-2">
                <img src={require('../../auctionImage/images/banner/banner-1.png')} alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape d-none d-lg-block">
          <img src="assets/css/img/banner-shape.png" alt="css" />
        </div>
      </section>
      {/*============= Banner Section Ends Here =============*/}
      <div className="browse-section ash-bg">
        {/*============= Hightlight Slider Section Starts Here =============*/}
        <div className="browse-slider-section mt--140">
          <div className="container">
            <div className="section-header-2 cl-white mb-4">
              <div className="left">
                <h6 className="title pl-0 w-100">Browse the highlights</h6>
              </div>
              <div className="slider-nav">
                <a href="#0" className="bro-prev">
                  <i className="flaticon-left-arrow" />
                </a>
                <a href="#0" className="bro-next active">
                  <i className="flaticon-right-arrow" />
                </a>
              </div>
            </div>
            <div className="m--15">
              <div className="browse-slider owl-theme owl-carousel">
              <Swiper
                  spaceBetween={10}
                  centeredSlides={true}
                  slidesPerView={5}
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
                <a href="#0" className="browse-item">
                  <img src={require('../../auctionImage/images/auction/01.png')} alt="auction" />
                  <span className="info">Vehicles</span>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#0" className="browse-item">
                  <img src={require('../../auctionImage/images/auction/02.png')} alt="auction" />
                  <span className="info">Jewelry</span>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#0" className="browse-item">
                  <img src={require('../../auctionImage/images/auction/03.png')} alt="auction" />
                  <span className="info">Watches</span>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#0" className="browse-item">
                  <img src={require('../../auctionImage/images/auction/04.png')} alt="auction" />
                  <span className="info">Electronics</span>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#0" className="browse-item">
                  <img src={require('../../auctionImage/images/auction/05.png')} alt="auction" />
                  <span className="info">Sports</span>
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#0" className="browse-item">
                  <img src={require('../../auctionImage/images/auction/06.png')} alt="auction" />
                  <span className="info">Real Estate</span>
                </a>
                </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/*============= Hightlight Slider Section Ends Here =============*/}
        {/*============= Car Auction Section Starts Here =============*/}
        <section className="car-auction-section padding-bottom padding-top pos-rel oh">
          <div className="car-bg">
            <img src="assets/images/auction/car/car-bg.png" alt="car" />
          </div>
          <div className="container">
            <div className="section-header-3">
              <div className="left">
                <div className="thumb">
                  <img
                    src="assets/images/header-icons/car-1.png"
                    alt="header-icons"
                  />
                </div>
                <div className="title-area">
                  <h2 className="title">Vehicles</h2>
                  <p>We offer affordable Vehicles</p>
                </div>
              </div>
              <a href="#0" className="normal-button">
                View All
              </a>
            </div>
            <div className="row justify-content-center mb-30-none">
              <div className="col-sm-10 col-md-6 col-lg-4">
                <div className="auction-item-2">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/images/auction/car/auction-1.jpg"
                        alt="car"
                      />
                    </a>
                    <a href="#0" className="rating">
                      <i className="far fa-star" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">2018 Hyundai Sonata</a>
                    </h6>
                    <div className="bid-area">
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-money" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Buy Now</div>
                          <div className="amount">$5,00.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter26" />
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                    <div className="text-center">
                      <a href="#0" className="custom-button">
                        Submit a bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-lg-4">
                <div className="auction-item-2">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/images/auction/car/auction-2.jpg"
                        alt="car"
                      />
                    </a>
                    <a href="#0" className="rating">
                      <i className="far fa-star" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">2018 Nissan Versa, S</a>
                    </h6>
                    <div className="bid-area">
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-money" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Buy Now</div>
                          <div className="amount">$5,00.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter27" />
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                    <div className="text-center">
                      <a href="#0" className="custom-button">
                        Submit a bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-lg-4">
                <div className="auction-item-2">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/images/auction/car/auction-3.jpg"
                        alt="car"
                      />
                    </a>
                    <a href="#0" className="rating">
                      <i className="far fa-star" />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        2018 Honda Accord, Sport
                      </a>
                    </h6>
                    <div className="bid-area">
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-money" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Buy Now</div>
                          <div className="amount">$5,00.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="countdown-area">
                      <div className="countdown">
                        <div id="bid_counter28" />
                      </div>
                      <span className="total-bids">30 Bids</span>
                    </div>
                    <div className="text-center">
                      <a href="#0" className="custom-button">
                        Submit a bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*============= Car Auction Section Ends Here =============*/}
      </div>
      {/*============= Jewelry Auction Section Starts Here =============*/}
      <section className="jewelry-auction-section padding-bottom padding-top pos-rel">
        <div className="jewelry-bg d-none d-xl-block">
          <img
            src="assets/images/auction/jewelry/jwelry-bg.png"
            alt="jewelry"
          />
        </div>
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              <div className="thumb">
                <img
                  src="assets/images/header-icons/coin-1.png"
                  alt="header-icons"
                />
              </div>
              <div className="title-area">
                <h2 className="title">Jewelry</h2>
                <p>
                  Online jewelry auctions where you can bid now and save money
                </p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
          </div>
          <div className="row justify-content-center mb-30-none">
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img
                      src="assets/images/auction/jewelry/auction-1.jpg"
                      alt="jewelry"
                    />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a>
                </div>
                <div className="auction-content">
                  <h6 className="title">
                    <a href="product-details.html">
                      Gold Ring With Clear Stones
                    </a>
                  </h6>
                  <div className="bid-area">
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-money" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Buy Now</div>
                        <div className="amount">$5,00.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-area">
                    <div className="countdown">
                      <div id="bid_counter23" />
                    </div>
                    <span className="total-bids">30 Bids</span>
                  </div>
                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img
                      src="assets/images/auction/jewelry/auction-2.jpg"
                      alt="jewelry"
                    />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a>
                </div>
                <div className="auction-content">
                  <h6 className="title">
                    <a href="product-details.html">
                      Ring With Clear Stone Accents
                    </a>
                  </h6>
                  <div className="bid-area">
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-money" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Buy Now</div>
                        <div className="amount">$5,00.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-area">
                    <div className="countdown">
                      <div id="bid_counter24" />
                    </div>
                    <span className="total-bids">30 Bids</span>
                  </div>
                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img
                      src="assets/images/auction/jewelry/auction-3.jpg"
                      alt="jewelry"
                    />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a>
                </div>
                <div className="auction-content">
                  <h6 className="title">
                    <a href="product-details.html">
                      Gold Ring With Clear Stones
                    </a>
                  </h6>
                  <div className="bid-area">
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-money" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Buy Now</div>
                        <div className="amount">$5,00.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-area">
                    <div className="countdown">
                      <div id="bid_counter25" />
                    </div>
                    <span className="total-bids">30 Bids</span>
                  </div>
                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============= Jewelry Auction Section Ends Here =============*/}
      {/*============= Call In Section Starts Here =============*/}
      <section className="call-in-section padding-top pt-max-xl-0">
        <div className="container">
          <div
            className="call-wrapper cl-white bg_img"
            data-background="assets/images/call-in/call-bg.png"
          >
            <div className="section-header">
              <h3 className="title">
                Register for Free &amp; Start Bidding Now!
              </h3>
              <p>From cars to diamonds to iPhones, we have it all.</p>
            </div>
            <a href="sign-up.html" className="custom-button white">
              Register
            </a>
          </div>
        </div>
      </section>
      {/*============= Call In Section Ends Here =============*/}
      {/*============= Watches Auction Section Starts Here =============*/}
      <section className="watches-auction-section padding-bottom padding-top">
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              <div className="thumb">
                <img
                  src="assets/images/header-icons/coin-1.png"
                  alt="header-icons"
                />
              </div>
              <div className="title-area">
                <h2 className="title">Watches</h2>
                <p>Shop for men &amp; women designer brand watches</p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
          </div>
          <div className="row justify-content-center mb-30-none">
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img
                      src="assets/images/auction/watches/auction-1.jpg"
                      alt="watches"
                    />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a>
                </div>
                <div className="auction-content">
                  <h6 className="title">
                    <a href="product-details.html">Vintage Rolex</a>
                  </h6>
                  <div className="bid-area">
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-money" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Buy Now</div>
                        <div className="amount">$5,00.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-area">
                    <div className="countdown">
                      <div id="bid_counter20" />
                    </div>
                    <span className="total-bids">30 Bids</span>
                  </div>
                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img
                      src="assets/images/auction/watches/auction-2.jpg"
                      alt="watches"
                    />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a>
                </div>
                <div className="auction-content">
                  <h6 className="title">
                    <a href="product-details.html">
                      Lady’s Vintage Rolex Datejust
                    </a>
                  </h6>
                  <div className="bid-area">
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-money" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Buy Now</div>
                        <div className="amount">$5,00.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-area">
                    <div className="countdown">
                      <div id="bid_counter21" />
                    </div>
                    <span className="total-bids">30 Bids</span>
                  </div>
                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img
                      src="assets/images/auction/watches/auction-3.jpg"
                      alt="watches"
                    />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a>
                </div>
                <div className="auction-content">
                  <h6 className="title">
                    <a href="product-details.html">Lady’s Retro Diamond</a>
                  </h6>
                  <div className="bid-area">
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-money" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Buy Now</div>
                        <div className="amount">$5,00.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-area">
                    <div className="countdown">
                      <div id="bid_counter22" />
                    </div>
                    <span className="total-bids">30 Bids</span>
                  </div>
                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============= Watches Auction Section Ends Here =============*/}
      {/*============= Popular Auction Section Starts Here =============*/}
      <section className="popular-auction padding-top pos-rel">
        <div
          className="popular-bg bg_img"
          data-background="assets/images/auction/popular/popular-bg.png"
        />
        <div className="container">
          <div className="section-header cl-white">
            <span className="cate">Closing Within 24 Hours</span>
            <h2 className="title">Popular Auctions</h2>
            <p>
              Bid and win great deals,Our auction process is simple, efficient,
              and transparent.
            </p>
          </div>
          <div className="popular-auction-wrapper">
            <div className="row justify-content-center mb-30-none">
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/images/auction/popular/auction-1.jpg"
                        alt="popular"
                      />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Apple Macbook Pro Laptop
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/images/auction/popular/auction-2.jpg"
                        alt="popular"
                      />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        Canon EOS Rebel T6I Digital Camera
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/images/auction/popular/auction-3.jpg"
                        alt="popular"
                      />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        14k Gold Geneve Watch, 24.5g
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/images/auction/popular/auction-4.jpg"
                        alt="popular"
                      />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        14K White Gold 185.60 Grams 5.95 Carats
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/images/auction/popular/auction-5.jpg"
                        alt="popular"
                      />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        2009 Toyota Prius (Medford, NY 11763)
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="auction-item-3">
                  <div className="auction-thumb">
                    <a href="product-details.html">
                      <img
                        src="assets/images/auction/popular/auction-6.jpg"
                        alt="popular"
                      />
                    </a>
                    <a href="#0" className="bid">
                      <i className="flaticon-auction" />
                    </a>
                  </div>
                  <div className="auction-content">
                    <h6 className="title">
                      <a href="product-details.html">
                        .6 Gram Pure Gold Nugget
                      </a>
                    </h6>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bids-area">
                      Total Bids : <span className="total-bids">130 Bids</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============= Popular Auction Section Ends Here =============*/}
      {/*============= Coins and Bullion Auction Section Starts Here =============*/}
      <section className="coins-and-bullion-auction-section padding-bottom padding-top pos-rel pb-max-xl-0">
        <div className="jewelry-bg d-none d-xl-block">
          <img src="assets/images/auction/coins/coin-bg.png" alt="coin" />
        </div>
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              <div className="thumb">
                <img
                  src="assets/images/header-icons/coin-1.png"
                  alt="header-icons"
                />
              </div>
              <div className="title-area">
                <h2 className="title">Coins &amp; Bullion</h2>
                <p>
                  Discover rare, foreign, &amp; ancient coins that are worth
                  collecting
                </p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
          </div>
          <div className="row justify-content-center mb-30-none">
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img
                      src="assets/images/auction/coins/auction-1.jpg"
                      alt="coins"
                    />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a>
                </div>
                <div className="auction-content">
                  <h6 className="title">
                    <a href="product-details.html">Ancient &amp; World Coins</a>
                  </h6>
                  <div className="bid-area">
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-money" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Buy Now</div>
                        <div className="amount">$5,00.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-area">
                    <div className="countdown">
                      <div id="bid_counter17" />
                    </div>
                    <span className="total-bids">30 Bids</span>
                  </div>
                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img
                      src="assets/images/auction/coins/auction-2.jpg"
                      alt="coins"
                    />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a>
                </div>
                <div className="auction-content">
                  <h6 className="title">
                    <a href="product-details.html">2018 Hyundai Sonata</a>
                  </h6>
                  <div className="bid-area">
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-money" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Buy Now</div>
                        <div className="amount">$5,00.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-area">
                    <div className="countdown">
                      <div id="bid_counter18" />
                    </div>
                    <span className="total-bids">30 Bids</span>
                  </div>
                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4">
              <div className="auction-item-2">
                <div className="auction-thumb">
                  <a href="product-details.html">
                    <img
                      src="assets/images/auction/coins/auction-3.jpg"
                      alt="coins"
                    />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a>
                </div>
                <div className="auction-content">
                  <h6 className="title">
                    <a href="product-details.html">2018 Hyundai Sonata</a>
                  </h6>
                  <div className="bid-area">
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-auction" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Current Bid</div>
                        <div className="amount">$876.00</div>
                      </div>
                    </div>
                    <div className="bid-amount">
                      <div className="icon">
                        <i className="flaticon-money" />
                      </div>
                      <div className="amount-content">
                        <div className="current">Buy Now</div>
                        <div className="amount">$5,00.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-area">
                    <div className="countdown">
                      <div id="bid_counter19" />
                    </div>
                    <span className="total-bids">30 Bids</span>
                  </div>
                  <div className="text-center">
                    <a href="#0" className="custom-button">
                      Submit a bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============= Coins and Bullion Auction Section Ends Here =============*/}
      {/*============= Real Estate Section Starts Here =============*/}
      <section className="real-estate-auction padding-top padding-bottom pos-rel oh">
        <div className="car-bg">
          <img
            src="assets/images/auction/realstate/real-bg.png"
            alt="realstate"
          />
        </div>
        <div className="container">
          <div className="section-header-3">
            <div className="left">
              <div className="thumb">
                <img
                  src="assets/images/header-icons/coin-1.png"
                  alt="header-icons"
                />
              </div>
              <div className="title-area">
                <h2 className="title">Real Estate</h2>
                <p>
                  Find auctions for Homes, Condos, Residential &amp; Commercial
                  Properties.
                </p>
              </div>
            </div>
            <a href="#0" className="normal-button">
              View All
            </a>
          </div>
          <div className="auction-slider-4 owl-theme owl-carousel">
            <div className="auction-item-4">
              <div className="auction-thumb">
                <a href="product-details.html">
                  <img
                    src="assets/images/auction/realstate/auction-1.png"
                    alt="realstate"
                  />
                </a>
                <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a>
              </div>
              <div className="auction-content">
                <h4 className="title">
                  <a href="product-details.html">
                    Brand New Apartments In Esenyurt, Istanbul
                  </a>
                </h4>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter30" />
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
            <div className="auction-item-4">
              <div className="auction-thumb">
                <a href="product-details.html">
                  <img
                    src="assets/images/auction/realstate/auction-1.png"
                    alt="realstate"
                  />
                </a>
                <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a>
              </div>
              <div className="auction-content">
                <h4 className="title">
                  <a href="product-details.html">
                    Brand New Apartments In Esenyurt, Istanbul
                  </a>
                </h4>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter31" />
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
            <div className="auction-item-4">
              <div className="auction-thumb">
                <a href="product-details.html">
                  <img
                    src="assets/images/auction/realstate/auction-1.png"
                    alt="realstate"
                  />
                </a>
                <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a>
              </div>
              <div className="auction-content">
                <h4 className="title">
                  <a href="product-details.html">
                    Brand New Apartments In Esenyurt, Istanbul
                  </a>
                </h4>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter32" />
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
            <div className="auction-item-4">
              <div className="auction-thumb">
                <a href="product-details.html">
                  <img
                    src="assets/images/auction/realstate/auction-1.png"
                    alt="realstate"
                  />
                </a>
                <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a>
              </div>
              <div className="auction-content">
                <h4 className="title">
                  <a href="product-details.html">
                    Brand New Apartments In Esenyurt, Istanbul
                  </a>
                </h4>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter33" />
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
            <div className="auction-item-4">
              <div className="auction-thumb">
                <a href="product-details.html">
                  <img
                    src="assets/images/auction/realstate/auction-1.png"
                    alt="realstate"
                  />
                </a>
                <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a>
              </div>
              <div className="auction-content">
                <h4 className="title">
                  <a href="product-details.html">
                    Brand New Apartments In Esenyurt, Istanbul
                  </a>
                </h4>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter34" />
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-nav real-style ml-auto">
            <a href="#0" className="real-prev">
              <i className="flaticon-left-arrow" />
            </a>
            <div className="pagination" />
            <a href="#0" className="real-next active">
              <i className="flaticon-right-arrow" />
            </a>
          </div>
        </div>
      </section>
      {/*============= Real Estate Section Starts Here =============*/}
      {/*============= Art Auction Section Starts Here =============*/}
      <section className="art-and-electronics-auction-section padding-top">
        <div className="container">
          <div className="row justify-content-center mb--50">
            <div className="col-xl-6 col-lg-8 mb-50">
              <div className="section-header-2">
                <div className="left">
                  <div className="thumb">
                    <img
                      src="assets/images/header-icons/camera-1.png"
                      alt="header-icons"
                    />
                  </div>
                  <h2 className="title">Electronics</h2>
                </div>
                <div className="slider-nav">
                  <a href="#0" className="electro-prev">
                    <i className="flaticon-left-arrow" />
                  </a>
                  <a href="#0" className="electro-next active">
                    <i className="flaticon-right-arrow" />
                  </a>
                </div>
              </div>
              <div className="auction-slider-1 owl-carousel owl-theme  mb-30-none">
                <div className="slide-item">
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/electronics/auction-1.jpg"
                          alt="electronics"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          Magnifying Glasses, Jewelry Loupe odit qui corporis
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter1" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/electronics/auction-2.jpg"
                          alt="electronics"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          Surveillance WiFi Exterieur, 1080P Camera
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter2" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/electronics/auction-3.jpg"
                          alt="electronics"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          WiFi Doorbell Camera for Apartments
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter3" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/electronics/auction-4.jpg"
                          alt="electronics"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          GPD Pocket 2 Ultrabook 7" inch
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter4" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-item">
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/electronics/auction-1.jpg"
                          alt="electronics"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          Magnifying Glasses, Jewelry Loupe odit qui corporis
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter5" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/electronics/auction-2.jpg"
                          alt="electronics"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          Surveillance WiFi Exterieur, 1080P Camera
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter6" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/electronics/auction-3.jpg"
                          alt="electronics"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          WiFi Doorbell Camera for Apartments
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter7" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/electronics/auction-4.jpg"
                          alt="electronics"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          GPD Pocket 2 Ultrabook 7" inch
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter8" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 mb-50">
              <div className="section-header-2">
                <div className="left">
                  <div className="thumb">
                    <img
                      src="assets/images/header-icons/art-1.png"
                      alt="header-icons"
                    />
                  </div>
                  <h2 className="title">Art</h2>
                </div>
                <div className="slider-nav">
                  <a href="#0" className="art-prev">
                    <i className="flaticon-left-arrow" />
                  </a>
                  <a href="#0" className="art-next active">
                    <i className="flaticon-right-arrow" />
                  </a>
                </div>
              </div>
              <div className="auction-slider-2 owl-carousel owl-theme mb-30-none">
                <div className="slide-item">
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/art/auction-1.jpg"
                          alt="art"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          Magnifying Glasses, Jewelry Loupe odit qui corporis
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter9" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/art/auction-2.jpg"
                          alt="art"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          Surveillance WiFi Exterieur, 1080P Camera
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter10" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/art/auction-3.jpg"
                          alt="art"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          WiFi Doorbell Camera for Apartments
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter11" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/art/auction-4.jpg"
                          alt="art"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          GPD Pocket 2 Ultrabook 7" inch
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter12" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-item">
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/art/auction-1.jpg"
                          alt="art"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          Magnifying Glasses, Jewelry Loupe odit qui corporis
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter13" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/art/auction-2.jpg"
                          alt="art"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          Surveillance WiFi Exterieur, 1080P Camera
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter14" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/art/auction-3.jpg"
                          alt="art"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          WiFi Doorbell Camera for Apartments
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter15" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className="auction-item-1">
                    <div className="auction-thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/images/auction/art/auction-4.jpg"
                          alt="art"
                        />
                      </a>
                      <a href="#0" className="rating">
                        <i className="far fa-star" />
                      </a>
                      <a href="#0" className="bid">
                        <i className="flaticon-auction" />
                      </a>
                    </div>
                    <div className="auction-content">
                      <h6 className="title">
                        <a href="product-details.html">
                          GPD Pocket 2 Ultrabook 7" inch
                        </a>
                      </h6>
                      <div className="bid-amount">
                        <div className="icon">
                          <i className="flaticon-auction" />
                        </div>
                        <div className="amount-content">
                          <div className="current">Current Bid</div>
                          <div className="amount">$876.00</div>
                        </div>
                      </div>
                      <div className="countdown-area">
                        <div className="countdown">
                          <div id="bid_counter16" />
                        </div>
                        <span className="total-bids">30 Bids</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============= Art Auction Section Ends Here =============*/}
      {/*============= How Section Starts Here =============*/}
      <section className="how-section padding-top">
        <div className="container">
          <div className="how-wrapper section-bg">
            <div className="section-header text-lg-left">
              <h2 className="title">How it works</h2>
              <p>Easy 3 steps to win</p>
            </div>
            <div className="row justify-content-center mb--40">
              <div className="col-md-6 col-lg-4">
                <div className="how-item">
                  <div className="how-thumb">
                    <img src="assets/images/how/how1.png" alt="how" />
                  </div>
                  <div className="how-content">
                    <h4 className="title">Sign Up</h4>
                    <p>No Credit Card Required</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="how-item">
                  <div className="how-thumb">
                    <img src="assets/images/how/how2.png" alt="how" />
                  </div>
                  <div className="how-content">
                    <h4 className="title">Bid</h4>
                    <p>Bidding is free Only pay if you win</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="how-item">
                  <div className="how-thumb">
                    <img src="assets/images/how/how3.png" alt="how" />
                  </div>
                  <div className="how-content">
                    <h4 className="title">Win</h4>
                    <p>Fun - Excitement - Great deals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============= How Section Ends Here =============*/}
      {/*============= Client Section Starts Here =============*/}
      <section className="client-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header">
            <h2 className="title">Don’t just take our word for it!</h2>
            <p>
              Our hard work is paying off. Great reviews from amazing customers.
            </p>
          </div>
          <div className="m--15">
            <div className="client-slider owl-theme owl-carousel">
              <div className="client-item">
                <div className="client-content">
                  <p>
                    I can't stop bidding! It's a great way to spend some time
                    and I want everything on Sbidu.
                  </p>
                </div>
                <div className="client-author">
                  <div className="thumb">
                    <a href="#0">
                      <img
                        src="assets/images/client/client01.png"
                        alt="client"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="#0">Alexis Moore</a>
                    </h6>
                    <div className="ratings">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="client-item">
                <div className="client-content">
                  <p>
                    I came I saw I won. Love what I have won, and will try to
                    win something else.
                  </p>
                </div>
                <div className="client-author">
                  <div className="thumb">
                    <a href="#0">
                      <img
                        src="assets/images/client/client02.png"
                        alt="client"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="#0">Darin Griffin</a>
                    </h6>
                    <div className="ratings">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="client-item">
                <div className="client-content">
                  <p>
                    This was my first time, but it was exciting. I will try it
                    again. Thank you so much.
                  </p>
                </div>
                <div className="client-author">
                  <div className="thumb">
                    <a href="#0">
                      <img
                        src="assets/images/client/client03.png"
                        alt="client"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="#0">Tom Powell</a>
                    </h6>
                    <div className="ratings">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============= Client Section Ends Here =============*/}
      {/*============= Footer Section Starts Here =============*/}
      <footer
        className="bg_img padding-top oh"
        data-background="assets/images/footer/footer-bg.jpg"
      >
        <div className="footer-top-shape">
          <img src="assets/css/img/footer-top-shape.png" alt="css" />
        </div>
        <div className="anime-wrapper">
          <div className="anime-1 plus-anime">
            <img src="assets/images/footer/p1.png" alt="footer" />
          </div>
          <div className="anime-2 plus-anime">
            <img src="assets/images/footer/p2.png" alt="footer" />
          </div>
          <div className="anime-3 plus-anime">
            <img src="assets/images/footer/p3.png" alt="footer" />
          </div>
          <div className="anime-5 zigzag">
            <img src="assets/images/footer/c2.png" alt="footer" />
          </div>
          <div className="anime-6 zigzag">
            <img src="assets/images/footer/c3.png" alt="footer" />
          </div>
          <div className="anime-7 zigzag">
            <img src="assets/images/footer/c4.png" alt="footer" />
          </div>
        </div>
        <div className="newslater-wrapper">
          <div className="container">
            <div className="newslater-area">
              <div className="newslater-thumb">
                <img src="assets/images/footer/newslater.png" alt="footer" />
              </div>
              <div className="newslater-content">
                <div className="section-header left-style mb-low">
                  <h5 className="cate">Subscribe to Sbidu</h5>
                  <h3 className="title">To Get Exclusive Benefits</h3>
                </div>
                <form className="subscribe-form">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    name="email"
                  />
                  <button type="submit" className="custom-button">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top padding-bottom padding-top">
          <div className="container">
            <div className="row mb--60">
              <div className="col-sm-6 col-lg-3">
                <div className="footer-widget widget-links">
                  <h5 className="title">Auction Categories</h5>
                  <ul className="links-list">
                    <li>
                      <a href="#0">Ending Now</a>
                    </li>
                    <li>
                      <a href="#0">Vehicles</a>
                    </li>
                    <li>
                      <a href="#0">Watches</a>
                    </li>
                    <li>
                      <a href="#0">Electronics</a>
                    </li>
                    <li>
                      <a href="#0">Real Estate</a>
                    </li>
                    <li>
                      <a href="#0">Jewelry</a>
                    </li>
                    <li>
                      <a href="#0">Art</a>
                    </li>
                    <li>
                      <a href="#0">Sports &amp; Outdoor</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="footer-widget widget-links">
                  <h5 className="title">About Us</h5>
                  <ul className="links-list">
                    <li>
                      <a href="#0">About Sbidu</a>
                    </li>
                    <li>
                      <a href="#0">Help</a>
                    </li>
                    <li>
                      <a href="#0">Affiliates</a>
                    </li>
                    <li>
                      <a href="#0">Jobs</a>
                    </li>
                    <li>
                      <a href="#0">Press</a>
                    </li>
                    <li>
                      <a href="#0">Our blog</a>
                    </li>
                    <li>
                      <a href="#0">Collectors' portal</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="footer-widget widget-links">
                  <h5 className="title">We're Here to Help</h5>
                  <ul className="links-list">
                    <li>
                      <a href="#0">Your Account</a>
                    </li>
                    <li>
                      <a href="#0">Safe and Secure</a>
                    </li>
                    <li>
                      <a href="#0">Shipping Information</a>
                    </li>
                    <li>
                      <a href="#0">Contact Us</a>
                    </li>
                    <li>
                      <a href="#0">Help &amp; FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="footer-widget widget-follow">
                  <h5 className="title">Follow Us</h5>
                  <ul className="links-list">
                    <li>
                      <a href="#0">
                        <i className="fas fa-phone-alt" />
                        (646) 663-4575
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fas fa-blender-phone" />
                        (646) 968-0608
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fas fa-envelope-open-text" />
                        <span
                          className="__cf_email__"
                          data-cfemail="f8909d9488b89d969f978c909d959dd69b9795"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fas fa-location-arrow" />
                        1201 Broadway Suite
                      </a>
                    </li>
                  </ul>
                  <ul className="social-icons">
                    <li>
                      <a href="#0" className="active">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright-area">
              <div className="footer-bottom-wrapper">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo/footer-logo.png" alt="logo" />
                  </a>
                </div>
                <ul className="gateway-area">
                  <li>
                    <a href="#0">
                      <img src="assets/images/footer/paypal.png" alt="footer" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src="assets/images/footer/visa.png" alt="footer" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img
                        src="assets/images/footer/discover.png"
                        alt="footer"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img
                        src="assets/images/footer/mastercard.png"
                        alt="footer"
                      />
                    </a>
                  </li>
                </ul>
                <div className="copyright">
                  <p>
                    © Copyright 2021 | <a href="#0">Sbidu</a> By{" "}
                    <a href="#0">Uiaxis</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*============= Footer Section Ends Here =============*/}
      {/* Mirrored from pixner.net/sbidu/main/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 12 Apr 2022 09:44:14 GMT */}
    </>
  );
}

export default ProductAuction;

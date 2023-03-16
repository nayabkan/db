import React from "react";
import "../../css/auction.css";
import upEvent from "../../images/auction/up-event-3.jpg";
import upEvent2 from "../../images/auction/up-event-2.jpg";
import sponsor from "../../images/auction/bg/sponsor-5-bg.jpg";
import footer from "../../images/auction/bg/footer-5-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Auction() {
  return (
    <>
      <div className="main-wrapper">
        {/* Preloader start */}

        {/* Preloader End */}
        {/* Header Start */}
        <Header />
        {/* Header End */}
        {/* Mini Cart Start */}
        <div className="off-canvas">
          <div className="icon-close" />
          {/* Mini Cart Box Start */}
          <div className="meeta-mini-cart-box">
            <div className="mini-cart-items">
              <div className="mini-cart-item">
                <div className="mini-cart-item-image">
                  <a href="#">
                    <img
                      src={require("../../images/auction/cart/cart-1.jpg")}
                      alt="Cart"
                    />
                  </a>
                </div>
                <div className="mini-cart-item-content">
                  <h4 className="mini-cart-title">
                    <a href="#">
                      Virtual Event with Protected Content and Hidden Livestream{" "}
                    </a>
                  </h4>
                  <p className="mini-cart-quantity">1 × $19.99</p>
                </div>
                <button className="btn-close" />
              </div>
              <div className="mini-cart-item">
                <div className="mini-cart-item-image">
                  <a href="#">
                    <img
                      src={require("../../images/auction/cart/cart-2.jpg")}
                      alt="Cart"
                    />
                  </a>
                </div>
                <div className="mini-cart-item-content">
                  <h4 className="mini-cart-title">
                    <a href="#">
                      Virtual Event with Protected Content and Hidden Livestream{" "}
                    </a>
                  </h4>
                  <p className="mini-cart-quantity">1 × $19.99</p>
                </div>
                <button className="btn-close" />
              </div>
              <div className="mini-cart-item">
                <div className="mini-cart-item-image">
                  <a href="#">
                    <img
                      src={require("../../images/auction/cart/cart-3.jpg")}
                      alt="Cart"
                    />
                  </a>
                </div>
                <div className="mini-cart-item-content">
                  <h4 className="mini-cart-title">
                    <a href="#">
                      Virtual Event with Protected Content and Hidden Livestream{" "}
                    </a>
                  </h4>
                  <p className="mini-cart-quantity">1 × $19.99</p>
                </div>
                <button className="btn-close" />
              </div>
            </div>
            <div className="mini-cart-sub-total">
              <p>
                <strong>Subtotal:</strong>{" "}
                <span className="mini-cart-amount">$99.97</span>
              </p>
            </div>
            <div className="mini-cart-sub-btn">
              <a className="btn btn-primary" href="#">
                View cart
              </a>
              <a className="btn btn-white" href="#">
                Checkout
              </a>
            </div>
          </div>
          {/* Mini Cart Box End */}
        </div>
        {/* Mini Cart End */}
        {/* Offcanvas Start*/}

        {/* Offcanvas End */}
        {/* Slider Section Start  */}
        <div
          className="meeta-hero-section-5 d-flex align-items-center"
          style={{ backgroundImage: "url(assets/images/bg/hero-5-bg.jpg)" }}
        >
          <img
            className="image-1"
            src="assets/images/hero-5-img-1.png"
            alt=""
          />
          <img
            className="image-2"
            src="assets/images/hero-5-img-2.png"
            alt=""
          />
          <img
            className="shape-1"
            src={require("../../images/auction/shape/hero-5-shape-1.png")}
            alt=""
          />
          <img
            className="shape-2"
            src={require("../../images/auction/shape/hero-5-shape-2.png")}
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content">
                  <div className="title-wrap text-center">
                    <h2
                      className="title"
                      data-aos-delay={700}
                      data-aos="fade-up"
                      style={{ display: "block" }}
                    >
                      Find event
                    </h2>
                    <h3
                      className="sub-title"
                      data-aos-delay={800}
                      data-aos="fade-up"
                    >
                      Awesome event, conference &amp; fest around you
                    </h3>
                  </div>
                  <div
                    className="search-form-wrap"
                    data-aos-delay={900}
                    data-aos="fade-up"
                  >
                    <div className="search-form-inner">
                      <form className="search-form" action="#">
                        <div className="single-form">
                          <label className="form-label">
                            <i className="fas fa-search" /> Event Title
                          </label>
                          <input type="text" placeholder="Type Event Name" />
                        </div>
                        <div className="single-form">
                          <label className="form-label">
                            <i className="fas fa-list-alt" /> Category
                          </label>
                          <select
                            style={{
                              border: "none",
                              color: "#b5b5b5",
                            }}
                          >
                            <option value={0}>Select Category</option>
                            <option value={1}>Arts &amp; Crafts</option>
                            <option value={2}>Business</option>
                            <option value={3}>Education </option>
                            <option value={4}>Science </option>
                            <option value={5}>Sports &amp; Travel</option>
                          </select>
                        </div>
                        <div className="single-form">
                          <label className="form-label">
                            <i className="fas fa-map" /> Location
                          </label>
                          <select
                            style={{
                              border: "none",
                              color: "#b5b5b5",
                            }}
                          >
                            <option value={0}>Select Location</option>
                            <option value={1}>Paris, FR</option>
                            <option value={2}>Melbourne, AUS</option>
                            <option value={3}>New York, NY</option>
                            <option value={4}>IAC Building, US</option>
                            <option value={5}>Moscow, RA</option>
                          </select>
                        </div>
                        <div className="form-btn">
                          <button className="search-btn">
                            <i className="flaticon-loupe" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="popular-tag"
                    data-aos-delay={1000}
                    data-aos="fade-up"
                  >
                    <span className="label">Popular:</span>
                    <ul>
                      <li>
                        <a href="#">Education</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Art</a>
                      </li>
                      <li>
                        <a href="#">Development</a>
                      </li>
                      <li>
                        <a href="#">Sport</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Section End */}
        {/* Category Section Start */}
        <div className="meeta-category-section section-padding-02">
          <div className="container">
            <div className="meeta-category-wrap">
              {/* Section Title Start */}
              <div className="meeta-section-title section-title-4 text-center">
                <h2 className="main-title">
                  Browse by <span className="title-shape-1">Category</span>
                </h2>
              </div>
              {/* Section Title End */}
              <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-sm-2">
                <div className="col" style={{ width: "20%" }}>
                  {/* Category Item Start */}
                  <div className="category-item">
                    <a href="#">
                      <img
                        src={require("../../images/auction/cat-1.png")}
                        alt=""
                      />
                      <span>Food Fest</span>
                    </a>
                  </div>
                  {/* Category Item End */}
                </div>
                <div className="col" style={{ width: "20%" }}>
                  {/* Category Item Start */}
                  <div className="category-item cat-1">
                    <a href="#">
                      <img
                        src={require("../../images/auction/cat-2.png")}
                        alt=""
                      />
                      <span>Concert</span>
                    </a>
                  </div>
                  {/* Category Item End */}
                </div>
                <div className="col" style={{ width: "20%" }}>
                  {/* Category Item Start */}
                  <div className="category-item cat-2">
                    <a href="#">
                      <img
                        src={require("../../images/auction/cat-3.png")}
                        alt=""
                      />
                      <span>Movie Fest</span>
                    </a>
                  </div>
                  {/* Category Item End */}
                </div>
                <div className="col" style={{ width: "20%" }}>
                  {/* Category Item Start */}
                  <div className="category-item cat-3">
                    <a href="#">
                      <img
                        src={require("../../images/auction/cat-4.png")}
                        alt=""
                      />
                      <span>Magic Show</span>
                    </a>
                  </div>
                  {/* Category Item End */}
                </div>
                <div className="col" style={{ width: "20%" }}>
                  {/* Category Item Start */}
                  <div className="category-item cat-4">
                    <a href="#">
                      <img
                        src={require("../../images/auction/cat-5.png")}
                        alt=""
                      />
                      <span>Art &amp; Craft</span>
                    </a>
                  </div>
                  {/* Category Item End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Category Section End */}
        {/* Trending Section Start */}
        <div className="meeta-trending-section section-padding">
          <div
            className="trending-shape-1"
            data-aos-delay={700}
            data-aos="zoom-in"
          />
          <img
            className="trending-shape-2"
            src={require("../../images/auction/shape/trend-shape-2.png")}
            alt=""
          />
          <img
            className="trending-shape-3"
            src={require("../../images/auction/shape/trend-shape-3.png")}
            alt=""
          />
          <img
            className="trending-shape-4"
            src={require("../../images/auction/shape/trend-shape-4.png")}
            alt=""
          />
          <img
            className="trending-shape-5"
            src={require("../../images/auction/shape/trend-shape-5.png")}
            alt=""
          />
          <div className="container">
            <div className="meeta-trending-wrap">
              {/* Section Title Start */}
              <div className="meeta-section-title section-title-4 text-center">
                <h2 className="main-title">
                  Trending By <span className="title-shape-2">Cities</span>
                </h2>
              </div>
              {/* Section Title End */}
              <div className="meeta-trending-content-wrap meeta-trending-active slider-bullet">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={5}
                      centeredSlides={true}
                      pagination={true}
                      loop={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          {/* Trending Item Start */}
                          <div className="trending-item">
                            <div className="trending-thumb">
                              <img
                                src={require("../../images/auction/trending/trend-1.jpg")}
                                alt=""
                              />
                              <div className="trending-city">
                                <span className="city">Paris</span>
                              </div>
                              <div className="trending-content">
                                <h3 className="title">
                                  <a href="#">Food Festival in summer night</a>
                                </h3>
                                <span className="date">
                                  23 Jun 2022<span></span>
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Trending Item End */}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          {/* Trending Item Start */}
                          <div className="trending-item">
                            <div className="trending-thumb">
                              <img
                                src={require("../../images/auction/trending/trend-2.jpg")}
                                alt=""
                              />
                              <div className="trending-city">
                                <span className="city">New York</span>
                              </div>
                              <div className="trending-content">
                                <h3 className="title">
                                  <a href="#">
                                    Cultural summit <br /> 2022
                                  </a>
                                </h3>
                                <span className="date">
                                  23 Jun 2022<span></span>
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Trending Item End */}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          {/* Trending Item Start */}
                          <div className="trending-item">
                            <div className="trending-thumb">
                              <img
                                src={require("../../images/auction/trending/trend-3.jpg")}
                                alt=""
                              />
                              <div className="trending-city">
                                <span className="city">Melbourne</span>
                              </div>
                              <div className="trending-content">
                                <h3 className="title">
                                  <a href="#">Cycling fest summer 2022</a>
                                </h3>
                                <span className="date">
                                  23 Jun 2022<span></span>
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Trending Item End */}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          {/* Trending Item Start */}
                          <div className="trending-item">
                            <div className="trending-thumb">
                              <img
                                src={require("../../images/auction/trending/trend-4.jpg")}
                                alt=""
                              />
                              <div className="trending-city">
                                <span className="city">Moscow</span>
                              </div>
                              <div className="trending-content">
                                <h3 className="title">
                                  <a href="#">
                                    Concert for charity for children{" "}
                                  </a>
                                </h3>
                                <span className="date">
                                  23 Jun 2022<span></span>
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Trending Item End */}
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  {/* Add Pagination */}
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trending Section End */}
        {/* Featured Section Start */}
        <div className="meeta-featured-section section-padding">
          <div className="shape-1" />
          <div className="shape-2" data-aos-delay={700} data-aos="zoom-in" />
          <div className="container">
            <div className="meeta-featured-wrap">
              {/* Section Title Start */}
              <div className="meeta-section-title section-title-4 text-center">
                <h2 className="main-title">
                  <span className="title-shape-1">Featured </span>Events
                </h2>
              </div>
              {/* Section Title End */}
              <div className="meeta-event-featured">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    {/* Single Item Start */}
                    <div className="single-item">
                      <div className="featured-img">
                        <a href="event-single.html">
                          <img
                            src={require("../../images/auction/featured/featured-1.jpg")}
                            alt=""
                          />
                        </a>
                        <div className="top-meta">
                          <span className="date">
                            <span>15</span>Sept
                          </span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <span className="category color-4">
                          Art &amp; Craft
                        </span>
                        <h3 className="title">
                          <a href="event-single.html">
                            Designers, Web developers &amp; Digital artists
                          </a>
                        </h3>
                        <span className="meta">
                          <i className="fas fa-map-marker-alt" /> Sand diego,
                          Canada
                        </span>
                      </div>
                    </div>
                    {/* Single Item End */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    {/* Single Item Start */}
                    <div className="single-item">
                      <div className="featured-img">
                        <a href="event-single.html">
                          <img
                            src={require("../../images/auction/featured/featured-9.jpg")}
                            alt=""
                          />
                        </a>
                        <div className="top-meta">
                          <span className="date">
                            <span>25</span>Sept
                          </span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <span className="category color-1">
                          Art &amp; Craft
                        </span>
                        <h3 className="title">
                          <a href="event-single.html">
                            Designers, Web developers &amp; Digital artists
                          </a>
                        </h3>
                        <span className="meta">
                          <i className="fas fa-map-marker-alt" /> Sand diego,
                          Canada
                        </span>
                      </div>
                    </div>
                    {/* Single Item End */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    {/* Single Item Start */}
                    <div className="single-item">
                      <div className="featured-img">
                        <a href="event-single.html">
                          <img
                            src={require("../../images/auction/featured/featured-10.jpg")}
                            alt=""
                          />
                        </a>
                        <div className="top-meta">
                          <span className="date">
                            <span>30</span>Sept
                          </span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <span className="category color-2">
                          Art &amp; Craft
                        </span>
                        <h3 className="title">
                          <a href="event-single.html">
                            Designers, Web developers &amp; Digital artists
                          </a>
                        </h3>
                        <span className="meta">
                          <i className="fas fa-map-marker-alt" /> Sand diego,
                          Canada
                        </span>
                      </div>
                    </div>
                    {/* Single Item End */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    {/* Single Item Start */}
                    <div className="single-item">
                      <div className="featured-img">
                        <a href="event-single.html">
                          <img
                            src={require("../../images/auction/featured/featured-11.jpg")}
                            alt=""
                          />
                        </a>
                        <div className="top-meta">
                          <span className="date">
                            <span>25</span>Sept
                          </span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <span className="category color-3">
                          Art &amp; Craft
                        </span>
                        <h3 className="title">
                          <a href="event-single.html">
                            Designers, Web developers &amp; Digital artists
                          </a>
                        </h3>
                        <span className="meta">
                          <i className="fas fa-map-marker-alt" /> Sand diego,
                          Canada
                        </span>
                      </div>
                    </div>
                    {/* Single Item End */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    {/* Single Item Start */}
                    <div className="single-item">
                      <div className="featured-img">
                        <a href="event-single.html">
                          <img
                            src={require("../../images/auction/featured/featured-5.jpg")}
                            alt=""
                          />
                        </a>
                        <div className="top-meta">
                          <span className="date">
                            <span>25</span>Sept
                          </span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <span className="category color-4">
                          Art &amp; Craft
                        </span>
                        <h3 className="title">
                          <a href="event-single.html">
                            Designers, Web developers &amp; Digital artists
                          </a>
                        </h3>
                        <span className="meta">
                          <i className="fas fa-map-marker-alt" /> Sand diego,
                          Canada
                        </span>
                      </div>
                    </div>
                    {/* Single Item End */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    {/* Single Item Start */}
                    <div className="single-item">
                      <div className="featured-img">
                        <a href="event-single.html">
                          <img
                            src={require("../../images/auction/featured/featured-6.jpg")}
                            alt=""
                          />
                        </a>
                        <div className="top-meta">
                          <span className="date">
                            <span>23</span>Sept
                          </span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <span className="category color-1">
                          Art &amp; Craft
                        </span>
                        <h3 className="title">
                          <a href="event-single.html">
                            Designers, Web developers &amp; Digital artists
                          </a>
                        </h3>
                        <span className="meta">
                          <i className="fas fa-map-marker-alt" /> Sand diego,
                          Canada
                        </span>
                      </div>
                    </div>
                    {/* Single Item End */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    {/* Single Item Start */}
                    <div className="single-item">
                      <div className="featured-img">
                        <a href="event-single.html">
                          <img
                            src={require("../../images/auction/featured/featured-7.jpg")}
                            alt=""
                          />
                        </a>
                        <div className="top-meta">
                          <span className="date">
                            <span>25</span>Sept
                          </span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <span className="category color-2">
                          Art &amp; Craft
                        </span>
                        <h3 className="title">
                          <a href="event-single.html">
                            Designers, Web developers &amp; Digital artists
                          </a>
                        </h3>
                        <span className="meta">
                          <i className="fas fa-map-marker-alt" /> Sand diego,
                          Canada
                        </span>
                      </div>
                    </div>
                    {/* Single Item End */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    {/* Single Item Start */}
                    <div className="single-item">
                      <div className="featured-img">
                        <a href="event-single.html">
                          <img
                            src={require("../../images/auction/featured/featured-8.jpg")}
                            alt=""
                          />
                        </a>
                        <div className="top-meta">
                          <span className="date">
                            <span>27</span>Sept
                          </span>
                        </div>
                      </div>
                      <div className="featured-content">
                        <span className="category color-3">
                          Art &amp; Craft
                        </span>
                        <h3 className="title">
                          <a href="event-single.html">
                            Designers, Web developers &amp; Digital artists
                          </a>
                        </h3>
                        <span className="meta">
                          <i className="fas fa-map-marker-alt" /> Sand diego,
                          Canada
                        </span>
                      </div>
                    </div>
                    {/* Single Item End */}
                  </div>
                </div>
              </div>
              <div className="featured-more text-center">
                <a className="btn-2" href="event-single.html">
                  More Featured Events
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Featured Section End */}
        {/* Project Start */}
        <div className="meeta-event-project section-padding">
          <div className="container">
            {/* Section Title Start */}
            <div className="meeta-section-title section-title-4 text-center">
              <h2 className="main-title">
                <span className="title-shape-1">Upcoming</span> Events
              </h2>
            </div>
            {/* Section Title End */}
          </div>
          {/* Project Wrap Start */}
          <div className="meeta-event-project-wrap event-project-active slider-bullet">
            <div className="swiper">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={2}
                  centeredSlides={true}
                  pagination={true}
                  loop={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                    <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="project-item">
                      <div
                        className="event-project-thumb"
                        style={{
                          backgroundImage: `url('${upEvent}')`,
                        }}
                      ></div>
                      <div className="event-project-content">
                        <h3 className="title">
                          Mindfull App Pi Meets Soundproof Booth 2021 summer
                        </h3>
                        <div className="event-meta">
                          <span>
                            <i className="far fa-clock" /> 29 July - 30 July
                          </span>
                          <span>
                            <i className="fas fa-map-marker-alt" /> Sand diego,
                            Canada
                          </span>
                        </div>
                        <div className="meeta-register-countdown register-countdown-4 register-countdown-5">
                          <div className="meeta-register-countdown-wrapper">
                            {/* Countdown Start */}
                            <div
                              className="meeta-countdown countdown"
                              data-countdown="2024/10/24"
                              data-format="short"
                            >
                              <div className="single-countdown">
                                <span className="count countdown__time daysLeft" />
                                <span className="value countdown__time daysText" />
                              </div>
                              <div className="single-countdown">
                                <span className="count countdown__time hoursLeft" />
                                <span className="value countdown__time hoursText" />
                              </div>
                              <div className="single-countdown">
                                <span className="count countdown__time minsLeft" />
                                <span className="value countdown__time minsText" />
                              </div>
                              <div className="single-countdown">
                                <span className="count countdown__time secsLeft" />
                                <span className="value countdown__time secsText" />
                              </div>
                            </div>
                            {/* Countdown End */}
                          </div>
                        </div>
                        <a className="btn-2" href="price.html">
                          Book Your Seat
                        </a>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="project-item">
                      <div
                        className="event-project-thumb"
                        style={{
                          backgroundImage: `url('${upEvent2}')`,
                        }}
                      ></div>
                      <div className="event-project-content">
                        <h3 className="title">
                          Mindfull App Pi Meets Soundproof Booth 2021 summer
                        </h3>
                        <div className="event-meta">
                          <span>
                            <i className="far fa-clock" /> 29 July - 30 July
                          </span>
                          <span>
                            <i className="fas fa-map-marker-alt" /> Sand diego,
                            Canada
                          </span>
                        </div>
                        <div className="meeta-register-countdown register-countdown-4 register-countdown-5">
                          <div className="meeta-register-countdown-wrapper">
                            {/* Countdown Start */}
                            <div
                              className="meeta-countdown countdown"
                              data-countdown="2024/10/24"
                              data-format="short"
                            >
                              <div className="single-countdown">
                                <span className="count countdown__time daysLeft" />
                                <span className="value countdown__time daysText" />
                              </div>
                              <div className="single-countdown">
                                <span className="count countdown__time hoursLeft" />
                                <span className="value countdown__time hoursText" />
                              </div>
                              <div className="single-countdown">
                                <span className="count countdown__time minsLeft" />
                                <span className="value countdown__time minsText" />
                              </div>
                              <div className="single-countdown">
                                <span className="count countdown__time secsLeft" />
                                <span className="value countdown__time secsText" />
                              </div>
                            </div>
                            {/* Countdown End */}
                          </div>
                        </div>
                        <a className="btn-2" href="price.html">
                          Book Your Seat
                        </a>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="project-item">
                      <div
                        className="event-project-thumb"
                        style={{
                          backgroundImage: `url('${upEvent}')`,
                        }}
                      ></div>
                      <div className="event-project-content">
                        <h3 className="title">
                          Mindfull App Pi Meets Soundproof Booth 2021 summer
                        </h3>
                        <div className="event-meta">
                          <span>
                            <i className="far fa-clock" /> 29 July - 30 July
                          </span>
                          <span>
                            <i className="fas fa-map-marker-alt" /> Sand diego,
                            Canada
                          </span>
                        </div>
                        <div className="meeta-register-countdown register-countdown-4 register-countdown-5">
                          <div className="meeta-register-countdown-wrapper">
                            {/* Countdown Start */}
                            <div
                              className="meeta-countdown countdown"
                              data-countdown="2024/10/24"
                              data-format="short"
                            >
                              <div className="single-countdown">
                                <span className="count countdown__time daysLeft" />
                                <span className="value countdown__time daysText" />
                              </div>
                              <div className="single-countdown">
                                <span className="count countdown__time hoursLeft" />
                                <span className="value countdown__time hoursText" />
                              </div>
                              <div className="single-countdown">
                                <span className="count countdown__time minsLeft" />
                                <span className="value countdown__time minsText" />
                              </div>
                              <div className="single-countdown">
                                <span className="count countdown__time secsLeft" />
                                <span className="value countdown__time secsText" />
                              </div>
                            </div>
                            {/* Countdown End */}
                          </div>
                        </div>
                        <a className="btn-2" href="price.html">
                          Book Your Seat
                        </a>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Add Pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
          {/* Project Wrap End */}
        </div>
        {/* Project End */}
        {/* Event Sponsors Start */}
        <div
          className="meeta-event-sponsors-4 meeta-event-sponsors-5 section-padding"
          style={{ backgroundImage: `url('${sponsor}')` }}
        >
          <div className="container">
            {/* Section Title Start */}
            <div className="meeta-section-title section-title-4 text-center">
              <h2 className="main-title">
                Event by <shape className="title-shape-1">Organizer</shape>
              </h2>
            </div>
            {/* Section Title End */}
            {/* Sponsor Start */}
            <div className="meeta-sponsor-wrap">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  {/* Sponsor Box Start */}
                  <div className="meeta-sponsor-item-box sponsor-box-1">
                    <div className="meeta-sponsor-logo sponsor-logo-1">
                      <a href="#">
                        <img
                          src={require("../../images/auction/sponsors-5.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="meeta-sponsor-logo sponsor-logo-2">
                      <a href="#">
                        <img
                          src={require("../../images/auction/sponsors-9.png")}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  {/* Sponsor Box End */}
                </div>
                <div className="col-lg-3 col-sm-6">
                  {/* Sponsor Box Start */}
                  <div className="meeta-sponsor-item-box sponsor-box-2">
                    <div className="meeta-sponsor-logo sponsor-logo-3">
                      <a href="#">
                        <img
                          src={require("../../images/auction/sponsors-7.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="meeta-sponsor-logo sponsor-logo-4">
                      <a href="#">
                        <img
                          src={require("../../images/auction/sponsors-11.png")}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  {/* Sponsor Box End */}
                </div>
                <div className="col-lg-3 col-sm-6">
                  {/* Sponsor Box Start */}
                  <div className="meeta-sponsor-item-box sponsor-box-3">
                    <div className="meeta-sponsor-logo sponsor-logo-5">
                      <a href="#">
                        <img
                          src={require("../../images/auction/sponsors-6.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="meeta-sponsor-logo sponsor-logo-6">
                      <a href="#">
                        <img
                          src={require("../../images/auction/sponsors-10.png")}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  {/* Sponsor Box End */}
                </div>
                <div className="col-lg-3 col-sm-6">
                  {/* Sponsor Box Start */}
                  <div className="meeta-sponsor-item-box sponsor-box-4">
                    <div className="meeta-sponsor-logo sponsor-logo-7">
                      <a href="#">
                        <img
                          src={require("../../images/auction/sponsors-8.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="meeta-sponsor-logo sponsor-logo-8">
                      <a href="#">
                        <img
                          src={require("../../images/auction/sponsors-12.png")}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  {/* Sponsor Box End */}
                </div>
              </div>
            </div>
            {/* Sponsor End */}
          </div>
        </div>
        {/* Event Sponsors End */}
        {/* Blog Start */}
        <div className="meeta-blog-3 section-padding">
          <div className="container">
            {/* Section Title Start */}
            <div className="meeta-section-title section-title-4 text-center">
              <h2 className="main-title">
                <span className="title-shape-2">Tips</span> &amp; Articles
              </h2>
            </div>
            {/* Section Title End */}
            <div className="meeta-blog-wrap">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  {/* Single Blog Start */}
                  <div className="single-blog-3">
                    <div className="blog-image">
                      <a href="blog-details.html">
                        <img
                          src={require("../../images/auction/blog/blog-1.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="top-meta">
                        <span className="category color-4">Conference</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="date">Octobor 09, 2022</span>
                      </div>
                      <h3 className="title">
                        <a href="blog-details.html">
                          Registration for opening workshop{" "}
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* Single Blog End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* Single Blog Start */}
                  <div className="single-blog-3">
                    <div className="blog-image">
                      <a href="blog-details.html">
                        <img
                          src={require("../../images/auction/blog/blog-2.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="top-meta">
                        <span className="category color-1">Conference</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="date">Octobor 09, 2022</span>
                      </div>
                      <h3 className="title">
                        <a href="blog-details.html">
                          Registration for opening workshop{" "}
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* Single Blog End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* Single Blog Start */}
                  <div className="single-blog-3">
                    <div className="blog-image">
                      <a href="blog-details.html">
                        <img
                          src={require("../../images/auction/blog/blog-3.jpg")}
                          alt=""
                        />
                      </a>
                      <div className="top-meta">
                        <span className="category color-2">Conference</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="date">Octobor 09, 2022</span>
                      </div>
                      <h3 className="title">
                        <a href="blog-details.html">
                          Registration for opening workshop{" "}
                        </a>
                      </h3>
                    </div>
                  </div>
                  {/* Single Blog End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Newsletter Section Start */}
       
        {/* Newsletter Section End */}
        {/* Footer Start */}
       <Footer />
        {/* Footer End */}
        {/* back to top start */}
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/* back to top end */}
        {/* JS
  ============================================ */}
        {/* Modernizer & jQuery JS */}
        {/* Bootstrap JS */}
        {/* Plugins JS */}
        {/* Main JS */}
        {/* Mirrored from thepixelcurve.com/html/meeta/meeta/index-5.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 11 Apr 2022 13:08:18 GMT */}
      </div>
    </>
  );
}

export default Auction;

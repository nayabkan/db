import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Header() {
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [user, setUser] = useState([]);

  const navigationPrevRef = React.useRef(null)
      const navigationNextRef = React.useRef(null)

  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    axios
      .get("http://globlix.com/admin/api/vendor/user-profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => (console.log(res.data), setUser(res.data)))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://globlix.com/admin/api/user/user-profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => (console.log(res.data), setUser(res.data)))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://globlix.com/admin/api/parentcats")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://globlix.com/admin/api/country")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <p className="welcome-msg">Welcome to Globlix</p>
          </div>
          <div className="header-right">
            {/* <div className="dropdown">
              <a href="#currency">USD</a>
              <div className="dropdown-box">
                <a href="#USD">USD</a>
                <a href="#EUR">EUR</a>
              </div>
            </div> */}
            {/* End of DropDown Menu */}
            {/* <div className="dropdown">
              <a href="#language">
                <img
                  src={require("../../images/flags/eng.png")}
                  alt="ENG Flag"
                  width={14}
                  height={8}
                  className="dropdown-image"
                />{" "}
                ENG
              </a>
              <div className="dropdown-box">
                <a href="#ENG">
                  <img
                    src={require("../../images/flags/eng.png")}
                    alt="ENG Flag"
                    width={14}
                    height={8}
                    className="dropdown-image"
                  />
                  ENG
                </a>
                <a href="#FRA">
                  <img
                    src={require("../../images/flags/fra.png")}
                    alt="FRA Flag"
                    width={14}
                    height={8}
                    className="dropdown-image"
                  />
                  FRA
                </a>
              </div>
            </div> */}
            {/* End of Dropdown Menu */}
            {/* <span className="divider d-lg-show" /> */}
            <a href="#" className="text-normal d-lg-show">
              Sell on Globlix
            </a>
            <a href="my-account.html" className="d-lg-show">
              My Account
            </a>
            {localStorage.getItem("vaild") == "accessed" ? (
              <>
                <a className="d-lg-show login sign-in">
                  <i class="fa-solid fa-circle-user"></i>
                  {user.firstname}
                </a>
              </>
            ) : (
              <>
                <Link to="/vendor-login" className="d-lg-show login sign-in">
                  <i class="fa-solid fa-circle-user"></i>
                  Sign In
                </Link>
                <span className="delimiter d-lg-show">/</span>
                <Link to="/vendor-login" className="ml-0 d-lg-show login register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {/* End of Header Top */}
      <div className="header-middle">
        <div className="container">
          <div className="header-left mr-md-4">
            <a
              href="#"
              className="mobile-menu-toggle  w-icon-hamburger"
              aria-label="menu-toggle"
            ></a>
            <Link to="/" className="logo ml-lg-0">
              <img
                src={require("../../images/demos/demo9/globlix logo 02.png")}
                alt="logo"
                width={144}
                height={45}
              />
            </Link>
            <form
              method="get"
              action="#"
              className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex"
            >
              <div className="select-box">
                <i className="fa-solid fa-chevron-down all-down-icon"></i>
                <select id="category" name="category">
                  <option value="" selected>
                    Country
                  </option>
                  {countries.map((country) => (
                    <option value={country.name} key={country._id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                placeholder="Search in..."
                required=""
              />
              <button className="btn btn-search" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* End of Header Middle */}
      <div className="header-bottom sticky-content fix-top sticky-header">
        <div className="container">
          <div className="inner-wrap">
            <div className="header-left">
              <nav className="main-nav ml-0">
                <ul className="menu">
                  <li>
                    <a href="demo9-shop.html">All Categories</a>
                    {/* Start of Megamenu */}
                    <ul className="megamenu">
                      <li>
                        <h4 className="menu-title">Categories</h4>
                        <ul>
                          {categories.map((category) => (
                            <li key={category._id}>
                              <Link to="/product-details">
                                {category.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                    {/* End of Megamenu */}
                  </li>
                  {/* <li>
                    <Link to="/vendor">Vendor</Link>
                  </li> */}
                  <li>
                    <Link to="/auction">Trade Shows</Link>
                  </li>
                  <li>
                    <a href="about-us.html">Languages</a>
                  </li>
                  {/* <li>
                    <a href="elements.html">Sell on Globlix</a>
                  </li> */}
                  <li>
                    <Link to="/product-auction">Auctions</Link>
                  </li>
                  <li>
                    <a href="#">Fulfilled by Globlix</a>
                  </li>
                  <li>
                    <a href="#">Export with Globlix</a>
                  </li>
                  <li>
                    <a href="#"> White Labelling</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* End of Header Bottom */}

      {/* <div
        class="swiper-container swiper-theme shadow-swiper icon-category-wrapper appear-animate mb-10 pb-2"
        data-swiper-options="{
                    'spaceBetween': 20,
                    'slidesPerView': 2,
                    'breakpoints': {
                        '480': {
                            'slidesPerView': 3
                        },
                        '768': {
                            'slidesPerView': 5
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
        <div class="swiper-wrapper ">
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
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
            {categories.map((category) => (
              <SwiperSlide>
                <div class="swiper-slide category category-icon">
                  <a href="shop-banner-sidebar.html">
                    <figure class="category-media">
                      <img src={category.image} />
                    </figure>
                  </a>
                  <div class="category-content">
                    <h4 class="category-name">
                      <a href="shop-banner-sidebar.html">{category.title}</a>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div class="swiper-slide category category-icon">
                <a href="shop-banner-sidebar.html">
                  <figure class="category-media">
                    <img
                      src={require("../../images/categories/all categories-01.png")}
                    />
                  </figure>
                </a>
                <div class="category-content">
                  <h4 class="category-name">
                    <a href="shop-banner-sidebar.html">All Categories</a>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button
          
          ref={navigationNextRef}
            className="custom-button-categories"
            style={{
              right: "-3%",
              top: "30%",
              paddingRight: "44px",
            }}
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
          <button
          ref={navigationPrevRef}
            className="custom-button-categories"
            style={{
              left: "-3%",
              top: "30%",
              paddingLeft: "44px",
            }}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </div>
      </div> */}

       {/* <div className="container d-lg-show">
        <div className="inner-wrap">
        
          <ul className="menu horizontal-menu category-menu">
          
          
            {categories.map((category) => (
              <li key={category._id}>
                <Link to="/all-products">
                  <img
                    src={category.image}
                    style={{
                      height: "48px",
                      display: "block",
                      margin: "auto",
                    }}
                  />
                  {category.title}
                </Link>
              </li>
            ))}
            <li>
              <a href="demo9-shop.html">
                <img
                  src={require('../../images/categories/all categories-01.png')}
                  style={{
                    height: "48px",
                    display: "block",
                    margin: "auto",
                  }}
                />
                All Categories
              </a>
            </li>
          </ul>
        </div>
      </div>  */}

      {/* End of Container */}
    </header>
  );
}

export default Header;

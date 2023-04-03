import React from "react";
import Header from "../header/Header";
import "../../css/style.min.css";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Tabs, Tab } from "react-bootstrap";
import Footer from "../footer/Footer";
import ContentZoom from "react-content-zoom";

import sofa from "../../images/products/extended/1-800x900.jpg";

function ProductDetails() {
  const [modalShow, setModalShow] = React.useState(false);

  window.onscroll = function () {
    scrollEvent();
  };

  function scrollEvent() {
    if (document.documentElement.scrollTop > 1000) {
      var element = document.getElementById("scrollControl");
      element.classList.add("myScorll");
    } else {
      var element = document.getElementById("scrollControl");
      element.classList.remove("myScorll");
    }

    if (document.documentElement.scrollTop > 3090) {
      var element = document.getElementById("scrollControl");
      element.classList.remove("myScorll");
    }
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="sm" centered>
        <Modal.Header>
          <Modal.Title>
            <div
              className="d-flex"
              style={{
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div>Send Inquiry</div>
              <div>
                <button onClick={() => setModalShow(false)}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Dongguan Yisports Garment Co. Ltd Manufacturer</h4>
          <div className="info">
            <form className="ant-form ant-form-vertical">
              <div className="info-box">
                <div className="product-img">
                  <img
                    src="https://p.globalsources.com/IMAGES/PDT/B1177606358/Cycling-jersey.jpg"
                    className="product-detail-pop-img"
                  />
                </div>
                <p>product-introduce</p>
                <div className="product-item-right">
                  <select
                    name="quantity"
                    id="quantity"
                    className="product-detail-pop-select"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="product-item-right">
                  <select
                    name="markup"
                    id="markup"
                    className="product-detail-pop-select"
                  >
                    <option value="Picese">Picese</option>
                    <option value="Kilogram">Kilogram</option>
                    <option value="Liter">Liter</option>
                    <option value="Meter">Meter</option>
                  </select>
                </div>
              </div>
              <div className="product-pop-mail-info">
                <h5>
                  Email Address<span style={{ color: "red" }}>*</span>
                </h5>
                <input
                  className="product-pop-mail-input"
                  placeholder="enter your email address"
                  type="email"
                />
              </div>
              <div className="product-pop-delair">
                <p>Any Message(optional)</p>
                <textarea rows={6} />
              </div>
              <p className="pop-product-upload">
                {" "}
                <i class="fa fa-upload" aria-hidden="true"></i>Upload Product
                Image/Attachment
              </p>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary btn-cart">Send Inquiry Now</button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="page-wrapper">
        {/* Start of Header */}

        {/* End of Header */}
        <Header />
        {/* Start of Main */}
        <main className="main mb-10 pb-1">
          {/* Start of Breadcrumb */}
          <nav className="breadcrumb-nav container">
            <ul className="breadcrumb bb-no">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>
                <a href="product-default.html">Products</a>
              </li>
              <li>Gallery</li>
            </ul>
            <ul className="product-nav list-style-none">
              <li className="product-nav-prev">
                <a href="#">
                  <i className="w-icon-angle-left" />
                </a>
                <span className="product-nav-popup">
                  <img
                    src={require("../../images/products/product-nav-prev.jpg")}
                    alt="Product"
                    width={110}
                    height={110}
                  />
                  <span className="product-name">Soft Sound Maker</span>
                </span>
              </li>
              <li className="product-nav-next">
                <a href="#">
                  <i className="w-icon-angle-right" />
                </a>
                <span className="product-nav-popup">
                  <img
                    src={require("../../images/products/product-nav-next.jpg")}
                    alt="Product"
                    width={110}
                    height={110}
                  />
                  <span className="product-name">Fabulous Sound Speaker</span>
                </span>
              </li>
            </ul>
          </nav>
          {/* End of Breadcrumb */}
          {/* Start of Page Content */}
          <div className="page-content">
            <div className="container">
              <div className="row gutter-lg">
                <div className="main-content">
                  <div className="product product-single mb-4">
                    <div className="product-gallery mb-4">
                      <div
                        className="product-single-swiper swiper-container swiper-theme nav-inner"
                        data-swiper-options="{
                                      'slidesPerView': 2,
                                      'spaceBetween': 20
                                  }"
                      >
                        <div className="swiper-wrapper row ">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={2}
                            slidesPerGroup={2}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                          >
                            <SwiperSlide>
                              <div className="swiper-slide">
                                {/* <figure className="product-image"> */}
                                <ContentZoom
                                  zoomPercent={250}
                                  largeImageUrl={require("../../images/products/extended/1-800x900.jpg")}
                                  imageUrl={require("../../images/products/extended/1-800x900.jpg")}
                                  contentHeight={549}
                                  contentWidth={488}
                                />
                                {/* <img
                                    src={require("../../images/products/extended/1-800x900.jpg")}
                                    data-zoom-image={require("../../images/products/extended/1-800x900.jpg")}
                                    alt="White Sofa"
                                    width={800}
                                    height={900}
                                  /> */}
                                {/* </figure> */}
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="swiper-slide"
                                style={{
                                  marginLeft: "30px",
                                }}
                              >
                                <ContentZoom
                                  zoomPercent={250}
                                  largeImageUrl={require("../../images/products/extended/2-800x900.jpg")}
                                  imageUrl={require("../../images/products/extended/2-800x900.jpg")}
                                  contentHeight={549}
                                  contentWidth={488}
                                />
                                {/* <figure className="product-image">
                                  <img
                                    src={require("../../images/products/extended/2-800x900.jpg")}
                                    data-zoom-image={require("../../images/products/extended/2-800x900.jpg")}
                                    alt="White Sofa"
                                    width={488}
                                    height={549}
                                  />
                                </figure> */}
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="swiper-slide"
                                style={{
                                  marginLeft: "-12px",
                                }}
                              >
                                <ContentZoom
                                  zoomPercent={250}
                                  largeImageUrl={require("../../images/products/extended/3-800x900.jpg")}
                                  imageUrl={require("../../images/products/extended/3-800x900.jpg")}
                                  contentHeight={549}
                                  contentWidth={488}
                                />
                                {/* <figure className="product-image">
                                  <img
                                    src={require("../../images/products/extended/3-800x900.jpg")}
                                    data-zoom-image={require("../../images/products/extended/3-800x900.jpg")}
                                    alt="White Sofa"
                                    width={800}
                                    height={900}
                                  />
                                </figure> */}
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="swiper-slide"
                                style={{
                                  marginLeft: "30px",
                                }}
                              >
                                <ContentZoom
                                  zoomPercent={250}
                                  largeImageUrl={require("../../images/products/extended/4-800x900.jpg")}
                                  imageUrl={require("../../images/products/extended/4-800x900.jpg")}
                                  contentHeight={549}
                                  contentWidth={488}
                                />
                                {/* <figure className="product-image">
                                  <img
                                    src={require("../../images/products/extended/4-800x900.jpg")}
                                    data-zoom-image={require("../../images/products/extended/4-800x900.jpg")}
                                    alt="White Sofa"
                                    width={800}
                                    height={900}
                                  />
                                </figure> */}
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                        <a
                          href="#"
                          className="product-gallery-btn product-image-full"
                        >
                          <i className="w-icon-zoom" />
                        </a>
                      </div>
                    </div>
                    <div className="product-details row pl-0">
                      <div className="col-md-6">
                        <h1 className="product-title">White Sofa</h1>
                        <div className="product-bm-wrapper">
                          <figure className="brand">
                            <img
                              src={require("../../images/products/brand/brand-1.jpg")}
                              alt="Brand"
                              width={102}
                              height={48}
                            />
                          </figure>
                          <div className="product-meta">
                            <div className="product-categories">
                              Category:
                              <span className="product-category">
                                <a href="#">Furniture</a>
                              </span>
                            </div>
                            <div className="product-sku">
                              SKU: <span>MS46891353</span>
                            </div>
                          </div>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$730.00</ins>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="#product-tab-reviews"
                            className="rating-reviews"
                          >
                            (3 Reviews)
                          </a>
                        </div>
                        <div className="product-short-desc">
                          <ul className="list-type-check list-style-none">
                            <li>
                              Ultrices eros in cursus turpis massa cursus
                              mattis.
                            </li>
                            <li>
                              Volutpat ac tincidunt vitae semper quis lectus.
                            </li>
                            <li>
                              Aliquam id diam maecenas ultricies mi eget mauris.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6 mt-1">
                        <div className="product-form product-variation-form product-color-swatch product-variations mt-1">
                          <label>Color:</label>
                          <div className="d-flex align-items-center">
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
                          <div className="product-variations flex-wrap d-flex align-items-center">
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
                        </div>
                        <div className="product-variation-price">
                          <span />
                        </div>
                        <hr className="product-divider mb-5" />
                        <div className="fix-bottom product-sticky-content sticky-content">
                          <div className="product-form container">
                            <button
                              className="btn btn-primary btn-cart"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              <i class="fa-solid fa-envelope"></i>
                              <span>Send Inquiry</span>
                            </button>
                            <MyVerticallyCenteredModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            />
                          </div>
                        </div>
                        <div className="social-links-wrapper">
                          <div className="social-links">
                            <div className="social-icons social-no-color border-thin">
                              <a
                                href="#"
                                className="social-icon social-facebook fa-brands fa-facebook-f"
                              />
                              <a
                                href="#"
                                className="social-icon social-twitter fa-brands fa-twitter"
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
                    <div className="tab-content">
                      <Tabs
                        defaultActiveKey="Description"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="Description" title="Description">
                          <div
                            className="tab-pane active"
                            id="product-tab-description"
                          >
                            <h4 className="title tab-pane-title font-weight-bold mb-2">
                              Detail
                            </h4>
                            <p className="mb-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Venenatis tellus in metus
                              vulputate eu scelerisque felis. Vel pretium lectus
                              quam id leo in vitae turpis massa. Nunc id cursus
                              metus aliquam. Libero id faucibus nisl tincidunt
                              eget. Aliquam id diam maecenas ultricies mi eget
                              mauris.{" "}
                            </p>
                            <div className="row align-items-center mb-4">
                              <div className="col-md-6 mb-4">
                                <div className="banner banner-video product-video br-xs">
                                  <figure className="banner-media">
                                    <a href="#">
                                      <img
                                        src={require("../../images/products/video-banner-610x300.jpg")}
                                        alt="banner"
                                        width={610}
                                        height={300}
                                        style={{ backgroundColor: "#bebebe" }}
                                      />
                                    </a>
                                    <a
                                      className="btn-play-video btn-iframe"
                                      href="assets/video/memory-of-a-woman.mp4"
                                    />
                                  </figure>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <h4 className="title tab-pane-title font-weight-bold mb-2">
                                  Features
                                </h4>
                                <ul className="list-style-none list-type-check">
                                  <li>
                                    Nunc nec porttitor turpis. In eu risus enim.
                                    In vitae mollis elit.
                                  </li>
                                  <li>
                                    Vivamus finibus vel mauris ut vehicula.
                                  </li>
                                  <li>
                                    Nullam a magna porttitor, dictum risus nec,
                                    faucibus sapien.
                                  </li>
                                  <li>
                                    Ultrices eros in cursus turpis massa
                                    tincidunt ante in nibh mauris.
                                  </li>
                                  <li>
                                    Cras ornare arcu dui vivamus arcu felis
                                    bibendum ut tristique.
                                  </li>
                                  <li>
                                    Pulvinar elementum integer enim neque
                                    volutpat.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="row align-items-center mb-4">
                              <div className="col-md-6 mb-4">
                                <h4 className="title tab-pane-title font-weight-bold mb-2">
                                  Product Education
                                </h4>
                                <p className="mb-4">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                  Venenatis tellus in metus vulputate eu
                                  scelerisque felis. Vel pretium lectus quam id
                                  leo in vitae turpis massa. Nunc id cursus
                                  metus aliquam. Libero id faucibus nisl
                                  tincidunt eget.
                                </p>
                              </div>
                              <div className="col-md-6 mb-4">
                                <figure>
                                  <img
                                    src={require("../../images/products/banner-1.jpg")}
                                    alt="Banner"
                                    width={455}
                                    height={230}
                                    style={{ backgroundColor: "#E6E6E6" }}
                                    className="w-100"
                                  />
                                </figure>
                              </div>
                            </div>
                            <div className="banner hotspot-banner mb-4">
                              <figure>
                                <img
                                  src={require("../../images/products/banner-2.jpg")}
                                  alt="Banner"
                                  width={930}
                                  height={450}
                                />
                              </figure>
                              <div className="hotspot-product hotspot-product-1 hotspot-right">
                                <a
                                  href="#"
                                  className="btn-hotspot btn-quickview"
                                >
                                  <i className="fas fa-circle" />
                                </a>
                                <div className="product text-center">
                                  <figure className="product-media">
                                    <a href="product-default.html">
                                      <img
                                        src={require("../../images/products/extended/1.jpg")}
                                        alt="Product"
                                        width={180}
                                        height={203}
                                      />
                                    </a>
                                    <div className="product-action-vertical">
                                      <a
                                        href="#"
                                        className="btn-product-icon btn-cart"
                                        title="Add To Cart"
                                      >
                                        <i className="w-icon-cart" />
                                      </a>
                                    </div>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="product-default.html">
                                        Alarm Clock With Lamp
                                      </a>
                                    </h4>
                                    <div className="product-price">
                                      <ins className="new-price">$30.00</ins>
                                      <del className="old-price">$60.00</del>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hotspot-product hotspot-product-2 hotspot-top">
                                <a
                                  href="#"
                                  className="btn-hotspot btn-quickview"
                                >
                                  <i className="fas fa-circle" />
                                </a>
                                <div className="product text-center">
                                  <figure className="product-media">
                                    <a href="product-default.html">
                                      <img
                                        src={require("../../images/products/extended/2.jpg")}
                                        alt="Product"
                                        width={180}
                                        height={203}
                                      />
                                    </a>
                                    <div className="product-action-vertical">
                                      <a
                                        href="#"
                                        className="btn-product-icon btn-cart"
                                        title="Add To Cart"
                                      >
                                        <i className="w-icon-cart" />
                                      </a>
                                    </div>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="product-default.html">
                                        Table-tennis Shoes
                                      </a>
                                    </h4>
                                    <div className="product-price">
                                      <ins className="new-price">$65.00</ins>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="hotspot-product hotspot-product-3 hotspot-left">
                                <a
                                  href="#"
                                  className="btn-hotspot btn-quickview"
                                >
                                  <i className="fas fa-circle" />
                                </a>
                                <div className="product text-center">
                                  <figure className="product-media">
                                    <a href="product-default.html">
                                      <img
                                        src={require("../../images/products/extended/3.jpg")}
                                        alt="Product"
                                        width={180}
                                        height={203}
                                      />
                                    </a>
                                    <div className="product-action-vertical">
                                      <a
                                        href="#"
                                        className="btn-product-icon btn-cart"
                                        title="Add To Cart"
                                      >
                                        <i className="w-icon-cart" />
                                      </a>
                                    </div>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="product-default.html">
                                        Clean Cotten T-shirt
                                      </a>
                                    </h4>
                                    <div className="product-price">
                                      <ins className="new-price">$45.00</ins>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="Vendor Info" title="Vendor Info">
                          <div className="tab-pane" id="product-tab-vendor">
                            <div className="row mb-3">
                              <div className="col-md-6 mb-4">
                                <figure className="vendor-banner br-sm">
                                  <img
                                    src={require("../../images/products/vendor-banner.jpg")}
                                    alt="Vendor Banner"
                                    width={610}
                                    height={295}
                                    style={{ backgroundColor: "#353B55" }}
                                  />
                                </figure>
                              </div>
                              <div className="col-md-6 pl-2 pl-md-6 mb-4">
                                <div className="vendor-user">
                                  <figure className="vendor-logo mr-4">
                                    <a href="#">
                                      <img
                                        src={require("../../images/products/vendor-logo.jpg")}
                                        alt="Vendor Logo"
                                        width={80}
                                        height={80}
                                      />
                                    </a>
                                  </figure>
                                  <div>
                                    <div className="vendor-name">
                                      <a href="#">Jone Doe</a>
                                    </div>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "90%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                      <a href="#" className="rating-reviews">
                                        (32 Reviews)
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <ul className="vendor-info list-style-none">
                                  <li className="store-name">
                                    <label>Store Name:</label>
                                    <span className="detail">OAIO Store</span>
                                  </li>
                                  <li className="store-address">
                                    <label>Address:</label>
                                    <span className="detail">
                                      Steven Street, El Carjon, CA 92020, United
                                      States (US)
                                    </span>
                                  </li>
                                  <li className="store-phone">
                                    <label>Phone:</label>
                                    <a href="#tel:">1234567890</a>
                                  </li>
                                </ul>
                                <a
                                  href="vendor-dokan-store.html"
                                  className="btn btn-dark btn-link btn-underline btn-icon-right"
                                >
                                  Visit Store
                                  <i className="w-icon-long-arrow-right" />
                                </a>
                              </div>
                            </div>
                            <p className="mb-5">
                              <strong className="text-dark">L</strong>orem ipsum
                              dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Venenatis tellus in metus vulputate
                              eu scelerisque felis. Vel pretium lectus quam id
                              leo in vitae turpis massa. Nunc id cursus metus
                              aliquam. Libero id faucibus nisl tincidunt eget.
                              Aliquam id diam maecenas ultricies mi eget mauris.
                              Volutpat ac tincidunt vitae semper quis lectus.
                              Vestibulum mattis ullamcorper velit sed. A arcu
                              cursus vitae congue mauris.
                            </p>
                            <p className="mb-2">
                              <strong className="text-dark">A</strong> arcu
                              cursus vitae congue mauris. Sagittis id
                              consectetur purus ut. Tellus rutrum tellus
                              pellentesque eu tincidunt tortor aliquam nulla.
                              Diam in arcu cursus euismod quis. Eget sit amet
                              tellus cras adipiscing enim eu. In fermentum et
                              sollicitudin ac orci phasellus. A condimentum
                              vitae sapien pellentesque habitant morbi tristique
                              senectus et. In dictum non consectetur a erat.
                              Nunc scelerisque viverra mauris in aliquam sem
                              fringilla.
                            </p>
                          </div>
                        </Tab>
                        <Tab
                          eventKey="Customer Reviews"
                          title="Customer Reviews"
                        >
                          <div className="tab-pane" id="product-tab-reviews">
                            <div className="row mb-4">
                              <div className="col-xl-4 col-lg-5 mb-4">
                                <div className="ratings-wrapper">
                                  <div className="avg-rating-container">
                                    <h4 className="avg-mark font-weight-bolder ls-50">
                                      3.3
                                    </h4>
                                    <div className="avg-rating">
                                      <p className="text-dark mb-1">
                                        Average Rating
                                      </p>
                                      <div className="ratings-container">
                                        <div className="ratings-full">
                                          <span
                                            className="ratings"
                                            style={{ width: "60%" }}
                                          />
                                          <span className="tooltiptext tooltip-top" />
                                        </div>
                                        <a href="#" className="rating-reviews">
                                          (3 Reviews)
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ratings-value d-flex align-items-center text-dark ls-25">
                                    <span className="text-dark font-weight-bold">
                                      66.7%
                                    </span>
                                    Recommended
                                    <span className="count">(2 of 3)</span>
                                  </div>
                                  <div className="ratings-list">
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                      <div className="progress-bar progress-bar-sm ">
                                        <span />
                                      </div>
                                      <div className="progress-value">
                                        <mark>70%</mark>
                                      </div>
                                    </div>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                      <div className="progress-bar progress-bar-sm ">
                                        <span />
                                      </div>
                                      <div className="progress-value">
                                        <mark>30%</mark>
                                      </div>
                                    </div>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                      <div className="progress-bar progress-bar-sm ">
                                        <span />
                                      </div>
                                      <div className="progress-value">
                                        <mark>40%</mark>
                                      </div>
                                    </div>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "40%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                      <div className="progress-bar progress-bar-sm ">
                                        <span />
                                      </div>
                                      <div className="progress-value">
                                        <mark>0%</mark>
                                      </div>
                                    </div>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "20%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                      <div className="progress-bar progress-bar-sm ">
                                        <span />
                                      </div>
                                      <div className="progress-value">
                                        <mark>0%</mark>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-7 mb-4">
                                <div className="review-form-wrapper">
                                  <h3 className="title tab-pane-title font-weight-bold mb-1">
                                    Submit Your Review
                                  </h3>
                                  <p className="mb-3">
                                    Your email address will not be published.
                                    Required fields are marked *
                                  </p>
                                  <form
                                    action="#"
                                    method="POST"
                                    className="review-form"
                                  >
                                    <div className="rating-form">
                                      <label htmlFor="rating">
                                        Your Rating Of This Product :
                                      </label>
                                      <span className="rating-stars">
                                        <a className="star-1" href="#">
                                          1
                                        </a>
                                        <a className="star-2" href="#">
                                          2
                                        </a>
                                        <a className="star-3" href="#">
                                          3
                                        </a>
                                        <a className="star-4" href="#">
                                          4
                                        </a>
                                        <a className="star-5" href="#">
                                          5
                                        </a>
                                      </span>
                                      <select
                                        name="rating"
                                        id="rating"
                                        required=""
                                        style={{ display: "none" }}
                                      >
                                        <option value="">Rate…</option>
                                        <option value={5}>Perfect</option>
                                        <option value={4}>Good</option>
                                        <option value={3}>Average</option>
                                        <option value={2}>Not that bad</option>
                                        <option value={1}>Very poor</option>
                                      </select>
                                    </div>
                                    <textarea
                                      cols={30}
                                      rows={6}
                                      placeholder="Write Your Review Here..."
                                      className="form-control"
                                      id="review"
                                      defaultValue={""}
                                    />
                                    <div className="row gutter-md">
                                      <div className="col-md-6">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Your Name"
                                          id="author"
                                        />
                                      </div>
                                      <div className="col-md-6">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Your Email"
                                          id="email_1"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <input
                                        type="checkbox"
                                        className="custom-checkbox"
                                        id="save-checkbox"
                                      />
                                      <label htmlFor="save-checkbox">
                                        Save my name, email, and website in this
                                        browser for the next time I comment.
                                      </label>
                                    </div>
                                    <button
                                      type="submit"
                                      className="btn btn-dark"
                                    >
                                      Submit Review
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="tab tab-nav-boxed tab-nav-outline tab-nav-center">
                              <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                  <a
                                    href="#show-all"
                                    className="nav-link active"
                                  >
                                    Show All
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#helpful-positive"
                                    className="nav-link"
                                  >
                                    Most Helpful Positive
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#helpful-negative"
                                    className="nav-link"
                                  >
                                    Most Helpful Negative
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#highest-rating"
                                    className="nav-link"
                                  >
                                    Highest Rating
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#lowest-rating" className="nav-link">
                                    Lowest Rating
                                  </a>
                                </li>
                              </ul>
                              <div className="tab-content">
                                <div className="tab-pane active" id="show-all">
                                  <ul className="comments list-style-none">
                                    <li className="comment">
                                      <div className="comment-body">
                                        <figure className="comment-avatar">
                                          <img
                                            src="assets/images/agents/1-100x100.png"
                                            alt="Commenter Avatar"
                                            width={90}
                                            height={90}
                                          />
                                        </figure>
                                        <div className="comment-content">
                                          <h4 className="comment-author">
                                            <a href="#">John Doe</a>
                                            <span className="comment-date">
                                              March 22, 2021 at 1:54 pm
                                            </span>
                                          </h4>
                                          <div className="ratings-container comment-rating">
                                            <div className="ratings-full">
                                              <span
                                                className="ratings"
                                                style={{ width: "60%" }}
                                              />
                                              <span className="tooltiptext tooltip-top" />
                                            </div>
                                          </div>
                                          <p>
                                            pellentesque habitant morbi
                                            tristique senectus et. In dictum non
                                            consectetur a erat. Nunc ultrices
                                            eros in cursus turpis massa
                                            tincidunt ante in nibh mauris cursus
                                            mattis. Cras ornare arcu dui vivamus
                                            arcu felis bibendum ut tristique.
                                          </p>
                                          <div className="comment-action">
                                            <a
                                              href="#"
                                              className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-up" />
                                              Helpful (1)
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-down" />
                                              Unhelpful (0)
                                            </a>
                                            <div className="review-image">
                                              <a href="#">
                                                <figure>
                                                  <img
                                                    src={require("../../images/products/default/review-img-1.jpg")}
                                                    width={60}
                                                    height={60}
                                                    alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                    data-zoom-image={require("../../images/products/default/review-img-1-800x900.jpg")}
                                                  />
                                                </figure>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="comment">
                                      <div className="comment-body">
                                        <figure className="comment-avatar">
                                          <img
                                            src={require("../../images/agents/2-100x100.png")}
                                            alt="Commenter Avatar"
                                            width={90}
                                            height={90}
                                          />
                                        </figure>
                                        <div className="comment-content">
                                          <h4 className="comment-author">
                                            <a href="#">John Doe</a>
                                            <span className="comment-date">
                                              March 22, 2021 at 1:52 pm
                                            </span>
                                          </h4>
                                          <div className="ratings-container comment-rating">
                                            <div className="ratings-full">
                                              <span
                                                className="ratings"
                                                style={{ width: "80%" }}
                                              />
                                              <span className="tooltiptext tooltip-top" />
                                            </div>
                                          </div>
                                          <p>
                                            Nullam a magna porttitor, dictum
                                            risus nec, faucibus sapien. Ultrices
                                            eros in cursus turpis massa
                                            tincidunt ante in nibh mauris cursus
                                            mattis. Cras ornare arcu dui vivamus
                                            arcu felis bibendum ut tristique.
                                          </p>
                                          <div className="comment-action">
                                            <a
                                              href="#"
                                              className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-up" />
                                              Helpful (1)
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-down" />
                                              Unhelpful (0)
                                            </a>
                                            <div className="review-image">
                                              <a href="#">
                                                <figure>
                                                  <img
                                                    src={require("../../images/products/default/review-img-2.jpg")}
                                                    width={60}
                                                    height={60}
                                                    alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                    data-zoom-image={require("../../images/products/default/review-img-2.jpg")}
                                                  />
                                                </figure>
                                              </a>
                                              <a href="#">
                                                <figure>
                                                  <img
                                                    src={require("../../images/products/default/review-img-3.jpg")}
                                                    width={60}
                                                    height={60}
                                                    alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                    data-zoom-image={require("../../images/products/default/review-img-3.jpg")}
                                                  />
                                                </figure>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="comment">
                                      <div className="comment-body">
                                        <figure className="comment-avatar">
                                          <img
                                            src={require("../../images/agents/3-100x100.png")}
                                            alt="Commenter Avatar"
                                            width={90}
                                            height={90}
                                          />
                                        </figure>
                                        <div className="comment-content">
                                          <h4 className="comment-author">
                                            <a href="#">John Doe</a>
                                            <span className="comment-date">
                                              March 22, 2021 at 1:21 pm
                                            </span>
                                          </h4>
                                          <div className="ratings-container comment-rating">
                                            <div className="ratings-full">
                                              <span
                                                className="ratings"
                                                style={{ width: "60%" }}
                                              />
                                              <span className="tooltiptext tooltip-top" />
                                            </div>
                                          </div>
                                          <p>
                                            In fermentum et sollicitudin ac orci
                                            phasellus. A condimentum vitae
                                            sapien pellentesque habitant morbi
                                            tristique senectus et. In dictum non
                                            consectetur a erat. Nunc scelerisque
                                            viverra mauris in aliquam sem
                                            fringilla.
                                          </p>
                                          <div className="comment-action">
                                            <a
                                              href="#"
                                              className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-up" />
                                              Helpful (0)
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-down" />
                                              Unhelpful (1)
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-pane" id="helpful-positive">
                                  <ul className="comments list-style-none">
                                    <li className="comment">
                                      <div className="comment-body">
                                        <figure className="comment-avatar">
                                          <img
                                            src={require("../../images/agents/1-100x100.png")}
                                            alt="Commenter Avatar"
                                            width={90}
                                            height={90}
                                          />
                                        </figure>
                                        <div className="comment-content">
                                          <h4 className="comment-author">
                                            <a href="#">John Doe</a>
                                            <span className="comment-date">
                                              March 22, 2021 at 1:54 pm
                                            </span>
                                          </h4>
                                          <div className="ratings-container comment-rating">
                                            <div className="ratings-full">
                                              <span
                                                className="ratings"
                                                style={{ width: "60%" }}
                                              />
                                              <span className="tooltiptext tooltip-top" />
                                            </div>
                                          </div>
                                          <p>
                                            pellentesque habitant morbi
                                            tristique senectus et. In dictum non
                                            consectetur a erat. Nunc ultrices
                                            eros in cursus turpis massa
                                            tincidunt ante in nibh mauris cursus
                                            mattis. Cras ornare arcu dui vivamus
                                            arcu felis bibendum ut tristique.
                                          </p>
                                          <div className="comment-action">
                                            <a
                                              href="#"
                                              className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-up" />
                                              Helpful (1)
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-down" />
                                              Unhelpful (0)
                                            </a>
                                            <div className="review-image">
                                              <a href="#">
                                                <figure>
                                                  <img
                                                    src={require("../../images/products/default/review-img-1.jpg")}
                                                    width={60}
                                                    height={60}
                                                    alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                    data-zoom-image={require("../../images/products/default/review-img-1.jpg")}
                                                  />
                                                </figure>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="comment">
                                      <div className="comment-body">
                                        <figure className="comment-avatar">
                                          <img
                                            src={require("../../images/agents/2-100x100.png")}
                                            alt="Commenter Avatar"
                                            width={90}
                                            height={90}
                                          />
                                        </figure>
                                        <div className="comment-content">
                                          <h4 className="comment-author">
                                            <a href="#">John Doe</a>
                                            <span className="comment-date">
                                              March 22, 2021 at 1:52 pm
                                            </span>
                                          </h4>
                                          <div className="ratings-container comment-rating">
                                            <div className="ratings-full">
                                              <span
                                                className="ratings"
                                                style={{ width: "80%" }}
                                              />
                                              <span className="tooltiptext tooltip-top" />
                                            </div>
                                          </div>
                                          <p>
                                            Nullam a magna porttitor, dictum
                                            risus nec, faucibus sapien. Ultrices
                                            eros in cursus turpis massa
                                            tincidunt ante in nibh mauris cursus
                                            mattis. Cras ornare arcu dui vivamus
                                            arcu felis bibendum ut tristique.
                                          </p>
                                          <div className="comment-action">
                                            <a
                                              href="#"
                                              className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-up" />
                                              Helpful (1)
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-down" />
                                              Unhelpful (0)
                                            </a>
                                            <div className="review-image">
                                              <a href="#">
                                                <figure>
                                                  <img
                                                    src={require("../../images/products/default/review-img-2.jpg")}
                                                    width={60}
                                                    height={60}
                                                    alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                    data-zoom-image={require("../../images/products/default/review-img-2-800x900.jpg")}
                                                  />
                                                </figure>
                                              </a>
                                              <a href="#">
                                                <figure>
                                                  <img
                                                    src={require("../../images/products/default/review-img-3.jpg")}
                                                    width={60}
                                                    height={60}
                                                    alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                    data-zoom-image={require("../../images/products/default/review-img-3-800x900.jpg")}
                                                  />
                                                </figure>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-pane" id="helpful-negative">
                                  <ul className="comments list-style-none">
                                    <li className="comment">
                                      <div className="comment-body">
                                        <figure className="comment-avatar">
                                          <img
                                            src={require("../../images/agents/3-100x100.png")}
                                            alt="Commenter Avatar"
                                            width={90}
                                            height={90}
                                          />
                                        </figure>
                                        <div className="comment-content">
                                          <h4 className="comment-author">
                                            <a href="#">John Doe</a>
                                            <span className="comment-date">
                                              March 22, 2021 at 1:21 pm
                                            </span>
                                          </h4>
                                          <div className="ratings-container comment-rating">
                                            <div className="ratings-full">
                                              <span
                                                className="ratings"
                                                style={{ width: "60%" }}
                                              />
                                              <span className="tooltiptext tooltip-top" />
                                            </div>
                                          </div>
                                          <p>
                                            In fermentum et sollicitudin ac orci
                                            phasellus. A condimentum vitae
                                            sapien pellentesque habitant morbi
                                            tristique senectus et. In dictum non
                                            consectetur a erat. Nunc scelerisque
                                            viverra mauris in aliquam sem
                                            fringilla.
                                          </p>
                                          <div className="comment-action">
                                            <a
                                              href="#"
                                              className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-up" />
                                              Helpful (0)
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-down" />
                                              Unhelpful (1)
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-pane" id="highest-rating">
                                  <ul className="comments list-style-none">
                                    <li className="comment">
                                      <div className="comment-body">
                                        <figure className="comment-avatar">
                                          <img
                                            src={require("../../images/agents/2-100x100.png")}
                                            alt="Commenter Avatar"
                                            width={90}
                                            height={90}
                                          />
                                        </figure>
                                        <div className="comment-content">
                                          <h4 className="comment-author">
                                            <a href="#">John Doe</a>
                                            <span className="comment-date">
                                              March 22, 2021 at 1:52 pm
                                            </span>
                                          </h4>
                                          <div className="ratings-container comment-rating">
                                            <div className="ratings-full">
                                              <span
                                                className="ratings"
                                                style={{ width: "80%" }}
                                              />
                                              <span className="tooltiptext tooltip-top" />
                                            </div>
                                          </div>
                                          <p>
                                            Nullam a magna porttitor, dictum
                                            risus nec, faucibus sapien. Ultrices
                                            eros in cursus turpis massa
                                            tincidunt ante in nibh mauris cursus
                                            mattis. Cras ornare arcu dui vivamus
                                            arcu felis bibendum ut tristique.
                                          </p>
                                          <div className="comment-action">
                                            <a
                                              href="#"
                                              className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-up" />
                                              Helpful (1)
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-down" />
                                              Unhelpful (0)
                                            </a>
                                            <div className="review-image">
                                              <a href="#">
                                                <figure>
                                                  <img
                                                    src={require("../../images/products/default/review-img-2.jpg")}
                                                    width={60}
                                                    height={60}
                                                    alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                    data-zoom-image={require("../../images/products/default/review-img-2-800x900.jpg")}
                                                  />
                                                </figure>
                                              </a>
                                              <a href="#">
                                                <figure>
                                                  <img
                                                    src={require("../../images/products/default/review-img-3.jpg")}
                                                    width={60}
                                                    height={60}
                                                    alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                    data-zoom-image={require("../../images/products/default/review-img-3-800x900.jpg")}
                                                  />
                                                </figure>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-pane" id="lowest-rating">
                                  <ul className="comments list-style-none">
                                    <li className="comment">
                                      <div className="comment-body">
                                        <figure className="comment-avatar">
                                          <img
                                            src={require("../../images/agents/1-100x100.png")}
                                            alt="Commenter Avatar"
                                            width={90}
                                            height={90}
                                          />
                                        </figure>
                                        <div className="comment-content">
                                          <h4 className="comment-author">
                                            <a href="#">John Doe</a>
                                            <span className="comment-date">
                                              March 22, 2021 at 1:54 pm
                                            </span>
                                          </h4>
                                          <div className="ratings-container comment-rating">
                                            <div className="ratings-full">
                                              <span
                                                className="ratings"
                                                style={{ width: "60%" }}
                                              />
                                              <span className="tooltiptext tooltip-top" />
                                            </div>
                                          </div>
                                          <p>
                                            pellentesque habitant morbi
                                            tristique senectus et. In dictum non
                                            consectetur a erat. Nunc ultrices
                                            eros in cursus turpis massa
                                            tincidunt ante in nibh mauris cursus
                                            mattis. Cras ornare arcu dui vivamus
                                            arcu felis bibendum ut tristique.
                                          </p>
                                          <div className="comment-action">
                                            <a
                                              href="#"
                                              className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-up" />
                                              Helpful (1)
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                            >
                                              <i className="far fa-thumbs-down" />
                                              Unhelpful (0)
                                            </a>
                                            <div className="review-image">
                                              <a href="#">
                                                <figure>
                                                  <img
                                                    src={require("../../images/products/default/review-img-3.jpg")}
                                                    width={60}
                                                    height={60}
                                                    alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                    data-zoom-image={require("../../images/products/default/review-img-3-800x900.jpg")}
                                                  />
                                                </figure>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                  <section className="vendor-product-section">
                    <div className="title-link-wrapper mb-4">
                      <h4 className="title text-left">
                        More Products From This Vendor
                      </h4>
                      <a
                        href="#"
                        className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                      >
                        More Products
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                    <div
                      className="swiper-container swiper-theme"
                      data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 2,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 3
                                  },
                                  '768': {
                                      'slidesPerView': 4
                                  },
                                  '992': {
                                      'slidesPerView': 3
                                  }
                              }
                          }"
                    >
                      <div className="swiper-wrapper row ">
                        <Swiper
                          spaceBetween={30}
                          slidesPerView={3}
                          navigation={false}
                          modules={[Autoplay, Pagination, Navigation]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="swiper-slide product">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src={require("../../images/products/default/1-1.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                  <img
                                    src={require("../../images/products/default/1-2.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                </a>

                                <div className="product-action">
                                  <a
                                    href="#"
                                    className="btn-product btn-quickview"
                                    title="Quick View"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </figure>
                              <div className="product-details">
                                <div className="product-cat">
                                  <a href="shop-banner-sidebar.html">
                                    Accessories
                                  </a>
                                </div>
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Sticky Pencil
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a
                                    href="product-default.html"
                                    className="rating-reviews"
                                  >
                                    (3 reviews)
                                  </a>
                                </div>
                                <div className="product-pa-wrapper">
                                  <div className="product-price">$20.00</div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide product">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src={require("../../images/products/default/2.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                </a>

                                <div className="product-action">
                                  <a
                                    href="#"
                                    className="btn-product btn-quickview"
                                    title="Quick View"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </figure>
                              <div className="product-details">
                                <div className="product-cat">
                                  <a href="shop-banner-sidebar.html">
                                    Electronics
                                  </a>
                                </div>
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Mini Multi-Functional Cooker
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "80%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a
                                    href="product-default.html"
                                    className="rating-reviews"
                                  >
                                    (5 reviews)
                                  </a>
                                </div>
                                <div className="product-pa-wrapper">
                                  <div className="product-price">
                                    <ins className="new-price">$480.00</ins>
                                    <del className="old-price">$534.00</del>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide product">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src={require("../../images/products/default/3.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                </a>

                                <div className="product-action">
                                  <a
                                    href="#"
                                    className="btn-product btn-quickview"
                                    title="Quick View"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </figure>
                              <div className="product-details">
                                <div className="product-cat">
                                  <a href="shop-banner-sidebar.html">Sports</a>
                                </div>
                                <h4 className="product-name">
                                  <a href="product-default.html">Skate Pan</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a
                                    href="product-default.html"
                                    className="rating-reviews"
                                  >
                                    (3 reviews)
                                  </a>
                                </div>
                                <div className="product-pa-wrapper">
                                  <div className="product-price">
                                    <ins className="new-price">$278.00</ins>
                                    <del className="old-price">$310.00</del>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide product">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src={require("../../images/products/default/4-1.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                  <img
                                    src={require("../../images/products/default/4-2.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                </a>

                                <div className="product-action">
                                  <a
                                    href="#"
                                    className="btn-product btn-quickview"
                                    title="Quick View"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </figure>
                              <div className="product-details">
                                <div className="product-cat">
                                  <a href="shop-banner-sidebar.html">
                                    Accessories
                                  </a>
                                </div>
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Clip Attachment
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a
                                    href="product-default.html"
                                    className="rating-reviews"
                                  >
                                    (5 reviews)
                                  </a>
                                </div>
                                <div className="product-pa-wrapper">
                                  <div className="product-price">$40.00</div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </section>
                  <section className="related-product-section">
                    <div className="title-link-wrapper mb-4">
                      <h4 className="title">Related Products</h4>
                      <a
                        href="#"
                        className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                      >
                        More Products
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                    <div
                      className="swiper-container swiper-theme"
                      data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 2,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 3
                                  },
                                  '768': {
                                      'slidesPerView': 4
                                  },
                                  '992': {
                                      'slidesPerView': 3
                                  }
                              }
                          }"
                    >
                      <div className="swiper-wrapper row ">
                        <Swiper
                          spaceBetween={30}
                          slidesPerView={3}
                          navigation={false}
                          modules={[Autoplay, Pagination, Navigation]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="swiper-slide product">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src={require("../../images/products/default/5.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                </a>

                                <div className="product-action">
                                  <a
                                    href="#"
                                    className="btn-product btn-quickview"
                                    title="Quick View"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">Drone</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a
                                    href="product-default.html"
                                    className="rating-reviews"
                                  >
                                    (3 reviews)
                                  </a>
                                </div>
                                <div className="product-pa-wrapper">
                                  <div className="product-price">$632.00</div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide product">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src={require("../../images/products/default/6.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                </a>

                                <div className="product-action">
                                  <a
                                    href="#"
                                    className="btn-product btn-quickview"
                                    title="Quick View"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Official Camera
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a
                                    href="product-default.html"
                                    className="rating-reviews"
                                  >
                                    (3 reviews)
                                  </a>
                                </div>
                                <div className="product-pa-wrapper">
                                  <div className="product-price">
                                    <ins className="new-price">$263.00</ins>
                                    <del className="old-price">$300.00</del>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide product">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src={require("../../images/products/default/7-1.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                  <img
                                    src={require("../../images/products/default/7-2.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                </a>

                                <div className="product-action">
                                  <a
                                    href="#"
                                    className="btn-product btn-quickview"
                                    title="Quick View"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Phone Charge Pad
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "80%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a
                                    href="product-default.html"
                                    className="rating-reviews"
                                  >
                                    (8 reviews)
                                  </a>
                                </div>
                                <div className="product-pa-wrapper">
                                  <div className="product-price">$23.00</div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide product">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src={require("../../images/products/default/8.jpg")}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                  />
                                </a>

                                <div className="product-action">
                                  <a
                                    href="#"
                                    className="btn-product btn-quickview"
                                    title="Quick View"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Fashionalble Pencil
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a
                                    href="product-default.html"
                                    className="rating-reviews"
                                  >
                                    (9 reviews)
                                  </a>
                                </div>
                                <div className="product-pa-wrapper">
                                  <div className="product-price">$50.00</div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </section>
                </div>
                {/* End of Main Content */}
                <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
                  <div className="sidebar-overlay" />
                  <a className="sidebar-close" href="#">
                    <i className="close-icon" />
                  </a>
                  <a href="#" className="sidebar-toggle d-flex d-lg-none">
                    <i className="fas fa-chevron-left" />
                  </a>
                  <div className="sidebar-content scrollable">
                    <div id="scrollControl" className="sticky-sidebar">
                      <div className="widget widget-icon-box mb-6">
                        <div className="icon-box icon-box-side">
                          <span className="icon-box-icon text-dark">
                            <i class="fa-solid fa-truck"></i>
                          </span>
                          <div className="icon-box-content">
                            <h4 className="icon-box-title">
                              Free Shipping &amp; Returns
                            </h4>
                            <p>For all orders over $99</p>
                          </div>
                        </div>
                        <div className="icon-box icon-box-side">
                          <span className="icon-box-icon text-dark">
                            <i class="fa-solid fa-briefcase"></i>
                          </span>
                          <div className="icon-box-content">
                            <h4 className="icon-box-title">Secure Payment</h4>
                            <p>We ensure secure payment</p>
                          </div>
                        </div>
                        <div className="icon-box icon-box-side">
                          <span className="icon-box-icon text-dark">
                            <i class="fa-solid fa-sack-dollar"></i>
                          </span>
                          <div className="icon-box-content">
                            <h4 className="icon-box-title">
                              Money Back Guarantee
                            </h4>
                            <p>Any back within 30 days</p>
                          </div>
                        </div>
                      </div>
                      {/* End of Widget Icon Box */}
                      <div className="widget widget-banner mb-9">
                        <div className="banner banner-fixed br-sm">
                          <figure>
                            <img
                              src={require("../../images/shop/banner3.jpg")}
                              alt="Banner"
                              width={266}
                              height={220}
                              style={{ backgroundColor: "#1D2D44" }}
                            />
                          </figure>
                          <div className="banner-content">
                            <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                              40<sup className="font-weight-bold">%</sup>
                              <sub className="font-weight-bold text-uppercase ls-25">
                                Off
                              </sub>
                            </div>
                            <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                              Ultimate Sale
                            </h4>
                          </div>
                        </div>
                      </div>
                      {/* End of Widget Banner */}
                      <div className="widget widget-products">
                        <div className="title-link-wrapper mb-2">
                          <h4 className="title title-link font-weight-bold">
                            More Products
                          </h4>
                        </div>
                        <div className="swiper nav-top">
                          <div
                            className="swiper-container swiper-theme nav-top"
                            data-swiper-options="{
                                          'slidesPerView': 1,
                                          'spaceBetween': 20,
                                          'navigation': {
                                              'prevEl': '.swiper-button-prev',
                                              'nextEl': '.swiper-button-next'
                                          }
                                      }"
                          >
                            <div className="swiper-wrapper">
                              <div className="widget-col swiper-slide">
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src={require("../../images/shop/13.jpg")}
                                        alt="Product"
                                        width={100}
                                        height={113}
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Smart Watch</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <div className="product-price">
                                      $80.00 - $90.00
                                    </div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src={require("../../images/shop/14.jpg")}
                                        alt="Product"
                                        width={100}
                                        height={113}
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Sky Medical Facility</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <div className="product-price">$58.00</div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src={require("../../images/shop/15.jpg")}
                                        alt="Product"
                                        width={100}
                                        height={113}
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Black Stunt Motor</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <div className="product-price">$374.00</div>
                                  </div>
                                </div>
                              </div>
                              <div className="widget-col swiper-slide">
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src={require("../../images/shop/16.jpg")}
                                        alt="Product"
                                        width={100}
                                        height={113}
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Skate Pan</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <div className="product-price">$278.00</div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src={require("../../images/shop/17.jpg")}
                                        alt="Product"
                                        width={100}
                                        height={113}
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">Modern Cooker</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <div className="product-price">$324.00</div>
                                  </div>
                                </div>
                                <div className="product product-widget">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        src={require("../../images/shop/18.jpg")}
                                        alt="Product"
                                        width={100}
                                        height={113}
                                      />
                                    </a>
                                  </figure>
                                  <div className="product-details">
                                    <h4 className="product-name">
                                      <a href="#">CT Machine</a>
                                    </h4>
                                    <div className="ratings-container">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <div className="product-price">$236.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button className="swiper-button-next" />
                            <button className="swiper-button-prev" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                {/* End of Sidebar */}
              </div>
            </div>
          </div>
          {/* End of Page Content */}
        </main>
        {/* End of Main */}
        {/* Start of Footer */}
        <Footer />
        {/* End of Footer */}
      </div>
      {/* End of Page Wrapper */}
      {/* Start of Sticky Footer */}
      <div className="sticky-footer sticky-content fix-bottom">
        <a href="demo1.html" className="sticky-link active">
          <i className="w-icon-home" />
          <p>Home</p>
        </a>
        <a href="shop-banner-sidebar.html" className="sticky-link">
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
                  <a href="#">
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
                    <a href="https://www.portotheme.com/html/Globlix/product.html">
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
                  <a href="#">
                    <img
                      src="assets/images/cart/product-2.jpg"
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
          {" "}
          <circle
            id="progress-indicator"
            fill="transparent"
            stroke="#000000"
            strokeMiterlimit={10}
            cx={35}
            cy={35}
            r={34}
            style={{ strokeDasharray: "16.4198, 400" }}
          />{" "}
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
                  <a href="demo1.html">Home</a>
                </li>
                <li>
                  <a href="shop-banner-sidebar.html">Shop</a>
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
                    <li>
                      <a href="#">Shop Layouts</a>
                      <ul>
                        <li>
                          <a href="shop-grid-3cols.html">3 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-4cols.html">4 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-5cols.html">5 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-6cols.html">6 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-7cols.html">7 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-8cols.html">8 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-list.html">List Mode</a>
                        </li>
                        <li>
                          <a href="shop-list-sidebar.html">
                            List Mode With Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Product Pages</a>
                      <ul>
                        <li>
                          <a href="product-variable.html">Variable Product</a>
                        </li>
                        <li>
                          <a href="product-featured.html">
                            Featured &amp; Sale
                          </a>
                        </li>
                        <li>
                          <a href="product-accordion.html">Data In Accordion</a>
                        </li>
                        <li>
                          <a href="product-section.html">Data In Sections</a>
                        </li>
                        <li>
                          <a href="product-swatch.html">Image Swatch</a>
                        </li>
                        <li>
                          <a href="product-extended.html">Extended Info</a>
                        </li>
                        <li>
                          <a href="product-without-sidebar.html">
                            Without Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="product-video.html">
                            360<sup>o</sup> &amp; Video
                            <span className="tip tip-new">New</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Product Layouts</a>
                      <ul>
                        <li>
                          <a href="product-default.html">
                            Default<span className="tip tip-hot">Hot</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-vertical.html">Vertical Thumbs</a>
                        </li>
                        <li>
                          <a href="product-grid.html">Grid Images</a>
                        </li>
                        <li>
                          <a href="product-masonry.html">Masonry</a>
                        </li>
                        <li>
                          <a href="product-gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="product-sticky-info.html">Sticky Info</a>
                        </li>
                        <li>
                          <a href="product-sticky-thumb.html">Sticky Thumbs</a>
                        </li>
                        <li>
                          <a href="product-sticky-both.html">Sticky Both</a>
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
                        <li>
                          <a href="shop-fullwidth-banner.html">Sale</a>
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
      {/* End of Mobile Menu */}
      {/* Root element of PhotoSwipe. Must have class pswp */}
      <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
        {/* Background of PhotoSwipe. It's a separate element as animating opacity is faster than rgba(). */}
        <div className="pswp__bg" />
        {/* Slides wrapper with overflow:hidden. */}
        <div className="pswp__scroll-wrap">
          {/* Container that holds slides.
			PhotoSwipe keeps only 3 of them in the DOM to save memory.
			Don't modify these 3 pswp__item elements, data is added later on. */}
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>
          {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              {/*  Controls are self-explanatory. Order can be changed. */}
              <div className="pswp__counter" />
              <button
                className="pswp__button pswp__button--close"
                aria-label="Close (Esc)"
              />
              <button
                className="pswp__button pswp__button--zoom"
                aria-label="Zoom in/out"
              />
              <div className="pswp__preloader">
                <div className="loading-spin" />
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>
            <button
              className="pswp__button--arrow--left"
              aria-label="Previous (arrow left)"
            />
            <button
              className="pswp__button--arrow--right"
              aria-label="Next (arrow right)"
            />
            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>
      {/* End of PhotoSwipe */}
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
                        src="assets/images/products/popup/1-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/1-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/2-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/2-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/3-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/3-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/4-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/4-800x900.jpg"
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
                      src="assets/images/products/popup/1-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/2-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/3-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/4-103x116.jpg"
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
                    src="assets/images/products/brand/brand-1.jpg"
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

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Send Inquiry
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body"><h4>Dongguan Yisports Garment Co. Ltd Manufacturer</h4>
          <div className="info">
            <form className="ant-form ant-form-vertical">
              <div className="info-box">
                <div className="product-img">
                  <img
                    src="https://p.globalsources.com/IMAGES/PDT/B1177606358/Cycling-jersey.jpg"
                    className="product-detail-pop-img"
                  />
                </div>
                <p>product-introduce</p>
                <div className="product-item-right">
                  <select
                    name="quantity"
                    id="quantity"
                    className="product-detail-pop-select"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="product-item-right">
                  <select
                    name="markup"
                    id="markup"
                    className="product-detail-pop-select"
                  >
                    <option value="Picese">Picese</option>
                    <option value="Kilogram">Kilogram</option>
                    <option value="Liter">Liter</option>
                    <option value="Meter">Meter</option>
                  </select>
                </div>
              </div>
              <div className="product-pop-mail-info">
                <h5>
                  Email Address<span style={{ color: "red" }}>*</span>
                </h5>
                <input
                  className="product-pop-mail-input"
                  placeholder="enter your email address"
                  type="email"
                />
              </div>
              <div className="product-pop-delair">
                <p>Any Message(optional)</p>
                <textarea rows={6} />
              </div>
              <p className="pop-product-upload">
                {" "}
                <i class="fa fa-upload" aria-hidden="true"></i>Upload Product
                Image/Attachment
              </p>
            </form>
          </div></div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* End of Quick view */}
      {/* Plugin JS File */}
      {/* Main JS File */}
      {/* Mirrored from portotheme.com/html/Globlix/product-extended.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 28 Mar 2022 10:01:35 GMT */}
    </>
  );
}

export default ProductDetails;

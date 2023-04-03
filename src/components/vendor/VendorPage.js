import React, {useState} from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function VendorPage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  // function MyVerticallyCenteredModal(props) {
  //   return (
  //     <Modal
  //       {...props}
  //       size="lg-down"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       fullscreen="sm-down"
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Send Inquiry
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <h4>Dongguan Yisports Garment Co. Ltd Manufacturer</h4>
  //         <div className="info">
  //           <form className="ant-form ant-form-vertical">
  //             <div className="info-box">
  //               <div className="product-img">
  //                 <img
  //                   src="https://p.globalsources.com/IMAGES/PDT/B1177606358/Cycling-jersey.jpg"
  //                   className="product-detail-pop-img"
  //                 />
  //               </div>
  //               <p>product-introduce</p>
  //               <div className="product-item-right">
  //                 <select
  //                   name="quantity"
  //                   id="quantity"
  //                   className="product-detail-pop-select"
  //                 >
  //                   <option value="1">1</option>
  //                   <option value="2">2</option>
  //                   <option value="3">3</option>
  //                   <option value="4">4</option>
  //                 </select>
  //               </div>
  //               <div className="product-item-right">
  //                 <select
  //                   name="markup"
  //                   id="markup"
  //                   className="product-detail-pop-select"
  //                 >
  //                   <option value="Picese">Picese</option>
  //                   <option value="Kilogram">Kilogram</option>
  //                   <option value="Liter">Liter</option>
  //                   <option value="Meter">Meter</option>
  //                 </select>
  //               </div>
  //             </div>
  //             <div className="product-pop-mail-info">
  //               <h5>
  //                 Email Address<span style={{ color: "red" }}>*</span>
  //               </h5>
  //               <input
  //                 className="product-pop-mail-input"
  //                 placeholder="enter your email address"
  //                 type="email"
  //               />
  //             </div>
  //             <div className="product-pop-delair">
  //               <p>Any Message(optional)</p>
  //               <textarea rows={6} />
  //             </div>
  //             <p className="pop-product-upload">
  //               {" "}
  //               <i class="fa fa-upload" aria-hidden="true"></i>Upload Product
  //               Image/Attachment
  //             </p>
  //           </form>
  //         </div>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <button className="send-inqiury pop-inquiry-btn">
  //           Send Inquiry Now
  //         </button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }

  return (
    <>
      {/* Start of Pgae Wrapper */}
      <div className="page-wrapper">
        {/* Start of Header */}
        <Header />
        {/* End of Header */}
        {/* Start of Main */}
        <main className="main">
          {/* Start of Breadcrumb */}
          <nav className="breadcrumb-nav">
            <div className="container">
              <ul className="breadcrumb bb-no">
                <li>
                  <a href="demo1.html">Home</a>
                </li>
                <li>
                  <a href="#">Vendor</a>
                </li>
                <li>
                  <a href="#">WCFM</a>
                </li>
                <li>Store</li>
              </ul>
            </div>
          </nav>
          {/* End of Breadcrumb */}
          {/* Start of Pgae Contetn */}
          <div className="page-content mb-8">
            <div className="container">
              <div className="store store-wcfm-banner">
                <figure className="store-media">
                  <img
                    src={require("../../images/vendor/wcfm/1.jpg")}
                    alt="Vendor"
                    width={1240}
                    height={460}
                    style={{ backgroundColor: "#40475e" }}
                  />
                </figure>
                <div className="store-content">
                  <div className="store-content-left mr-auto">
                    <div className="personal-info">
                      <figure className="seller-brand">
                        <img
                          src={require("../../images/vendor/brand/2-100x100.png")}
                          alt="Brand"
                          width={100}
                          height={100}
                        />
                      </figure>
                      <div className="ratings-container">
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "gold" }}
                        ></i>
                      </div>
                    </div>
                    <div className="address-info">
                      <h4 className="store-title">Vendor 1</h4>
                      <ul className="seller-info-list list-style-none">
                        <li className="store-address">
                          <i class="fa-solid fa-location-dot"></i>
                          Street1, Street2, Great Area, California, United
                          States (US), 92090El Carjon,
                        </li>
                        <li className="store-phone">
                          <a href="tel:123456789">
                            <i class="fa-solid fa-phone"></i>
                            0(800)123-456
                          </a>
                        </li>
                        <li className="store-email">
                          <a href="email:#">
                            <i className="far fa-envelope" />
                            wc@vendor.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="store-content-right">
                    <div className="social-icons social-icons-colored border-thin">
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
                        className="social-icon social-linkedin fa-brands fa-linkedin"
                      />
                      <a
                        href="#"
                        className="social-icon social-youtube fa-brands fa-youtube"
                      />
                      <a
                        href="#"
                        className="social-icon social-instagram fa-brands fa-instagram"
                      />
                    </div>
                  </div>
                  
                </div>
                
              </div>
              
              {/* End of Store WCMP Banner */}
              <div className="row gutter-lg">
                <aside className="sidebar left-sidebar vendor-sidebar sticky-sidebar-wrapper sidebar-fixed">
                  {/* Start of Sidebar Overlay */}
                  <div className="sidebar-overlay" />
                  <a className="sidebar-close" href="#">
                    <i className="close-icon" />
                  </a>
                  <a href="#" className="sidebar-toggle">
                    <i className="w-icon-angle-right" />
                  </a>
                  <div className="sidebar-content">
                    <div className="sticky-sidebar">
                      <div className="widget widget-collapsible widget-categories">
                        <h3 className="widget-title">
                          <span>All Categories</span>
                        </h3>
                        <ul className="widget-body filter-items search-ul">
                          <li>
                            <a href="#">Clothing</a>
                            <ul>
                              <li>
                                <a href="#">Men's</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Fashion</a>
                          </li>
                          <li>
                            <a href="#">Healthy &amp; Beauty</a>
                          </li>
                          <li>
                            <a href="#">Home &amp; Kitchen</a>
                          </li>
                          <li>
                            <a href="#">Jewelry &amp; Watch</a>
                            <ul>
                              <li>
                                <a href="#">Smart Watch</a>
                              </li>
                              <li>
                                <a href="#">Watch</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Office Electronics</a>
                            <ul>
                              <li>
                                <a href="#">Accessories</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      {/* End of Widget */}
                      <div className="widget widget-collapsible widget-coupons">
                        <h3 className="widget-title">
                          <span>Store Coupons</span>
                        </h3>
                        <div className="widget-body">
                          <div className="coupon">
                            First Shopping Coupon
                            <div className="coupon-tip">
                              <div className="coupon-info-title">
                                FREE Shipping Coupon
                              </div>
                              <div className="coupon-info-date">
                                April 30, 2021
                              </div>
                              <div>Test coupon for vendor page</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End of Widget */}
                      <div className="widget widget-collapsible widget-time">
                        <h3 className="widget-title">
                          <span>
                            <i className="far fa-clock" />
                            Store Time
                          </span>
                        </h3>
                        <ul className="widget-body">
                          <li>
                            <span>Monday:</span>9:00 - 10:00 pm
                          </li>
                          <li>
                            <span>Tuesday:</span>9:00 - 10:00 pm
                          </li>
                          <li>
                            <span>Wednesday:</span>9:00 - 10:00 pm
                          </li>
                          <li>
                            <span>Thursday:</span>9:00 - 2:00 pm
                          </li>
                          <li>
                            <span>Friday:</span>9:00 - 10:00 pm
                          </li>
                          <li>
                            <span>Saturday:</span>9:00 - 10:00 pm
                          </li>
                          <li>
                            <span>Sunday:</span>9:00 - 10:00 pm
                          </li>
                        </ul>
                      </div>
                      {/* End of Widget */}
                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <span>
                            <i className="w-icon-truck" />
                            Shipping Rules
                          </span>
                        </h3>
                        <div className="widget-body">
                          <p className="mb-0">
                            Delivery Time: 1-2 business days
                          </p>
                        </div>
                      </div>
                      {/* End of Widget */}
                      <div className="widget widget-collapsible widget-location">
                        <h3 className="widget-title">
                          <span>Store Location</span>
                        </h3>
                        <div className="widget-body">
                          <div className="google-map" id="googlemaps">
                            <GoogleMapReact
                              //   bootstrapURLKeys={ key: /* YOUR KEY HERE */ }
                              defaultCenter={defaultProps.center}
                              defaultZoom={defaultProps.zoom}
                            >
                              <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                              />
                            </GoogleMapReact>
                          </div>
                        </div>
                      </div>
                      {/* End of Widget */}
                      <div className="widget widget-collapsible widget-products">
                        <h3 className="widget-title">
                          <span>Best Selling</span>
                        </h3>
                        <div className="widget-body">
                          <div className="product product-widget">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("../../images/shop/1.jpg")}
                                  alt="Product"
                                  width={100}
                                  height={106}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h4 className="product-name">
                                <a href="product-default.html">3D Television</a>
                              </h4>
                              <div className="ratings-container">
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                              </div>
                              <div className="product-price">$220.00</div>
                            </div>
                          </div>
                          <div className="product product-widget">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("../../images/shop/2-1.jpg")}
                                  alt="Product"
                                  width={100}
                                  height={106}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h4 className="product-name">
                                <a href="product-default.html">
                                  Alarm Clock With Lamp
                                </a>
                              </h4>
                              <div className="ratings-container">
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                              </div>
                              <div className="product-price">
                                <ins className="new-price">$30.00</ins>
                                <del className="old-price">$60.00</del>
                              </div>
                            </div>
                          </div>
                          <div className="product product-widget">
                            <figure className="product-media">
                              <a href="product-default.html">
                                <img
                                  src={require("../../images/shop/3.jpg")}
                                  alt="Product"
                                  width={100}
                                  height={106}
                                />
                              </a>
                            </figure>
                            <div className="product-details">
                              <h4 className="product-name">
                                <a href="product-default.html">Apple Laptop</a>
                              </h4>
                              <div className="ratings-container">
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                                <i
                                  class="fa-solid fa-star"
                                  style={{ color: "gold" }}
                                ></i>
                              </div>
                              <div className="product-price">$1,000.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End of Widget */}
                    </div>
                  </div>
                </aside>
                {/* End of Sidebar */}
                <div className="main-content">
                  <div className="tab tab-nav-underline tab-nav-boxed tab-vendor-wcfm">
                    <Tabs
                      defaultActiveKey="Products"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="Products" title="Products">
                        <div className="tab-pane active" id="tab-1">
                          <nav className="toolbox sticky-toolbox sticky-content fix-top">
                            <div className="toolbox-left">
                              <div className="toolbox-item toolbox-sort select-box text-dark">
                                <label>Sort By :</label>
                                <select name="orderby" className="form-control">
                                  <option value="default" selected="selected">
                                    Default sorting
                                  </option>
                                  <option value="popularity">
                                    Sort by popularity
                                  </option>
                                  <option value="rating">
                                    Sort by average rating
                                  </option>
                                  <option value="date">Sort by latest</option>
                                  <option value="price-low">
                                    Sort by pric: low to high
                                  </option>
                                  <option value="price-high">
                                    Sort by price: high to low
                                  </option>
                                </select>
                              </div>
                            </div>
                          </nav>
                          <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/1.jpg")}
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
                                      3D Television
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (3 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">
                                      $220.00 - $230.00
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/2-1.jpg")}
                                      alt="Product"
                                      width={300}
                                      height={338}
                                    />
                                    <img
                                      src={require("../../images/shop/2-2.jpg")}
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
                                      Alarm Clock With Lamp
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (10 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">
                                      <ins className="new-price">$30.00</ins>
                                      <del className="old-price">$60.00</del>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/3.jpg")}
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
                                      Apple Laptop
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (5 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">
                                      $1,000.00
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/4.jpg")}
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
                                      Attachable Charge Alarm
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>{" "}
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (7 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">$15.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/5.jpg")}
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
                                      Best Travel Bag
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (4 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">$83.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/6.jpg")}
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
                                      Black Stunt Motor
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (12 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">$374.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/7-1.jpg")}
                                      alt="Product"
                                      width={300}
                                      height={338}
                                    />
                                    <img
                                      src={require("../../images/shop/7-2.jpg")}
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
                                      Blue Sky Trunk
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (9 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">$85.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/8.jpg")}
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
                                      Bodycare Smooth Powder
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (4 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">$25.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/9.jpg")}
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
                                      Bright Green IPhone
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (4 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">$950.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/10.jpg")}
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
                                      Cavin Fashion Suede Handbag
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (4 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">$163.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/11-1.jpg")}
                                      alt="Product"
                                      width={300}
                                      height={338}
                                    />
                                    <img
                                      src={require("../../images/shop/11-2.jpg")}
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
                                      Charming Design Watch
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (10 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">$30.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-wrap">
                              <div className="product product-simple text-center">
                                <figure className="product-media">
                                  <a href="product-default.html">
                                    <img
                                      src={require("../../images/shop/12.jpg")}
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
                                      Classic Simple Backpack
                                    </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <i
                                      class="fa-solid fa-star"
                                      style={{ color: "gold" }}
                                    ></i>
                                    <a
                                      href="product-default.html"
                                      className="rating-reviews"
                                    >
                                      (9 reviews)
                                    </a>
                                  </div>
                                  <div className="product-pa-wrapper">
                                    <div className="product-price">$85.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="About" title="About">
                        <div className="tab-pane" id="tab-2">
                          <div className="page-content">
                            <div className="container">
                              <div className="row">
                                <div>
                                  <div
                                    className="vendor-company-description"
                                    style={{
                                      marginTop: "-32px",
                                    }}
                                  >
                                    <h3>Company Profile </h3>
                                    <h4>
                                      We have over 20 years of manufacturing
                                      experience
                                    </h4>
                                    <p>
                                      100 R&D engineers | Samples in 7 days |
                                      100 new items monthly
                                    </p>
                                    <br />
                                    <strong
                                      style={{
                                        fontSize: "14px",
                                      }}
                                    >
                                      Holding over 20 Years of Experience
                                    </strong>
                                    <p>
                                      Established in 1990, Jinjiang Jiaxing
                                      Group Co. Ltd manufactures a wide range of
                                      shoes and garment items, promotional
                                      gifts, keychains, mobile phone charms,
                                      bracelets, shoe charms, mobile phone
                                      cases, EVA bags, hats and more. Our clogs,
                                      with rubber outsole for anti-slip design,
                                      are well received in North America,
                                      Western Europe, Canada and Australia. We
                                      also offer OEM/ODM services.
                                    </p>
                                    <br />
                                    <strong
                                      style={{
                                        fontSize: "14px",
                                      }}
                                    >
                                      Designers with 20 Years of Experience to
                                      Serve You
                                    </strong>
                                    <p>
                                      Our 15-member design team is led by an
                                      Italian designer, and includes 15 staff
                                      members who have about 20 years'
                                      experience in this line. We invest 20
                                      percent of annual sales in R&D every year,
                                      and release 20 new designs monthly to
                                      update your selection.
                                    </p>
                                    <br />
                                    <strong
                                      style={{
                                        fontSize: "14px",
                                      }}
                                    >
                                      200,000 Units Produced Monthly
                                    </strong>
                                    <p>
                                      Our 30,000-square-meter factory is
                                      equipped with automatic machines procured
                                      from Italy, Germany, Taiwan and mainland
                                      China. Our monthly output reaches 200,000
                                      units - enough to fill your volume orders.
                                    </p>
                                    <h3>Basic Information</h3>
                                    <table className="vendor-profile-table">
                                      <tr>
                                        <td className="table-head">
                                          Total Capitalization
                                        </td>
                                        <td className="table-head-details">
                                          More than US$999,999,999
                                        </td>
                                        <td className="table-head">
                                          Country / Region
                                        </td>
                                        <td className="table-head-details">
                                          China
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">
                                          Year Established
                                        </td>
                                        <td className="table-head-details">
                                          1990
                                        </td>
                                        <td className="table-head">
                                          Total Employees
                                        </td>
                                        <td className="table-head-details">
                                          3,000 to 3,499
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">
                                          Company Certificate
                                        </td>
                                        <td className="table-head-details">
                                          NA
                                        </td>
                                        <td className="table-head">
                                          Product Certificate
                                        </td>
                                        <td className="table-head-details">
                                          NA
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">
                                          Business Type
                                        </td>
                                        <td className="table-head-details">
                                          Exporter , Manufacturer
                                        </td>
                                      </tr>
                                    </table>
                                    <h3>Trading Capabilities</h3>
                                    <table className="vendor-profile-table">
                                      <tr>
                                        <td className="table-head">
                                          Total Annual Sales
                                        </td>
                                        <td className="table-head-details">
                                          More than US$999,999,999
                                        </td>
                                        <td className="table-head">
                                          Export Percentage
                                        </td>
                                        <td className="table-head-details">
                                          90 percent to 94 percent
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">
                                          OEM Services
                                        </td>
                                        <td className="table-head-details">
                                          Yes
                                        </td>
                                        <td className="table-head">
                                          Small Orders Accepted
                                        </td>
                                        <td className="table-head-details">
                                          Yes
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">
                                          Main Competitive Advantages
                                        </td>
                                        <td className="table-head-details">
                                          Buyer's Specifications
                                          AcceptedReputationLarge Product
                                          LineExperienced R&D DepartmentOEM
                                          CapabilityProduction
                                          CapacityReliability
                                        </td>
                                        <td className="table-head">
                                          Other Competitive Advantages
                                        </td>
                                        <td className="table-head-details">
                                          Faster Delivery Time
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">
                                          Major Customer
                                        </td>
                                        <td className="table-head-details">
                                          Disney, Coca-Cola, Nike, KFC, M
                                        </td>
                                        <td className="table-head">
                                          Main Markets
                                        </td>
                                        <td className="table-head-details">
                                          Central/South America , North America
                                        </td>
                                      </tr>
                                    </table>
                                    <h3>Business Registration Details</h3>
                                    <table className="vendor-profile-table">
                                      <tr>
                                        <td className="table-head rigister">
                                          Registered Company
                                        </td>
                                        <td className="table-head-details">
                                          Example Supply Pvt Ltd.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head rigister">
                                          Registration Number
                                        </td>
                                        <td className="table-head-details">
                                          000000000000000000
                                        </td>{" "}
                                      </tr>
                                      <tr>
                                        <td className="table-head rigister">
                                          Company Registration Address
                                        </td>
                                        <td className="table-head-details">
                                          Any Street in the any world
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                  <div className="vendor-company-description">
                                    <h3>Production Capacity </h3>
                                    <div className="product-capacity-images">
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/992/G0310146992.jpg" />
                                      </div>
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/992/G0310146992.jpg" />
                                      </div>
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/992/G0310146992.jpg" />
                                      </div>
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/992/G0310146992.jpg" />
                                      </div>
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/992/G0310146992.jpg" />
                                      </div>
                                    </div>
                                    <h3>Factory Information</h3>
                                    <table className="vendor-profile-table">
                                      <tr>
                                        <td className="table-head">
                                          Factory Size
                                        </td>
                                        <td className="table-head-details">
                                          30000 Square Metre
                                        </td>
                                        <td className="table-head">
                                          No. of Production Lines
                                        </td>
                                        <td className="table-head-details">
                                          15
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">
                                          Annual Output Value
                                        </td>
                                        <td className="table-head-details">
                                          NA
                                        </td>
                                        <td className="table-head">
                                          Number of Production Staff
                                        </td>
                                        <td className="table-head-details">
                                          3,000 to 3,499
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">
                                          Contract Manufacturing
                                        </td>
                                        <td className="table-head-details">
                                          NA
                                        </td>
                                        <td className="table-head">
                                          Number of QC Staff
                                        </td>
                                        <td className="table-head-details">
                                          More than 99
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">
                                          Year Established
                                        </td>
                                        <td className="table-head-details">
                                          2000
                                        </td>
                                        <td className="table-head">
                                          Number of R & D Staff
                                        </td>
                                        <td className="table-head-details">
                                          40 to 49
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head">Address</td>
                                        <td className="table-head-details">
                                          Xingban Industrial Area, jinjiang,
                                          Fujian, China
                                        </td>
                                      </tr>
                                    </table>

                                    <h3>Other Production Capacity</h3>
                                    <table className="vendor-profile-table">
                                      <tr>
                                        <td className="table-head rigister">
                                          Machinery/Production Process
                                        </td>
                                        <td className="table-head-details">
                                          We have our own designer team, mold
                                          research and development department,
                                          and the whole production line, packing
                                          process line, wearhouse and more. With
                                          customer's request image or artwork.We
                                          will make an perfect artwork according
                                          to customer's original detail, such as
                                          logo, outline and size.We will engrave
                                          the shapes and outlines and chases to
                                          compare colors on the metal board
                                          accurately to show the effect of
                                          products.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head rigister">
                                          Site Advantages
                                        </td>
                                        <td className="table-head-details">
                                          It takes only 10 minutes to Jinjiang
                                          Airport.
                                        </td>{" "}
                                      </tr>
                                    </table>
                                  </div>
                                  <div className="vendor-company-description">
                                    <h3>Quality Control </h3>
                                    <div className="product-capacity-images">
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/069/G0311056069.jpg" />
                                      </div>
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/069/G0311056069.jpg" />
                                      </div>
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/069/G0311056069.jpg" />
                                      </div>
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/069/G0311056069.jpg" />
                                      </div>
                                      <div>
                                        <img src="https://s.globalsources.com/IMAGES/SPL/GWS/069/G0311056069.jpg" />
                                      </div>
                                    </div>
                                    <h3>Other Quality Control</h3>
                                    <table className="vendor-profile-table">
                                      <tr>
                                        <td className="table-head rigister">
                                          Description of Quality
                                          Control/Technical Support Department
                                        </td>
                                        <td className="table-head-details">
                                          We establish our own quality control
                                          team,and quality checking line to make
                                          sure the products is excellent.Every
                                          step we have quality control.The final
                                          produce need re-checking the quality
                                          in our quality line.So as to assure
                                          the each piece is in perfect quality.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-head rigister">
                                          Quality Control Procedures
                                        </td>
                                        <td className="table-head-details">
                                          When the products into the
                                          process,like from artwork to
                                          engraving, from color fulfill to
                                          print, from packing to wearhouse.
                                        </td>{" "}
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                                <div className="vendor-company-description">
                                  <h3>
                                    Send a direct inquiry to this supplier
                                  </h3>
                                  <p>To: example@gmail.com</p>
                                  <div>
                                    <div>
                                      <p>Message :</p>
                                    </div>
                                    <div>
                                      <textarea
                                        placeholder="Enter product details such as color,size,materials and other specific requirments"
                                        rows={6}
                                        className="send-vendor-message"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <p>Email Address :</p>
                                    </div>
                                    <div>
                                      <input
                                        placeholder="Please enter your business email address"
                                        type="email"
                                        className="send-vendor-email"
                                      />
                                    </div>
                                  </div>
                                  <br />
                                  <button className="btn btn-primary btn-cart send-inqiury">
                                    <i className="fa fa-envelope-o" />{" "}
                                    <span>Send Inquiry</span>
                                  </button>
                                </div>
                                {/* End of Main Content */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Policies" title="Policies">
                        <div className="tab-pane" id="tab-3">
                          <div className="policies-area">
                            <h3 className="title">Shipping Policy</h3>
                            <p>
                              <strong>L</strong>orem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt arcu cursus. Sagittis id consectetur
                              purus ut. Tellus rutrum tellus pelle.
                            </p>
                          </div>
                          <div className="policies-area">
                            <h3 className="title">Refund Policy</h3>
                            <p>
                              <strong>L</strong>orem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt arcu cursus. Sagittis id consectetur
                              purus ut. Tellus rutrum tellus pelle.
                            </p>
                          </div>
                          <div className="policies-area">
                            <h3 className="title text-left">
                              Cancellation / Return / Exchange Policy
                            </h3>
                            <p>
                              <strong>L</strong>orem ipsum dolor sit amet,
                              consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt arcu cursus. Sagittis id consectetur
                              purus ut. Tellus rutrum tellus pelle.
                            </p>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Contact Us" title="Contact Us">
                        <div className="tab-pane" id="tab-4">
                          <div className="page-content mb-8">
                            <div className="container">
                              <div className="row">
                                <div>
                                  <div
                                    className="vendor-company-description"
                                    style={{
                                      marginTop: "20px",
                                    }}
                                  >
                                    <h3>Contact Details </h3>
                                    <div className="row">
                                      <div className="left-vendor-imgae col-lg-3">
                                        <figure>
                                          <img
                                            className="vendor-profile-image"
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                          />
                                        </figure>
                                        <h4
                                          style={{
                                            marginTop: "12px",
                                            marginBottom: "0px",
                                          }}
                                        >
                                          Mr. Peter Wang
                                        </h4>
                                        <p>Marketing Manager</p>
                                      </div>
                                      <div className="right-vendor-info col-lg-8">
                                        <strong>Telephone</strong> :{" "}
                                        <span> 123456444</span>
                                        <br />
                                        <strong>Mobile Phone</strong> :{" "}
                                        <span> 123456444</span>
                                        <br />
                                        <strong>Fax</strong> :{" "}
                                        <span> 123456444</span>
                                        <br />
                                        <strong>Address</strong> :{" "}
                                        <span>Xingban Industrial Area</span>
                                        <br />
                                        <strong>City</strong> :{" "}
                                        <span>Jinjiang</span>
                                        <br />
                                        <strong>Region</strong> :{" "}
                                        <span>China</span>
                                        <br />
                                        <strong>State / Province</strong> :{" "}
                                        <span>China</span>
                                        <br />
                                        <strong>Zip /Postal Code</strong> :{" "}
                                        <span>560068</span>
                                      </div>
                                    </div>
                                    <div className="vendor-company-description">
                                      <h4>
                                        Send a direct inquiry to this supplier
                                      </h4>
                                      <p>To: example@gmail.com</p>
                                      <div>
                                        <div>
                                          <p>Message :</p>
                                        </div>
                                        <div>
                                          <textarea
                                            placeholder="Enter product details such as color,size,materials and other specific requirments"
                                            rows={6}
                                            className="send-vendor-message"
                                          />
                                        </div>
                                      </div>
                                      <div>
                                        <div>
                                          <p>Email Address :</p>
                                        </div>
                                        <div>
                                          <input
                                            placeholder="Please enter your business email address"
                                            type="email"
                                            className="send-vendor-email"
                                          />
                                        </div>
                                      </div>
                                      <br />
                                      <button className="btn btn-primary btn-cart send-inqiury">
                                        <i className="fa fa-envelope-o" />{" "}
                                        <span>Send Inquiry</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                {/* End of Main Content */}
                              </div>
                            </div>
                          </div>
                          {/* End of Reveiw Area */}

                          {/* End of Reveiw Area */}
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
                {/* End of Main Content */}
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
      {/* End of Page-wrapper */}
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
                    <a href="https://www.portotheme.com/html/wolmart/product.html">
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
                      <a href="https://www.portotheme.com/html/wolmart/blog-grid.html">
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
      {/* Start of Quick View */}
      <div className="product product-single product-popup">
        <div className="row gutter-lg">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="product-gallery product-gallery-sticky mb-0">
              <div className="product-single-swiper swiper-container swiper-theme nav-inner row cols-1 gutter-no">
                <figure className="product-image">
                  <img
                    src={require("../../images/products/popup/1-440x494.jpg")}
                    data-zoom-image={require("../../images/products/popup/1-800x900.jpg")}
                    alt="Water Boil Black Utensil"
                    width={800}
                    height={900}
                  />
                </figure>
                <figure className="product-image">
                  <img
                    src={require("../../images/products/popup/2-440x494.jpg")}
                    data-zoom-image={require("../../images/products/popup/2-800x900.jpg")}
                    alt="Water Boil Black Utensil"
                    width={800}
                    height={900}
                  />
                </figure>
                <figure className="product-image">
                  <img
                    src={require("../../images/products/popup/3-440x494.jpg")}
                    data-zoom-image={require("../../images/products/popup/3-800x900.jpg")}
                    alt="Water Boil Black Utensil"
                    width={800}
                    height={900}
                  />
                </figure>
                <figure className="product-image">
                  <img
                    src={require("../../images/products/popup/4-440x494.jpg")}
                    data-zoom-image={require("../../images/products/popup/4-800x900.jpg")}
                    alt="Water Boil Black Utensil"
                    width={800}
                    height={900}
                  />
                </figure>
              </div>
              <div className="product-thumbs-wrap">
                <div className="product-thumbs">
                  <div className="product-thumb active">
                    <img
                      src={require("../../images/products/popup/1-103x116.jpg")}
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb">
                    <img
                      src={require("../../images/products/popup/2-103x116.jpg")}
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb">
                    <img
                      src={require("../../images/products/popup/3-103x116.jpg")}
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb">
                    <img
                      src={require("../../images/products/popup/4-103x116.jpg")}
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                </div>
                <button className="thumb-up disabled">
                  <i className="w-icon-angle-left" />
                </button>
                <button className="thumb-down disabled">
                  <i className="w-icon-angle-right" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 overflow-hidden p-relative">
            <div className="product-details scrollable pl-0">
              <h2 className="product-title">Electronics Black Wrist Watch</h2>
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
                <i class="fa-solid fa-star" style={{ color: "gold" }}></i>
                <i class="fa-solid fa-star" style={{ color: "gold" }}></i>
                <i class="fa-solid fa-star" style={{ color: "gold" }}></i>
                <i class="fa-solid fa-star" style={{ color: "gold" }}></i>
                <i class="fa-solid fa-star" style={{ color: "gold" }}></i>
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
                      className="social-icon social-instagram w-icon-instagram"
                    />
                    <a
                      href="#"
                      className="social-icon social-youtube w-icon-youtube"
                    />
                    <a
                      href="#"
                      className="social-icon social-pinterest w-icon-pinterest"
                    />
                  </div>
                </div>
                <span className="divider d-xs-show" />
                <div className="product-link-wrapper d-flex">
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                  />
                  <a
                    href="#"
                    className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Quick view */}
      {/* Plugin JS File */}
      {/* Main JS */}
      {/* Mirrored from portotheme.com/html/wolmart/vendor-wcfm-store-product-grid.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 28 Mar 2022 10:02:10 GMT */}
    </>
  );
}

export default VendorPage;

import React from "react";

function Footer() {
  return (
    <footer
      className="footer appear-animate"
      data-animation-options="{
      'name': 'fadeIn'
  }"
    >
      <div className="container">
        <div className="footer-newsletter">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-2">
              <a href="demo5.html" className="logo-footer">
                <img
                  src={require("../../images/demos/demo9/globlix logo 02.png")}
                  alt="logo-footer"
                  width={145}
                  height={45}
                />
              </a>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="swiper-slide icon-box icon-box-side text-dark">
                <div className="icon-box-icon d-inline-flex">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="icon-box-content">
                  <h4 className="icon-box-title text-uppercase font-weight-bold">
                    Subscribe To Our Newsletter
                  </h4>
                  <p style={{ color: "#666" }}>
                    Get all the latest information on Events, Sales and Offers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-9 mt-4 mt-lg-0 ">
              <form
                action="#"
                method="get"
                className="input-wrapper input-wrapper-inline input-wrapper-rounded"
              >
                <input
                  type="email"
                  className="form-control mr-2 bg-white text-default"
                  name="email"
                  id="email"
                  placeholder="Your E-mail Address"
                />
                <button className="btn btn-primary btn-rounded" type="submit">
                  Subscribe
                  <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-5 col-sm-6">
              <div className="widget widget-about">
                <div className="widget-body">
                  <p className="widget-about-title">
                    Got Question? Call us 24/7
                  </p>
                  <a href="tel:18005707777" className="widget-about-call">
                    1-800-570-7777
                  </a>
                  <p className="widget-about-desc">
                    Globlix is a free, safe, international e-commerce
                    marketplace that helps small and medium-sized businesses
                    join global markets, Premium trading features, product
                    listings, and buy offers for worldwide.
                    <br />
                    Globlix assist in White labeling, AI Based management and
                    trade guarantees across countries.
                  </p>
                  <label className="label-social d-block text-dark">
                    Social Media
                  </label>
                  <div className="social-icons social-icons-colored">
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
                      className="social-icon social-instagram fa-brands fa-instagram"
                    />
                    <a
                      href="#"
                      className="social-icon social-youtube fa-brands fa-youtube"
                    />
                    <a
                      href="#"
                      className="social-icon social-pinterest fa-brands fa-pinterest"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="widget">
                <h3 className="widget-title">Company</h3>
                <ul className="widget-body">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="#">Team Member</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Affilate</a>
                  </li>
                  <li>
                    <a href="#">Order History</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="widget-body">
                  <li>
                    <a href="#">Track My Order</a>
                  </li>
                  <li>
                    <a href="cart.html">View Cart</a>
                  </li>
                  <li>
                    <a href="login.html">Sign In</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="wishlist.html">My Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>
                <ul className="widget-body">
                  <li>
                    <a href="#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="#">Money-back guarantee!</a>
                  </li>
                  <li>
                    <a href="#">Product Returns</a>
                  </li>
                  <li>
                    <a href="#">Support Center</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Term and Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-left">
            <p className="copyright">
              Copyright © 2021 Globlix Store. All Rights Reserved.
            </p>
          </div>
          <div className="footer-right">
            <span className="payment-label mr-lg-8">
              We're using safe payment for
            </span>
            <figure className="payment">
              <img
                src={require("../../images/payment.png")}
                alt="payment"
                width={159}
                height={25}
              />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

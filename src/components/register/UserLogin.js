import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";


function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validTokan, setValidToken] = useState();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState();
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [passwordconfirmation, setPsswordconfirmation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://globlix.com/admin/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => (
          console.log(result),
          setValidToken(result.access_token),
          localStorage.setItem("token", result.access_token)
        )
      )
      .catch((err) => console.log(err));
    if (localStorage.getItem("token") == validTokan) {
      localStorage.setItem("vaild", "accessed");
    } else {
      console.log("access denied");
    }

    if (localStorage.getItem("vaild") == "accessed") {
      navigate("/");
    } else {
      alert("Please Enter correct information");
    }
  };

  const handleSubmitRegoister = (e) => {
    e.preventDefault();
    fetch("http://globlix.com/admin/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        mobile: mobile,
        email: emailReg,
        password: passwordReg,
        password_confirmation: passwordconfirmation,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message == "User successfully registered") {
          navigate("/user-login");
        } else {
          alert("Pass the correct parameters");
        }
        console.log(result)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="authentication-box">
        <div className="container">
          <div className="row">
            <div className="col-md-5 p-0 card-left">
              <div className="card bg-primary">
                <div className="svg-icon">
                  <img src="data:image/png;base64,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"/>
                </div>
                <div className="single-item slick-initialized slick-slider slick-dotted">
                  <div className="slick-list draggable">
                    <div>
                      <div style={{ width: "100%", display: "inline-block" }}>
                        <div>
                          <h3>Welcome to Globlix</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 p-0 card-right">
              <div className="card tab2-card">
                <div className="card-body">
                  <Tabs
                    defaultActiveKey="Login"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="Login" title="Login">
                    <p style={{
                    textAlign : 'center',
                    color: "#000"
                  }}>Are you a Vendor ? <Link to='/vendor-login'> LogIn Here</Link></p>
                      <form className="form-horizontal auth-form">
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-terms">
                          <div className="custom-control custom-checkbox mr-sm-2">
                            <div className="form-check">
                              <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="customControlAutosizing"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customControlAutosizing"
                              >
                                Remember me
                              </label>
                            </div>
                            <a className="btn btn-default forgot-pass">
                              Forget your password
                            </a>
                          </div>
                        </div>
                        <div className="form-button">
                          <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </div>
                        <div className="form-footer">
                          <div className="social-icons social-icon-border-color d-flex justify-content-center">
                            <a
                              href="#"
                              className="social-icon social-facebook fa-brands fa-facebook"
                            />
                            <a
                              href="#"
                              className="social-icon social-twitter fa-brands fa-twitter"
                            />
                            <a
                              href="#"
                              className="social-icon social-google fab fa-google"
                            />
                          </div>
                        </div>
                      </form>
                    </Tab>
                    <Tab eventKey="Register" title="Register">
                    <p style={{
                    textAlign : 'center',
                    color: "#000"
                  }}>Are you a Vendor ? <Link to='/vendor-login'>Register Here</Link></p>
                      <form className="form-horizontal auth-form">
                        
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Fisrt Name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Mobile Number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Email Address"
                            value={emailReg}
                            onChange={(e) => setEmailReg(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Password"
                            value={passwordReg}
                            onChange={(e) => setPasswordReg(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Confirm Password"
                            value={passwordconfirmation}
                            onChange={(e) =>
                              setPsswordconfirmation(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-terms">
                          <div className="custom-control custom-checkbox mr-sm-2">
                            <div className="form-check">
                              <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="customControlAutosizing"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customControlAutosizing"
                              >
                                I agree all statements inTerms & Conditions
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-button">
                          <button
                            className="btn btn-primary"
                            onClick={handleSubmitRegoister}
                          >
                            {" "}
                            Submit
                          </button>
                        </div>
                        <div className="form-footer">
                          <div className="social-icons social-icon-border-color d-flex justify-content-center">
                            <a
                              href="#"
                              className="social-icon social-facebook fa-brands fa-facebook"
                            />
                            <a
                              href="#"
                              className="social-icon social-twitter fa-brands fa-twitter"
                            />
                            <a
                              href="#"
                              className="social-icon social-google fab fa-google"
                            />
                          </div>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="btn btn-primary back-btn">
            Back
          </a>
        </div>
      </div>{" "}
      {/* <div className="page-wrapper"> */}
      {/* Start of Header */}
      {/* End of Header */}
      {/* Start of Main */}
      {/* <main className="main login-page"> */}
      {/* Start of Page Header */}
      {/* End of Page Header */}
      {/* Start of Breadcrumb */}
      {/* End of Breadcrumb */}
      {/* <div className="page-content">
            <div className="container">
              <div className="login-popup">
                <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                  <img
                    src={require("../../images/demos/demo9/globlix logo 02.png")}
                    alt="logo"
                    width={144}
                    height={45}
                    style={{
                      margin: "auto",
                      display: "block",
                    }}
                  />
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    Sign In
                  </h3>
                  <p style={{
                    textAlign : 'center'
                  }}>Are you a Vendor ? <Link to='/log-in'> LogIn Here</Link></p>

                  <div className="form-group">
                    <label>Username or email address *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      required=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-0">
                    <label>Password *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      id="password"
                      required=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-checkbox d-flex align-items-center justify-content-between">
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      id="remember1"
                      name="remember1"
                      required=""
                    />
                    <label htmlFor="remember1">Remember me</label>
                    <a href="#">Forget your password?</a>
                  </div>
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main> */}
      {/* End of Main */}
      {/* Start of Footer */}
      {/* End of Footer */}
      {/* </div> */}
      {/* End of Page Wrapper */}
      {/* Start of Sticky Footer */}
      {/* <div className="sticky-footer sticky-content fix-bottom">
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
          </div> */}
      {/* End of Dropdown Box */}
      {/* </div> */}
      {/* <div className="header-search hs-toggle dir-up">
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
      </div> */}
      {/* End of Sticky Footer */}
      {/* Start of Scroll Top */}
      {/* <a
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
      </a> */}
      {/* End of Scroll Top */}
      {/* Start of Mobile Menu */}
      {/* <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay" /> */}
      {/* End of .mobile-menu-overlay */}
      {/* <a href="#" className="mobile-menu-close">
          <i className="close-icon" />
        </a> */}
      {/* End of .mobile-menu-close */}
      {/* <div className="mobile-menu-container scrollable">
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
          </form> */}
      {/* End of Search Form */}
      {/* <div className="tab">
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
      </div> */}
      {/* End of Mobile Menu */}
      {/* Plugin JS File */}
      {/* Mirrored from portotheme.com/html/wolmart/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 28 Mar 2022 10:03:03 GMT */}
    </>
  );
}

export default UserLogin;

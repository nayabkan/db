import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function AllCategoryProducts() {
  return (
    <>
 
  <Header />
  <main id="pt-pageContent">
    <div className="pt-offset-10 container-indent">
      <div className="container container-fluid-lg">
        <div className="mainSlider-layout">
          <div className="mainSliderSlick mainSliderSlick-js arrow-slick-main">
            <div className="slide">
              <div className="img--holder">
                <picture>
                  <source
                    srcSet={require('../../images/skin-fishing/slide-01-sm.webp')}
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-01-sm.jpg"
                    media="(max-width: 767px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-01-md.webp"
                    media="(max-width: 1024px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-01-md.jpg"
                    media="(max-width: 1024px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-01.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-01.jpg"
                    type="image/jpg"
                  />
                  <img src="images/skin-fishing/slide-01-sm.webp" alt="" />
                </picture>
              </div>
              <div className="slide-content pt-point-h-l">
                <div className="pt-container">
                  <div className="tp-caption1-wd-1 pt-white-color">
                    FLY-FISHING
                  </div>
                  <div className="tp-caption1-wd-2 pt-white-color">
                    GET UP TO
                    <br />
                    50% OFF
                  </div>
                  <div className="tp-caption1-wd-3 pt-white-color">
                    The most quality fishing rods for experts and amateurs.
                  </div>
                  <div className="tp-caption1-wd-4">
                    <a
                      href="listing-left-column.html"
                      target="_blank"
                      className="btn"
                      data-text="Discover Now!"
                    >
                      DISCOVER NOW!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="img--holder">
                <picture>
                  <source
                    srcSet="images/skin-fishing/slide-02-sm.webp"
                    media="(max-width: 767px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-02-sm.jpg"
                    media="(max-width: 767px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-02-md.webp"
                    media="(max-width: 1024px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-02-md.jpg"
                    media="(max-width: 1024px)"
                    type="image/jpg"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-02.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="images/skin-fishing/slide-02.jpg"
                    type="image/jpg"
                  />
                  <img src="images/skin-fishing/slide-02-sm.webp" alt="" />
                </picture>
              </div>
              <div className="slide-content pt-point-h-l">
                <div
                  className="pt-container"
                  data-animation="fadeInUpSm"
                  data-animation-delay="0s"
                >
                  <div className="tp-caption1-wd-1 pt-base-color">LURES</div>
                  <div className="tp-caption1-wd-2">
                    Get up to
                    <br />
                    20% Off
                  </div>
                  <div className="tp-caption1-wd-3 pt-base-color3">
                    The most quality lures for experts and amateurs.
                  </div>
                  <div className="tp-caption1-wd-4">
                    <a
                      href="listing-left-column.html"
                      target="_blank"
                      className="btn"
                      data-text="Discover Now!"
                    >
                      DISCOVER NOW!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-offset-60 container-indent">
      <div className="container container-fluid-lg">
        <div className="pt-block-title text-left">
          <h2 className="pt-title">Categories</h2>
        </div>
        <div className="pt-categories-listing">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="pt-items-categories pt-zoom-img">
                <a className="pt-title-block" href="listing-collections.html">
                  <img src={require('../../images/skin-fishing/categories-img-01.jpg')} alt="" />
                  <h2 className="pt-title">
                    Fishing <br />
                    Reels
                  </h2>
                </a>
                <div className="pt-description">
                  <ul>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Reels</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Spinning Reels</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Baitcast Reels</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Spincast Reels</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Line Counter Reels</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Power Assist Reels</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pt-items-categories pt-zoom-img">
                <a className="pt-title-block" href="listing-collections.html">
                  <img src={require('../../images/skin-fishing/categories-img-02.jpg')} alt="" />
                  <h2 className="pt-title">
                    Fishing
                    <br />
                    Rods
                  </h2>
                </a>
                <div className="pt-description">
                  <ul>
                    <li>
                      <a href="listing-collections.html">
                        <span>Spinning Rods</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Casting Rods </span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Rods</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Fly Rods</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pt-items-categories pt-zoom-img">
                <a className="pt-title-block" href="listing-collections.html">
                  <img src={require('../../images/skin-fishing/categories-img-03.jpg')} alt="" />
                  <h2 className="pt-title">Lures</h2>
                </a>
                <div className="pt-description">
                  <ul>
                    <li>
                      <a href="listing-collections.html">
                        <span>Soft Bait Lures</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Lures</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Hard Bait Lures</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Spinnerbaits &amp; Buzzbaits </span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Panfish Lures</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Bass Jigs</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pt-items-categories pt-zoom-img">
                <a className="pt-title-block" href="listing-collections.html">
                  <img src={require('../../images/skin-fishing/categories-img-04.jpg')} alt="" />
                  <h2 className="pt-title">
                    Terminal
                    <br />
                    Tackle
                  </h2>
                </a>
                <div className="pt-description">
                  <ul>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Terminal</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Fish Hooks</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Jig Heads</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Fishing Line</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Weights &amp; Sinkers</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Building &amp; Molds</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pt-items-categories pt-zoom-img">
                <a className="pt-title-block" href="listing-collections.html">
                  <img src={require('../../images/skin-fishing/categories-img-05.jpg')} alt="" />
                  <h2 className="pt-title">
                    Fishing
                    <br /> Accessories
                  </h2>
                </a>
                <div className="pt-description">
                  <ul>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Rod &amp; Reel Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Tools &amp; Pliers</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Bait Buckets &amp;</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Management</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Fillet Knives &amp; Tables</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pt-items-categories pt-zoom-img">
                <a className="pt-title-block" href="listing-collections.html">
                  <img src={require('../../images/skin-fishing/categories-img-06.jpg')} alt="" />
                  <h2 className="pt-title">
                    Fly
                    <br />
                    Fishing
                  </h2>
                </a>
                <div className="pt-description">
                  <ul>
                    <li>
                      <a href="listing-collections.html">
                        <span>Flies &amp; Fly Tying</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Fly Line, Leader &amp; Tippet </span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Fly Fishing Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Fly Rods, Reels &amp; Outfits </span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Sun Protection &amp; Apparel </span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Fly Fishing Waders</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pt-items-categories pt-zoom-img">
                <a className="pt-title-block" href="listing-collections.html">
                  <img src={require('../../images/skin-fishing/categories-img-07.jpg')} alt="" />
                  <h2 className="pt-title">
                    Saltwater
                    <br />
                    Fishing
                  </h2>
                </a>
                <div className="pt-description">
                  <ul>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Lures</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Terminal</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Rods</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Reels</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Saltwater Combos</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="pt-items-categories pt-zoom-img">
                <a className="pt-title-block" href="listing-collections.html">
                  <img src={require('../../images/skin-fishing/categories-img-08.jpg')} alt="" />
                  <h2 className="pt-title">
                    Ice
                    <br /> Fishing
                  </h2>
                </a>
                <div className="pt-description">
                  <ul>
                    <li>
                      <a href="listing-collections.html">
                        <span>Lures &amp; Bait</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Shelters &amp; Sleds</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Ice Fishing Clothing</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Accessorie</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Terminal</span>
                      </a>
                    </li>
                    <li>
                      <a href="listing-collections.html">
                        <span>Ice Augers </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-indent">
      <div className="container container-fluid-lg">
        <hr />
        <div className="pt-block-title text-left">
          <h2 className="pt-title">Popular Brands</h2>
        </div>
        <div className="row pt-carousel-brands pt-slider-smoothhiding arrow-location-center-02 pt-arrow-hover">
          <div>
            <a href="empty-not-pages.html" className="pt-item">
              <svg
                width={170}
                height={45}
                viewBox="0 0 170 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={170} height={45} fill="white" />
                <path d="M47 3H52.9495V32.6578H47V3Z" fill="currentColor" />
                <path
                  d="M67.4744 33.0285C65.5656 33.0285 63.818 32.6084 62.2314 31.7681C60.6697 30.903 59.4302 29.7414 58.513 28.2833C57.5958 26.8004 57.1371 25.1692 57.1371 23.3897C57.1371 21.6103 57.5958 19.9914 58.513 18.5333C59.4302 17.0504 60.6697 15.8888 62.2314 15.0485C63.818 14.1835 65.5656 13.7509 67.4744 13.7509C69.3833 13.7509 71.1309 14.1835 72.7175 15.0485C74.304 15.8888 75.5559 17.0504 76.4731 18.5333C77.3903 19.9914 77.8489 21.6103 77.8489 23.3897C77.8489 25.1692 77.3903 26.8004 76.4731 28.2833C75.5559 29.7414 74.304 30.903 72.7175 31.7681C71.1309 32.6084 69.3833 33.0285 67.4744 33.0285ZM67.4744 27.7643C68.7139 27.7643 69.7551 27.3441 70.5979 26.5038C71.4408 25.6388 71.8622 24.6008 71.8622 23.3897C71.8622 22.154 71.4408 21.116 70.5979 20.2757C69.7551 19.4354 68.7139 19.0152 67.4744 19.0152C66.2597 19.0152 65.2186 19.4354 64.3509 20.2757C63.5081 21.116 63.0867 22.154 63.0867 23.3897C63.0867 24.6008 63.5081 25.6388 64.3509 26.5038C65.2186 27.3441 66.2597 27.7643 67.4744 27.7643Z"
                  fill="currentColor"
                />
                <path
                  d="M101.452 14.1217V32.6949C101.452 34.4743 100.981 36.0684 100.039 37.4772C99.0974 38.8859 97.8083 39.9857 96.1722 40.7766C94.5361 41.5922 92.7388 42 90.7804 42C89.1195 42 87.4462 41.6787 85.7605 41.0361C84.0996 40.4182 82.6618 39.5038 81.4471 38.2928L84.7937 34.3631C85.6366 35.2528 86.5538 35.9449 87.5454 36.4392C88.5618 36.9335 89.5905 37.1806 90.6317 37.1806C91.9951 37.1806 93.1355 36.7852 94.0527 35.9943C94.9947 35.2281 95.4657 34.1283 95.4657 32.6949V30.9895C94.1023 32.3489 92.243 33.0285 89.888 33.0285C88.2023 33.0285 86.653 32.6084 85.2399 31.7681C83.8517 30.903 82.7486 29.7414 81.9305 28.2833C81.1372 26.8004 80.7406 25.1692 80.7406 23.3897C80.7406 21.6103 81.1372 19.9914 81.9305 18.5333C82.7486 17.0504 83.8517 15.8888 85.2399 15.0485C86.653 14.1835 88.2023 13.7509 89.888 13.7509C92.1934 13.7509 94.0527 14.4924 95.4657 15.9753V14.1217H101.452ZM91.0779 27.7643C92.3174 27.7643 93.3586 27.3441 94.2014 26.5038C95.0443 25.6388 95.4657 24.6008 95.4657 23.3897C95.4657 22.154 95.0443 21.116 94.2014 20.2757C93.3586 19.4354 92.3174 19.0152 91.0779 19.0152C89.8632 19.0152 88.822 19.4354 87.9544 20.2757C87.1116 21.116 86.6901 22.154 86.6901 23.3897C86.6901 24.6008 87.1116 25.6388 87.9544 26.5038C88.822 27.3441 89.8632 27.7643 91.0779 27.7643Z"
                  fill="currentColor"
                />
                <path
                  d="M115.626 33.0285C113.717 33.0285 111.969 32.6084 110.382 31.7681C108.821 30.903 107.581 29.7414 106.664 28.2833C105.747 26.8004 105.288 25.1692 105.288 23.3897C105.288 21.6103 105.747 19.9914 106.664 18.5333C107.581 17.0504 108.821 15.8888 110.382 15.0485C111.969 14.1835 113.717 13.7509 115.626 13.7509C117.534 13.7509 119.282 14.1835 120.869 15.0485C122.455 15.8888 123.707 17.0504 124.624 18.5333C125.541 19.9914 126 21.6103 126 23.3897C126 25.1692 125.541 26.8004 124.624 28.2833C123.707 29.7414 122.455 30.903 120.869 31.7681C119.282 32.6084 117.534 33.0285 115.626 33.0285ZM115.626 27.7643C116.865 27.7643 117.906 27.3441 118.749 26.5038C119.592 25.6388 120.013 24.6008 120.013 23.3897C120.013 22.154 119.592 21.116 118.749 20.2757C117.906 19.4354 116.865 19.0152 115.626 19.0152C114.411 19.0152 113.37 19.4354 112.502 20.2757C111.659 21.116 111.238 22.154 111.238 23.3897C111.238 24.6008 111.659 25.6388 112.502 26.5038C113.37 27.3441 114.411 27.7643 115.626 27.7643Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="empty-not-pages.html" className="pt-item">
              <svg
                width={170}
                height={45}
                viewBox="0 0 170 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={170} height={45} fill="white" />
                <path
                  d="M36.5718 35.0064C37.2252 35.0064 37.7698 34.7994 38.2054 34.3853C38.6683 33.9437 38.9133 33.4193 38.9406 32.8121V13.2293C38.9133 12.6221 38.6547 12.0977 38.1646 11.6561C37.7017 11.2144 37.1436 10.9936 36.4901 10.9936H36V10.5796H44.4541V10.9936H43.964C43.3106 10.9936 42.7388 11.2144 42.2487 11.6561C41.7858 12.0977 41.5544 12.6221 41.5544 13.2293V34.1369H47.9256C49.1781 34.1369 50.2399 33.9161 51.1112 33.4745C51.9825 33.0329 52.6359 32.5085 53.0716 31.9013C53.5344 31.2941 53.9837 30.4936 54.4193 29.5H54.8277L52.5815 35.4204H36V35.0064H36.5718Z"
                  fill="currentColor"
                />
                <path
                  d="M64.3539 11.6561C66.4504 10.552 68.7511 10 71.2561 10C73.7882 10 76.1025 10.552 78.1991 11.6561C80.2956 12.7325 81.9564 14.2643 83.1817 16.2516C84.4341 18.2389 85.0603 20.4883 85.0603 23C85.0603 25.5117 84.4341 27.7611 83.1817 29.7484C81.9564 31.7357 80.2956 33.2813 78.1991 34.3853C76.1025 35.4618 73.9516 36 71.7462 36C69.5407 36 67.594 35.6826 65.9059 35.0478C64.2178 34.4129 62.7475 33.5297 61.495 32.3981C60.2698 31.2665 59.2896 29.8864 58.5545 28.258C57.8466 26.6295 57.4926 24.7251 57.4926 22.5446C57.4926 20.3365 58.1052 18.2389 59.3305 16.2516C60.5829 14.2643 62.2574 12.7325 64.3539 11.6561ZM63.5779 31.4873C65.6472 33.6677 68.2066 34.758 71.2561 34.758C74.3055 34.758 76.8649 33.6677 78.9342 31.4873C81.0035 29.2792 82.0381 26.4501 82.0381 23C82.0381 19.5499 81.0035 16.7346 78.9342 14.5541C76.8649 12.3461 74.3055 11.242 71.2561 11.242C68.2066 11.242 65.6472 12.3461 63.5779 14.5541C61.5359 16.7346 60.5149 19.5499 60.5149 23C60.5149 26.4501 61.5359 29.2792 63.5779 31.4873Z"
                  fill="currentColor"
                />
                <path
                  d="M102.516 36C98.4595 35.9724 95.2059 34.7994 92.7554 32.4809C90.3321 30.1348 89.1205 26.9745 89.1205 23C89.1205 18.9979 90.3321 15.8376 92.7554 13.5191C95.2059 11.173 98.3506 10 102.19 10C106.056 10 109.337 10.828 112.032 12.4841L112.931 18.3631H112.563C111.992 15.9342 110.875 14.1401 109.214 12.9809C107.581 11.8217 105.253 11.242 102.231 11.242C99.2355 11.242 96.785 12.3047 94.8791 14.4299C93.0004 16.5276 92.0611 19.3843 92.0611 23C92.0611 26.6157 93.014 29.4862 94.92 31.6115C96.8259 33.7091 99.4533 34.758 102.802 34.758C106.178 34.758 109.078 33.5573 111.501 31.156L111.542 25.6497C111.57 25.1529 111.406 24.7665 111.052 24.4904C110.725 24.1868 110.263 24.035 109.664 24.035H109.092V23.621H116.566V24.035H115.994C114.769 24.035 114.156 24.587 114.156 25.6911V30.6592C113.013 32.0945 111.433 33.3503 109.419 34.4268C107.431 35.4756 105.13 36 102.516 36Z"
                  fill="currentColor"
                />
                <path
                  d="M126.294 11.6561C128.39 10.552 130.691 10 133.196 10C135.728 10 138.042 10.552 140.139 11.6561C142.235 12.7325 143.896 14.2643 145.121 16.2516C146.374 18.2389 147 20.4883 147 23C147 25.5117 146.374 27.7611 145.121 29.7484C143.896 31.7357 142.235 33.2813 140.139 34.3853C138.042 35.4618 135.891 36 133.686 36C131.48 36 129.534 35.6826 127.846 35.0478C126.157 34.4129 124.687 33.5297 123.435 32.3981C122.209 31.2665 121.229 29.8864 120.494 28.258C119.786 26.6295 119.432 24.7251 119.432 22.5446C119.432 20.3365 120.045 18.2389 121.27 16.2516C122.523 14.2643 124.197 12.7325 126.294 11.6561ZM125.518 31.4873C127.587 33.6677 130.146 34.758 133.196 34.758C136.245 34.758 138.805 33.6677 140.874 31.4873C142.943 29.2792 143.978 26.4501 143.978 23C143.978 19.5499 142.943 16.7346 140.874 14.5541C138.805 12.3461 136.245 11.242 133.196 11.242C130.146 11.242 127.587 12.3461 125.518 14.5541C123.476 16.7346 122.455 19.5499 122.455 23C122.455 26.4501 123.476 29.2792 125.518 31.4873Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="empty-not-pages.html" className="pt-item">
              <svg
                width={170}
                height={45}
                viewBox="0 0 170 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={170} height={45} fill="white" />
                <path
                  d="M43.9276 5.72636V38.4124H46.8552V40.5914H41V5.72636H43.9276Z"
                  fill="currentColor"
                />
                <path
                  d="M75.8382 37.3228C75.8382 37.9584 75.7162 38.5107 75.4723 38.9798C75.2435 39.4338 74.931 39.8121 74.5345 40.1148C74.1381 40.4174 73.6883 40.6368 73.1851 40.773C72.6819 40.9243 72.1635 41 71.6298 41C71.0656 41 70.5091 40.9168 69.9602 40.7503C69.4113 40.599 68.9233 40.372 68.4964 40.0694C68.0694 39.7516 67.7187 39.3657 67.4443 38.9117C67.1851 38.4426 67.0555 37.913 67.0555 37.3228V8.99496C67.0555 8.41992 67.1851 7.91299 67.4443 7.47415C67.7187 7.02018 68.0694 6.64187 68.4964 6.33922C68.9386 6.03657 69.4341 5.80958 69.983 5.65826C70.532 5.4918 71.0885 5.40858 71.6527 5.40858C72.1864 5.40858 72.7048 5.48424 73.208 5.63556C73.7111 5.77175 74.1533 5.99117 74.5345 6.29382C74.931 6.58134 75.2435 6.95208 75.4723 7.40605C75.7162 7.86003 75.8382 8.38966 75.8382 8.99496V37.3228ZM72.9106 8.99496C72.9106 8.48045 72.781 8.11728 72.5218 7.90542C72.2778 7.67844 71.9881 7.56494 71.6527 7.56494C71.4545 7.56494 71.2562 7.60277 71.058 7.67844C70.8598 7.73897 70.6768 7.83733 70.5091 7.97352C70.3566 8.09458 70.227 8.2459 70.1203 8.42749C70.0288 8.59395 69.983 8.7831 69.983 8.99496V37.3228C69.983 37.5347 70.0288 37.7314 70.1203 37.913C70.227 38.0946 70.3566 38.2459 70.5091 38.367C70.6768 38.488 70.8522 38.5864 71.0351 38.662C71.2334 38.7226 71.4316 38.7528 71.6298 38.7528C71.9653 38.7528 72.2626 38.6469 72.5218 38.4351C72.781 38.2081 72.9106 37.8373 72.9106 37.3228V8.99496Z"
                  fill="currentColor"
                />
                <path
                  d="M100.43 37.3228C100.43 37.8676 100.544 38.2459 100.773 38.4578C101.002 38.6696 101.253 38.7755 101.528 38.7755C101.802 38.7755 102.054 38.6696 102.283 38.4578C102.511 38.2459 102.626 37.8676 102.626 37.3228V25.338H101.894V23.1589H105.553V37.3228C105.553 37.9584 105.439 38.5107 105.21 38.9798C104.981 39.4338 104.676 39.8121 104.295 40.1148C103.914 40.4023 103.479 40.6141 102.992 40.7503C102.519 40.8865 102.031 40.9546 101.528 40.9546C101.025 40.9546 100.529 40.8865 100.041 40.7503C99.5684 40.6141 99.1415 40.4023 98.7603 40.1148C98.3791 39.8121 98.0741 39.4338 97.8454 38.9798C97.6167 38.5107 97.5023 37.9584 97.5023 37.3228V8.63178C97.5023 7.99622 97.6167 7.45145 97.8454 6.99748C98.0741 6.52837 98.3791 6.15006 98.7603 5.86255C99.1415 5.5599 99.5684 5.34048 100.041 5.20429C100.529 5.0681 101.025 5 101.528 5C102.031 5 102.519 5.0681 102.992 5.20429C103.479 5.34048 103.914 5.5599 104.295 5.86255C104.676 6.15006 104.981 6.52081 105.21 6.97478C105.439 7.42875 105.553 7.97352 105.553 8.60908V20.2535H102.626V8.60908C102.626 8.06431 102.511 7.69357 102.283 7.49685C102.054 7.28499 101.802 7.17907 101.528 7.17907C101.253 7.17907 101.002 7.28499 100.773 7.49685C100.544 7.69357 100.43 8.06431 100.43 8.60908V37.3228Z"
                  fill="currentColor"
                />
                <path
                  d="M136 37.3228C136 37.9584 135.878 38.5107 135.634 38.9798C135.405 39.4338 135.093 39.8121 134.696 40.1148C134.3 40.4174 133.85 40.6368 133.347 40.773C132.844 40.9243 132.325 41 131.792 41C131.227 41 130.671 40.9168 130.122 40.7503C129.573 40.599 129.085 40.372 128.658 40.0694C128.231 39.7516 127.881 39.3657 127.606 38.9117C127.347 38.4426 127.217 37.913 127.217 37.3228V8.99496C127.217 8.41992 127.347 7.91299 127.606 7.47415C127.881 7.02018 128.231 6.64187 128.658 6.33922C129.1 6.03657 129.596 5.80958 130.145 5.65826C130.694 5.4918 131.25 5.40858 131.814 5.40858C132.348 5.40858 132.867 5.48424 133.37 5.63556C133.873 5.77175 134.315 5.99117 134.696 6.29382C135.093 6.58134 135.405 6.95208 135.634 7.40605C135.878 7.86003 136 8.38966 136 8.99496V37.3228ZM133.072 8.99496C133.072 8.48045 132.943 8.11728 132.684 7.90542C132.44 7.67844 132.15 7.56494 131.814 7.56494C131.616 7.56494 131.418 7.60277 131.22 7.67844C131.022 7.73897 130.839 7.83733 130.671 7.97352C130.518 8.09458 130.389 8.2459 130.282 8.42749C130.191 8.59395 130.145 8.7831 130.145 8.99496V37.3228C130.145 37.5347 130.191 37.7314 130.282 37.913C130.389 38.0946 130.518 38.2459 130.671 38.367C130.839 38.488 131.014 38.5864 131.197 38.662C131.395 38.7226 131.593 38.7528 131.792 38.7528C132.127 38.7528 132.424 38.6469 132.684 38.4351C132.943 38.2081 133.072 37.8373 133.072 37.3228V8.99496Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="empty-not-pages.html" className="pt-item">
              <svg
                width={170}
                height={45}
                viewBox="0 0 170 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={170} height={45} fill="white" />
                <path
                  d="M55.083 33.3286H34V3H40.0267V27.2587H55.083V33.3286Z"
                  fill="currentColor"
                />
                <path
                  d="M80.49 21.8021C80.49 23.494 80.189 25.0732 79.5871 26.5396C78.9851 27.9919 78.1661 29.2538 77.1302 30.3254C76.0943 31.3829 74.8763 32.2218 73.4764 32.8422C72.0905 33.4485 70.5995 33.7516 69.0036 33.7516C67.4217 33.7516 65.9308 33.4485 64.5308 32.8422C63.1449 32.2218 61.9269 31.3829 60.877 30.3254C59.8411 29.2538 59.0221 27.9919 58.4201 26.5396C57.8181 25.0732 57.5172 23.494 57.5172 21.8021C57.5172 20.0819 57.8181 18.4886 58.4201 17.0222C59.0221 15.5559 59.8411 14.2939 60.877 13.2364C61.9269 12.1649 63.1449 11.3259 64.5308 10.7196C65.9308 10.1133 67.4217 9.8102 69.0036 9.8102C70.5995 9.8102 72.0905 10.0992 73.4764 10.6773C74.8763 11.2413 76.0943 12.0521 77.1302 13.1095C78.1661 14.1529 78.9851 15.4149 79.5871 16.8953C80.189 18.3617 80.49 19.9973 80.49 21.8021ZM74.7153 21.8021C74.7153 20.8715 74.5613 20.0325 74.2533 19.2852C73.9594 18.5239 73.5534 17.8753 73.0354 17.3395C72.5174 16.7896 71.9085 16.3736 71.2085 16.0916C70.5225 15.7956 69.7876 15.6475 69.0036 15.6475C68.2196 15.6475 67.4777 15.7956 66.7777 16.0916C66.0917 16.3736 65.4898 16.7896 64.9718 17.3395C64.4678 17.8753 64.0688 18.5239 63.7749 19.2852C63.4809 20.0325 63.3339 20.8715 63.3339 21.8021C63.3339 22.6762 63.4809 23.487 63.7749 24.2343C64.0688 24.9816 64.4678 25.6302 64.9718 26.18C65.4898 26.7299 66.0917 27.167 66.7777 27.4913C67.4777 27.8015 68.2196 27.9566 69.0036 27.9566C69.7876 27.9566 70.5225 27.8086 71.2085 27.5125C71.9085 27.2164 72.5174 26.8004 73.0354 26.2646C73.5534 25.7289 73.9594 25.0803 74.2533 24.3189C74.5613 23.5575 74.7153 22.7185 74.7153 21.8021Z"
                  fill="currentColor"
                />
                <path
                  d="M101.382 21.8021C101.382 21.0125 101.228 20.2511 100.92 19.5179C100.626 18.7706 100.22 18.115 99.7024 17.551C99.1844 16.9729 98.5755 16.5146 97.8755 16.1762C97.1895 15.8238 96.4546 15.6475 95.6706 15.6475C94.8867 15.6475 94.1447 15.7815 93.4447 16.0493C92.7588 16.3172 92.1568 16.712 91.6388 17.2337C91.1348 17.7554 90.7359 18.404 90.4419 19.1795C90.1479 19.9409 90.0009 20.8151 90.0009 21.8021C90.0009 22.7467 90.1479 23.5998 90.4419 24.3612C90.7359 25.1085 91.1348 25.75 91.6388 26.2858C92.1568 26.8216 92.7588 27.2375 93.4447 27.5336C94.1447 27.8156 94.8867 27.9566 95.6706 27.9566C96.4546 27.9566 97.1895 27.7874 97.8755 27.449C98.5755 27.0965 99.1844 26.6383 99.7024 26.0743C100.22 25.4962 100.626 24.8406 100.92 24.1074C101.228 23.3601 101.382 22.5916 101.382 21.8021ZM107.157 30.4734C107.157 32.0667 106.856 33.5613 106.254 34.9572C105.652 36.353 104.826 37.5727 103.776 38.6161C102.74 39.6594 101.522 40.4843 100.122 41.0906C98.7365 41.6969 97.2525 42 95.6706 42L92.7938 41.9577V36.1838L95.6286 36.2261C96.5246 36.2261 97.2875 36.1063 97.9175 35.8666C98.5475 35.641 99.0794 35.3238 99.5134 34.9149C99.9474 34.5201 100.29 34.0618 100.542 33.5401C100.808 33.0184 101.018 32.4685 101.172 31.8905C100.948 32.257 100.626 32.5602 100.206 32.7999C99.7864 33.0255 99.3174 33.2088 98.7995 33.3498C98.2955 33.5049 97.7635 33.6106 97.2035 33.667C96.6576 33.7234 96.1466 33.7516 95.6706 33.7516C94.0887 33.7516 92.5978 33.4767 91.1978 32.9268C89.8119 32.3769 88.594 31.5944 87.544 30.5792C86.5081 29.5499 85.6891 28.295 85.0871 26.8145C84.4852 25.3341 84.1842 23.6632 84.1842 21.8021C84.1842 20.096 84.4852 18.5098 85.0871 17.0434C85.6891 15.577 86.5081 14.308 87.544 13.2364C88.594 12.1649 89.8119 11.3259 91.1978 10.7196C92.5978 10.1133 94.0887 9.8102 95.6706 9.8102C96.3986 9.8102 97.1195 9.90184 97.8335 10.0851C98.5475 10.2684 99.2404 10.5222 99.9124 10.8465C100.584 11.1708 101.221 11.5515 101.823 11.9886C102.439 12.4257 103.013 12.898 103.545 13.4056L105.771 10.7196H107.157V30.4734Z"
                  fill="currentColor"
                />
                <path
                  d="M135 21.8021C135 23.494 134.699 25.0732 134.097 26.5396C133.495 27.9919 132.676 29.2538 131.64 30.3254C130.604 31.3829 129.386 32.2218 127.986 32.8422C126.6 33.4485 125.109 33.7516 123.514 33.7516C121.932 33.7516 120.441 33.4485 119.041 32.8422C117.655 32.2218 116.437 31.3829 115.387 30.3254C114.351 29.2538 113.532 27.9919 112.93 26.5396C112.328 25.0732 112.027 23.494 112.027 21.8021C112.027 20.0819 112.328 18.4886 112.93 17.0222C113.532 15.5559 114.351 14.2939 115.387 13.2364C116.437 12.1649 117.655 11.3259 119.041 10.7196C120.441 10.1133 121.932 9.8102 123.514 9.8102C125.109 9.8102 126.6 10.0992 127.986 10.6773C129.386 11.2413 130.604 12.0521 131.64 13.1095C132.676 14.1529 133.495 15.4149 134.097 16.8953C134.699 18.3617 135 19.9973 135 21.8021ZM129.225 21.8021C129.225 20.8715 129.071 20.0325 128.763 19.2852C128.469 18.5239 128.063 17.8753 127.545 17.3395C127.027 16.7896 126.418 16.3736 125.718 16.0916C125.032 15.7956 124.298 15.6475 123.514 15.6475C122.73 15.6475 121.988 15.7956 121.288 16.0916C120.602 16.3736 120 16.7896 119.482 17.3395C118.978 17.8753 118.579 18.5239 118.285 19.2852C117.991 20.0325 117.844 20.8715 117.844 21.8021C117.844 22.6762 117.991 23.487 118.285 24.2343C118.579 24.9816 118.978 25.6302 119.482 26.18C120 26.7299 120.602 27.167 121.288 27.4913C121.988 27.8015 122.73 27.9566 123.514 27.9566C124.298 27.9566 125.032 27.8086 125.718 27.5125C126.418 27.2164 127.027 26.8004 127.545 26.2646C128.063 25.7289 128.469 25.0803 128.763 24.3189C129.071 23.5575 129.225 22.7185 129.225 21.8021Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="empty-not-pages.html" className="pt-item">
              <svg
                width={170}
                height={45}
                viewBox="0 0 170 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={170} height={45} fill="white" />
                <path
                  d="M43.6903 31.5758H55.3364V36.6259H37V9.39279H43.6903V31.5758Z"
                  fill="currentColor"
                />
                <path
                  d="M80.4394 23.5705C80.4394 26.2265 79.9375 28.5769 78.9336 30.6219C77.9297 32.6669 76.5002 34.2443 74.6449 35.354C72.8024 36.4513 70.6994 37 68.3358 37C65.9723 37 63.8756 36.4701 62.0458 35.4102C60.216 34.3378 58.7864 32.8103 57.7571 30.8277C56.7406 28.845 56.2069 26.5694 56.156 24.0007V22.4669C56.156 19.7985 56.6516 17.448 57.6428 15.4155C58.6466 13.3705 60.0762 11.7931 61.9314 10.6834C63.7994 9.57359 65.9215 9.0187 68.2977 9.0187C70.6485 9.0187 72.7452 9.56736 74.5877 10.6647C76.4303 11.762 77.8598 13.3269 78.8764 15.3594C79.9057 17.3794 80.4267 19.6987 80.4394 22.3173V23.5705ZM73.6347 22.4295C73.6347 19.7237 73.1709 17.6725 72.2433 16.2759C71.3284 14.8668 70.0132 14.1623 68.2977 14.1623C64.943 14.1623 63.1704 16.6313 62.9798 21.5691L62.9607 23.5705C62.9607 26.2389 63.4118 28.2901 64.314 29.7241C65.2162 31.1581 66.5568 31.8751 68.3358 31.8751C70.0259 31.8751 71.3284 31.1706 72.2433 29.7615C73.1582 28.3525 73.622 26.3262 73.6347 23.6827V22.4295Z"
                  fill="currentColor"
                />
                <path
                  d="M106.61 33.2592C105.58 34.3814 104.075 35.2855 102.092 35.9713C100.11 36.6571 97.9371 37 95.5736 37C91.9394 37 89.0358 35.9089 86.8628 33.7268C84.6899 31.5446 83.5272 28.5084 83.3747 24.6179L83.3557 22.2612C83.3557 19.5803 83.8385 17.2423 84.8043 15.2472C85.77 13.2396 87.1488 11.6996 88.9405 10.6273C90.7449 9.54242 92.8288 9 95.1924 9C98.6487 9 101.33 9.77934 103.236 11.338C105.155 12.8842 106.273 15.1973 106.591 18.2772H100.148C99.9194 16.756 99.4239 15.6711 98.6614 15.0227C97.899 14.3743 96.8189 14.0501 95.4211 14.0501C93.7438 14.0501 92.4476 14.7484 91.5327 16.145C90.6178 17.5415 90.154 19.5366 90.1413 22.1303V23.7762C90.1413 26.4945 90.6115 28.5395 91.5518 29.9112C92.5048 31.2703 93.9979 31.9499 96.0311 31.9499C97.7719 31.9499 99.0681 31.5696 99.9194 30.809V26.5818H95.2686V22.0741H106.61V33.2592Z"
                  fill="currentColor"
                />
                <path
                  d="M134 23.5705C134 26.2265 133.498 28.5769 132.494 30.6219C131.49 32.6669 130.061 34.2443 128.206 35.354C126.363 36.4513 124.26 37 121.896 37C119.533 37 117.436 36.4701 115.606 35.4102C113.777 34.3378 112.347 32.8103 111.318 30.8277C110.301 28.845 109.767 26.5694 109.717 24.0007V22.4669C109.717 19.7985 110.212 17.448 111.203 15.4155C112.207 13.3705 113.637 11.7931 115.492 10.6834C117.36 9.57359 119.482 9.0187 121.858 9.0187C124.209 9.0187 126.306 9.56736 128.148 10.6647C129.991 11.762 131.42 13.3269 132.437 15.3594C133.466 17.3794 133.987 19.6987 134 22.3173V23.5705ZM127.195 22.4295C127.195 19.7237 126.732 17.6725 125.804 16.2759C124.889 14.8668 123.574 14.1623 121.858 14.1623C118.504 14.1623 116.731 16.6313 116.54 21.5691L116.521 23.5705C116.521 26.2389 116.972 28.2901 117.875 29.7241C118.777 31.1581 120.117 31.8751 121.896 31.8751C123.587 31.8751 124.889 31.1706 125.804 29.7615C126.719 28.3525 127.183 26.3262 127.195 23.6827V22.4295Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="empty-not-pages.html" className="pt-item">
              <svg
                width={170}
                height={45}
                viewBox="0 0 170 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={170} height={45} fill="white" />
                <path
                  d="M56.9238 6.73733C56.0468 6.7733 55.4068 6.86921 55.0039 7.02507C54.6128 7.18093 54.3402 7.46866 54.1861 7.88828C54.0439 8.3079 53.9728 8.97929 53.9728 9.90245V28.9112C53.9728 29.6065 54.0202 30.1161 54.115 30.4398C54.2098 30.7515 54.3817 30.9613 54.6305 31.0692C54.8794 31.1771 55.2824 31.2311 55.8394 31.2311H57.0482C57.8896 31.2311 58.8081 30.7995 59.8036 29.9362C60.811 29.073 61.7116 27.9401 62.5057 26.5373C63.2997 25.1226 63.833 23.654 64.1056 22.1313H64.9411C64.87 23.0065 64.8344 24.1335 64.8344 25.5123C64.8344 28.1738 64.9174 30.3619 65.0833 32.0763C63.436 32.0044 60.6569 31.9684 56.746 31.9684C51.0693 31.9684 46.8206 32.0044 44 32.0763V31.339C44.7822 31.303 45.3451 31.2071 45.6888 31.0512C46.0443 30.8954 46.2814 30.6076 46.3999 30.188C46.5302 29.7684 46.5954 29.097 46.5954 28.1738V9.90245C46.5954 8.97929 46.5302 8.3079 46.3999 7.88828C46.2695 7.46866 46.0266 7.18093 45.671 7.02507C45.3273 6.86921 44.7703 6.7733 44 6.73733V6C45.3866 6.07193 47.5494 6.1079 50.4885 6.1079C53.2854 6.1079 55.4305 6.07193 56.9238 6V6.73733Z"
                  fill="currentColor"
                />
                <path
                  d="M76.2649 12.4381C79.2514 12.4381 81.5565 13.2354 83.1801 14.83C84.8037 16.4125 85.6156 18.9842 85.6156 22.545C85.6156 26.0937 84.8037 28.6594 83.1801 30.242C81.5565 31.8125 79.2514 32.5978 76.2649 32.5978C73.2666 32.5978 70.9556 31.8125 69.332 30.242C67.7084 28.6594 66.8966 26.0937 66.8966 22.545C66.8966 18.9842 67.7084 16.4125 69.332 14.83C70.9674 13.2354 73.2784 12.4381 76.2649 12.4381ZM76.2649 13.1755C75.4946 13.1755 74.8724 13.9488 74.3984 15.4954C73.9362 17.042 73.7051 19.3918 73.7051 22.545C73.7051 25.6861 73.9362 28.024 74.3984 29.5586C74.8724 31.0932 75.4946 31.8605 76.2649 31.8605C77.0353 31.8605 77.6515 31.0932 78.1137 29.5586C78.5759 28.024 78.807 25.6861 78.807 22.545C78.807 19.3918 78.5759 17.042 78.1137 15.4954C77.6515 13.9488 77.0353 13.1755 76.2649 13.1755Z"
                  fill="currentColor"
                />
                <path
                  d="M101.455 26.915C103.055 26.915 104.346 27.2567 105.33 27.9401C106.314 28.6114 106.806 29.7084 106.806 31.2311C106.806 32.5379 106.403 33.7847 105.597 34.9717C104.791 36.1586 103.576 37.1237 101.952 37.867C100.341 38.6223 98.3675 39 96.0328 39C93.9351 39 92.2463 38.8501 90.9664 38.5504C89.6983 38.2627 88.7976 37.891 88.2643 37.4354C87.7428 36.9798 87.4821 36.4823 87.4821 35.9428C87.4821 35.2714 87.7191 34.8218 88.1932 34.594C88.6791 34.3782 89.5679 34.1984 90.8597 34.0545C92.1633 33.9106 93.0344 33.5689 93.4729 33.0294H92.2819C91.6656 33.0294 91.0256 32.9215 90.362 32.7057C89.7101 32.5019 89.1413 32.1183 88.6554 31.5548C88.1695 30.9793 87.9265 30.194 87.9265 29.1989C87.9265 28.3837 88.0747 27.6703 88.371 27.0589C88.6791 26.4474 89.1709 25.8779 89.8464 25.3504C90.522 24.8109 91.4523 24.2594 92.6374 23.6959C91.239 23.2643 90.1486 22.6049 89.3665 21.7177C88.5961 20.8185 88.211 19.6916 88.211 18.3368C88.211 17.03 88.5724 15.939 89.2954 15.0638C90.0301 14.1766 91.0375 13.5172 92.3174 13.0856C93.5973 12.654 95.0787 12.4381 96.7616 12.4381C97.5319 12.4381 98.2608 12.4861 98.9482 12.582C98.9245 12.3302 98.9126 12.0785 98.9126 11.8267C98.9126 10.364 99.2504 9.1891 99.9259 8.30191C100.613 7.40272 101.644 6.95313 103.019 6.95313C103.92 6.95313 104.666 7.17493 105.259 7.61853C105.863 8.05014 106.166 8.64959 106.166 9.41689C106.166 9.87248 106.029 10.2861 105.757 10.6578C105.496 11.0174 105.14 11.3052 104.69 11.521C104.24 11.7248 103.736 11.8267 103.179 11.8267C102.349 11.8267 101.68 11.6708 101.17 11.3591C100.673 11.0354 100.258 10.5499 99.9259 9.90245C99.76 10.394 99.677 11.0354 99.677 11.8267C99.677 12.1144 99.6948 12.4022 99.7304 12.6899C101.472 13.0256 102.835 13.667 103.819 14.6142C104.815 15.5613 105.312 16.8022 105.312 18.3368C105.312 19.6436 104.945 20.7406 104.21 21.6278C103.487 22.503 102.486 23.1564 101.206 23.588C99.9259 24.0196 98.4445 24.2354 96.7616 24.2354C95.4935 24.2354 94.344 24.1155 93.3129 23.8757C92.8033 24.2114 92.4359 24.5112 92.2108 24.7749C91.9974 25.0387 91.8908 25.3504 91.8908 25.7101C91.8908 26.5134 92.3233 26.915 93.1885 26.915H101.455ZM96.7616 13.1035C96.1572 13.1035 95.695 13.5052 95.375 14.3084C95.0669 15.1117 94.9128 16.4545 94.9128 18.3368C94.9128 20.2311 95.0669 21.5798 95.375 22.3831C95.695 23.1744 96.1572 23.57 96.7616 23.57C97.3779 23.57 97.8401 23.1744 98.1482 22.3831C98.4682 21.5798 98.6282 20.2311 98.6282 18.3368C98.6282 16.4425 98.4682 15.0997 98.1482 14.3084C97.8401 13.5052 97.3779 13.1035 96.7616 13.1035ZM94.2018 33.0294C94.0358 33.3891 93.9173 33.7967 93.8462 34.2523C93.7751 34.7199 93.7396 35.1095 93.7396 35.4213C93.7396 36.3564 94.0181 37.0817 94.5751 37.5973C95.1321 38.1128 95.9498 38.3706 97.0283 38.3706C97.9645 38.3706 98.7882 38.1967 99.4993 37.849C100.21 37.5014 100.761 37.0098 101.152 36.3744C101.555 35.751 101.757 35.0316 101.757 34.2164C101.757 33.8207 101.627 33.521 101.366 33.3172C101.117 33.1253 100.69 33.0294 100.086 33.0294H94.2018Z"
                  fill="currentColor"
                />
                <path
                  d="M117.649 12.4381C120.636 12.4381 122.941 13.2354 124.565 14.83C126.188 16.4125 127 18.9842 127 22.545C127 26.0937 126.188 28.6594 124.565 30.242C122.941 31.8125 120.636 32.5978 117.649 32.5978C114.651 32.5978 112.34 31.8125 110.716 30.242C109.093 28.6594 108.281 26.0937 108.281 22.545C108.281 18.9842 109.093 16.4125 110.716 14.83C112.352 13.2354 114.663 12.4381 117.649 12.4381ZM117.649 13.1755C116.879 13.1755 116.257 13.9488 115.783 15.4954C115.321 17.042 115.09 19.3918 115.09 22.545C115.09 25.6861 115.321 28.024 115.783 29.5586C116.257 31.0932 116.879 31.8605 117.649 31.8605C118.42 31.8605 119.036 31.0932 119.498 29.5586C119.96 28.024 120.191 25.6861 120.191 22.545C120.191 19.3918 119.96 17.042 119.498 15.4954C119.036 13.9488 118.42 13.1755 117.649 13.1755Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container-indent">
      <div className="container container-fluid-lg">
        <hr />
        <div className="pt-block-title text-left">
          <h4 className="pt-title">Top Products of This Week</h4>
        </div>
        <div className="row arrow-location-center-02 pt-layout-product-item">
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="https://softali.net/victor/yanka/html/images/skin-fishing/product-01.jpg"
                      className="lazyload"
                      data-src="images/skin-fishing/product-01.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Baitcast Reel</a>
                  </h2>
                  <div className="pt-price">$50</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$50</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAQMAAADR7yGMAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAN9JREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7UrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAgw+4AAXCIMJgAAAAASUVORK5CYII=
"
                      className="lazyload"
                      data-src="images/skin-fishing/product-02.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Crankbaits</a>
                  </h2>
                  <div className="pt-price">$35</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$35</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAQMAAADR7yGMAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAN9JREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7UrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAgw+4AAXCIMJgAAAAASUVORK5CYII=
"
                      className="lazyload"
                      data-src="images/skin-fishing/product-03.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Fly Line</a>
                  </h2>
                  <div className="pt-price">$30</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$30</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAQMAAADR7yGMAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAN9JREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7UrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAgw+4AAXCIMJgAAAAASUVORK5CYII=
"
                      className="lazyload"
                      data-src="images/skin-fishing/product-04.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Fly Reels</a>
                  </h2>
                  <div className="pt-price">$60</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$60</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAQMAAADR7yGMAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAN9JREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7UrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAgw+4AAXCIMJgAAAAASUVORK5CYII=
"
                      className="lazyload"
                      data-src="images/skin-fishing/product-05.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Fly Reels</a>
                  </h2>
                  <div className="pt-price">$60</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$60</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAQMAAADR7yGMAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAN9JREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7UrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAgw+4AAXCIMJgAAAAASUVORK5CYII=
"
                      className="lazyload"
                      data-src="images/skin-fishing/product-06.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Swimbait</a>
                  </h2>
                  <div className="pt-price">$15</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$15</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAQMAAADR7yGMAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAN9JREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7UrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAgw+4AAXCIMJgAAAAASUVORK5CYII=
"
                      className="lazyload"
                      data-src="images/skin-fishing/product-07.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Baitcast Reel</a>
                  </h2>
                  <div className="pt-price">$55</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$55</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAQMAAADR7yGMAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAN9JREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7UrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAgw+4AAXCIMJgAAAAASUVORK5CYII=
"
                      className="lazyload"
                      data-src="images/skin-fishing/product-08.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Rubber Mesh Net Large</a>
                  </h2>
                  <div className="pt-price">$25</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$25</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAQMAAADR7yGMAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAN9JREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7UrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAgw+4AAXCIMJgAAAAASUVORK5CYII=
"
                      className="lazyload"
                      data-src="images/skin-fishing/product-09.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Fishing Line</a>
                  </h2>
                  <div className="pt-price">$5</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$5</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-custom-5">
            <div className="pt-product">
              <div className="pt-image-box">
                <div className="pt-app-btn">
                  <a
                    href="#"
                    className="pt-btn-wishlist"
                    data-tooltip="Add to Wishlist"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-wishlist" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-wishlist-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-compare"
                    data-tooltip="Add to Compare"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-compare" />
                    </svg>
                    <svg>
                      <use xlinkHref="#icon-compare-add" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="pt-btn-quickview"
                    data-toggle="modal"
                    data-target="#ModalquickView"
                    data-tooltip="Quick View"
                    data-tposition="left"
                  >
                    <svg>
                      <use xlinkHref="#icon-quick_view" />
                    </svg>
                  </a>
                </div>
                <a href="product-type-03.html">
                  <span className="pt-img">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwAQMAAADR7yGMAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAN9JREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7UrbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAgw+4AAXCIMJgAAAAASUVORK5CYII=
"
                      className="lazyload"
                      data-src="images/skin-fishing/product-10.jpg"
                      alt="image"
                    />
                  </span>
                </a>
              </div>
              <div className="pt-description">
                <div className="pt-col">
                  <ul className="pt-add-info">
                    <li>
                      <a href="#">FISHING</a>
                    </li>
                  </ul>
                  <h2 className="pt-title">
                    <a href="product-type-03.html">Ice Fishing Rod</a>
                  </h2>
                  <div className="pt-price">$205</div>
                </div>
                <div className="pt-col">
                  <div className="pt-row-hover">
                    <a
                      href="#"
                      className="pt-btn-addtocart"
                      data-toggle="modal"
                      data-target="#modalAddToCart"
                    >
                      <div className="pt-icon">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 1.79995H3.85327L5.00953 7.19587C5.01756 7.27998 5.03071 7.36472 5.04926 7.44972L7.01369 16.4497C7.21176 17.3572 7.97605 18 8.85692 18H20.1431C21.024 18 21.7882 17.3572 21.9863 16.4497L23.9507 7.44972C24.2243 6.19649 23.324 5 22.1075 5H6.89249C6.64803 5 6.41635 5.04831 6.20439 5.1357L5.14673 0.199951H0V1.79995ZM6.77097 7.83474L6.78224 7.83233L6.60027 6.98311C6.60296 6.87808 6.63854 6.78609 6.69062 6.71688C6.7608 6.62361 6.83411 6.6 6.89249 6.6H22.1075C22.1659 6.6 22.2392 6.6236 22.3094 6.71688C22.3813 6.81251 22.4218 6.9516 22.3875 7.10852L20.4231 16.1085C20.3728 16.339 20.2141 16.4 20.1431 16.4H8.85692C8.78589 16.4 8.62718 16.339 8.57689 16.1085L6.77097 7.83474Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.5C12 22.8807 10.8807 24 9.5 24C8.11929 24 7 22.8807 7 21.5C7 20.1193 8.11929 19 9.5 19C10.8807 19 12 20.1193 12 21.5ZM10.4 21.5C10.4 21.9971 9.99706 22.4 9.5 22.4C9.00294 22.4 8.6 21.9971 8.6 21.5C8.6 21.0029 9.00294 20.6 9.5 20.6C9.99706 20.6 10.4 21.0029 10.4 21.5Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.5 24C20.8807 24 22 22.8807 22 21.5C22 20.1193 20.8807 19 19.5 19C18.1193 19 17 20.1193 17 21.5C17 22.8807 18.1193 24 19.5 24ZM19.5 22.4C19.9971 22.4 20.4 21.9971 20.4 21.5C20.4 21.0029 19.9971 20.6 19.5 20.6C19.0029 20.6 18.6 21.0029 18.6 21.5C18.6 21.9971 19.0029 22.4 19.5 22.4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="pt-text">ADD TO CART</span>
                    </a>
                    <div className="pt-price">$205</div>
                    <div className="pt-wrapper-btn">
                      <a href="#" className="pt-btn-wishlist">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-wishlist" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-wishlist-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to wishlist</span>
                      </a>
                      <a href="#" className="pt-btn-compare">
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-compare" />
                          </svg>
                          <svg>
                            <use xlinkHref="#icon-compare-add" />
                          </svg>
                        </span>
                        <span className="pt-text">Add to compare</span>
                      </a>
                      <a
                        href="#"
                        className="pt-btn-quickview"
                        data-toggle="modal"
                        data-target="#ModalquickView"
                      >
                        <span className="pt-icon">
                          <svg>
                            <use xlinkHref="#icon-quick_view" />
                          </svg>
                        </span>
                        <span className="pt-text">Zoom</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-indent">
      <div className="container container-fluid-lg">
        <hr />
        <div className="pt-block-title text-left">
          <h4 className="pt-title">Top Products of This Week</h4>
        </div>
        <div className="pt-layout-promo-box">
          <div className="row">
            <div className="col-sm-6">
              <a href="#" className="pt-promo-box">
                <div className="image-box">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7EAAAKaAQMAAADS8UxbAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAHBJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9uCABAAAAEDQ/9f9CBUAAAAAAAAAAAAAAAAAAAAAAGAhOD8AAULiWHMAAAAASUVORK5CYII="
                    className="lazyload"
                    data-src="images/skin-fishing/promo-01.jpg"
                    alt="image"
                  />
                </div>
                <div className="pt-description pr-promo-type2 pt-point-v-t pt-point-h-l">
                  <div className="pt-description-wrapper">
                    <div className="pt-color-white pt-title-small">
                      <span>FEATURED FLY FISHING GEAR!</span>
                    </div>
                    <div className="pt-color-white pt-title-large">
                      <span>Fly Fishing</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6">
              <a href="#" className="pt-promo-box">
                <div className="image-box">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7EAAAKaAQMAAADS8UxbAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAHBJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9uCABAAAAEDQ/9f9CBUAAAAAAAAAAAAAAAAAAAAAAGAhOD8AAULiWHMAAAAASUVORK5CYII="
                    className="lazyload"
                    data-src="images/skin-fishing/promo-02.jpg"
                    alt="image"
                  />
                </div>
                <div className="pt-description pr-promo-type2 pt-point-v-t pt-point-h-l">
                  <div className="pt-description-wrapper">
                    <div className="pt-color-white pt-title-small">
                      <span>FEATURED SALTWATER FISHING GEAR!</span>
                    </div>
                    <div className="pt-color-white pt-title-large">
                      <span>Saltwater Fishing</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6">
              <a href="#" className="pt-promo-box">
                <div className="image-box">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7EAAAKaAQMAAADS8UxbAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAHBJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9uCABAAAAEDQ/9f9CBUAAAAAAAAAAAAAAAAAAAAAAGAhOD8AAULiWHMAAAAASUVORK5CYII="
                    className="lazyload"
                    data-src="images/skin-fishing/promo-03.jpg"
                    alt="image"
                  />
                </div>
                <div className="pt-description pr-promo-type2 pt-point-v-t pt-point-h-l">
                  <div className="pt-description-wrapper">
                    <div className="pt-color-white pt-title-small">
                      <span>FEATURED FISHING REELS</span>
                    </div>
                    <div className="pt-color-white pt-title-large">
                      <span>Fishing Reels</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6">
              <a href="#" className="pt-promo-box">
                <div className="image-box">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7EAAAKaAQMAAADS8UxbAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAHBJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9uCABAAAAEDQ/9f9CBUAAAAAAAAAAAAAAAAAAAAAAGAhOD8AAULiWHMAAAAASUVORK5CYII="
                    className="lazyload"
                    data-src="images/skin-fishing/promo-04.jpg"
                    alt="image"
                  />
                </div>
                <div className="pt-description pr-promo-type2 pt-point-v-t pt-point-h-l">
                  <div className="pt-description-wrapper">
                    <div className="pt-color-white pt-title-small">
                      <span>FEATURED FISHING GEAR!</span>
                    </div>
                    <div className="pt-color-white pt-title-large">
                      <span>Bass Fishing</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-indent">
      <div className="container container-fluid-lg">
        <hr />
        <div className="pt-block-title text-left">
          <h4 className="pt-title">Most Exciting Newsk</h4>
        </div>
        <div className="pt-content-post row arrow-location-center-02">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <div className="pt-post">
              <div className="pt-post-img">
                <a href="blog-listing-col-left.html">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAFaAQMAAADVYCEHAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACFJREFUaN7twQEBAAAAgqD+r26IwAAAAAAAAAAAAAAAIOcvTgABNob+zgAAAABJRU5ErkJggg=="
                    className="lazyload"
                    data-src="images/skin-fishing/blog-img-01.jpg"
                    alt="Color, Size, Material Swatches"
                  />
                </a>
              </div>
              <div className="pt-post-content">
                <h2 className="pt-title">
                  <a href="blog-listing-col-left.html">
                    Color, Size, Material Swatches
                  </a>
                </h2>
                <div className="pt-meta">
                  <div className="pt-autor">
                    BY <span>DIEGO LOPEZ</span> JANUARY 08, 2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <div className="pt-post">
              <div className="pt-post-img">
                <a href="blog-listing-col-left.html">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAFaAQMAAADVYCEHAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACFJREFUaN7twQEBAAAAgqD+r26IwAAAAAAAAAAAAAAAIOcvTgABNob+zgAAAABJRU5ErkJggg=="
                    className="lazyload"
                    data-src="images/skin-fishing/blog-img-02.jpg"
                    alt="Flexible Banners Section"
                  />
                </a>
              </div>
              <div className="pt-post-content">
                <h2 className="pt-title">
                  <a href="blog-listing-col-left.html">
                    Flexible Banners Section
                  </a>
                </h2>
                <div className="pt-meta">
                  <div className="pt-autor">
                    BY <span>DIEGO LOPEZ</span> JANUARY 08, 2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <div className="pt-post">
              <div className="pt-post-img">
                <a href="blog-listing-col-left.html">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAFaAQMAAADVYCEHAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACFJREFUaN7twQEBAAAAgqD+r26IwAAAAAAAAAAAAAAAIOcvTgABNob+zgAAAABJRU5ErkJggg=="
                    className="lazyload"
                    data-src="images/skin-fishing/blog-img-03.jpg"
                    alt="Dynamic Checkout Buttons"
                  />
                </a>
              </div>
              <div className="pt-post-content">
                <h2 className="pt-title">
                  <a href="blog-listing-col-left.html">
                    Dynamic Checkout Buttons
                  </a>
                </h2>
                <div className="pt-meta">
                  <div className="pt-autor">
                    BY <span>DIEGO LOPEZ</span> JANUARY 08, 2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-indent">
      <div className="container container-fluid-lg">
        <hr />
        <div className="pt-block-title text-left">
          <h4 className="pt-title">Reviews</h4>
        </div>
        <div className="pt-reviewsbox-listing js-carousel-reviewsbox row">
          <div className="col-md-6">
            <a href="blog-single-post.html" className="pt-reviewsbox">
              <div className="pt-reviewsbox-description">
                <div className="pt-reviewsbox-title">
                  <h5 className="pt-title">WELL STRUCTURED UI DESIGN</h5>
                  <div className="pt-rating">
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i>
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                  </div>
                </div>
                <p>
                  I really like it because of the well structured UI design and
                  all necessary feature were available to build a best
                  e-commerce platform to sell goods.
                </p>
              </div>
              <div className="pt-reviewsbox-author">
                <div className="pt-img">
                  <img
                    src="images/blog/reviewsbox/reviewsbox-img01.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-title">
                  <strong>DIEGO LOPEZON</strong> — DEVELOPER
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="blog-single-post.html" className="pt-reviewsbox">
              <div className="pt-reviewsbox-description">
                <div className="pt-reviewsbox-title">
                  <h5 className="pt-title">LOTS OF DEMO</h5>
                  <div className="pt-rating">
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i>
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                  </div>
                </div>
                <p>
                  Lots and lots of demo page setups for you to use. The
                  documentation gives step-by-step setup guide for everything.
                </p>
              </div>
              <div className="pt-reviewsbox-author">
                <div className="pt-img">
                  <img
                    src="images/blog/reviewsbox/reviewsbox-img02.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-title">
                  <strong>JULIA</strong> — DEVELOPER
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="blog-single-post.html" className="pt-reviewsbox">
              <div className="pt-reviewsbox-description">
                <div className="pt-reviewsbox-title">
                  <h5 className="pt-title">CUSTOMER SUPPORT</h5>
                  <div className="pt-rating">
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i>
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                  </div>
                </div>
                <p>
                  The customer support was brilliant. During the setup process,
                  I've approached support more than 20 times with different
                  questions.
                </p>
              </div>
              <div className="pt-reviewsbox-author">
                <div className="pt-img">
                  <img
                    src="images/blog/reviewsbox/reviewsbox-img03.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-title">
                  <strong>CHRIS SMITH</strong> — DEVELOPER
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="blog-single-post.html" className="pt-reviewsbox">
              <div className="pt-reviewsbox-description">
                <div className="pt-reviewsbox-title">
                  <h5 className="pt-title">OPTIONS AND CUSTOMIZING</h5>
                  <div className="pt-rating">
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i>
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                  </div>
                </div>
                <p>
                  Overall, a very good theme with lots of options for
                  customizing. You can do pretty much anything with this theme.
                  Thanks Guys.
                </p>
              </div>
              <div className="pt-reviewsbox-author">
                <div className="pt-img">
                  <img
                    src="images/blog/reviewsbox/reviewsbox-img04.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-title">
                  <strong>TOM DAMON</strong> — DEVELOPER
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="blog-single-post.html" className="pt-reviewsbox">
              <div className="pt-reviewsbox-description">
                <div className="pt-reviewsbox-title">
                  <h5 className="pt-title">VIDEO TUTORIALS</h5>
                  <div className="pt-rating">
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i>
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                  </div>
                </div>
                <p>
                  The fact that they are doing videos tutorials for the sections
                  of the set up is great. I am excited to launch my store this
                  weekend. Thanks!!!
                </p>
              </div>
              <div className="pt-reviewsbox-author">
                <div className="pt-img">
                  <img
                    src="images/blog/reviewsbox/reviewsbox-img04.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-title">
                  <strong>JENNIFER HEMSWORTH</strong> — DEVELOPER
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="blog-single-post.html" className="pt-reviewsbox">
              <div className="pt-reviewsbox-description">
                <div className="pt-reviewsbox-title">
                  <h5 className="pt-title">DESIGN AND FEATURES</h5>
                  <div className="pt-rating">
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i className="pt-star">
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                    <i>
                      <svg>
                        <use xlinkHref="#icon-review" />
                      </svg>
                    </i>
                  </div>
                </div>
                <p>
                  The theme is very well designed and offers many features that
                  are not available in other themes. I recommend this theme. It
                  is freaking awesome!
                </p>
              </div>
              <div className="pt-reviewsbox-author">
                <div className="pt-img">
                  <img
                    src="images/blog/reviewsbox/reviewsbox-img05.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-title">
                  <strong>CHRISTIAN</strong> — DEVELOPER
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container-indent">
      <div className="container container-fluid-lg">
        <hr />
        <div className="row pt-services-listing">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a
              href="page-faq.html"
              className="pt-services-block"
              target="_blank"
            >
              <h4 className="pt-title">
                <span className="pt-icon">
                  <svg>
                    <use xlinkHref="#icon-services_delivery" />
                  </svg>
                </span>
                <span className="pt-text">Delivery</span>
              </h4>
              <p>Free shipping on orders over $99.</p>
            </a>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a
              href="page-faq.html"
              className="pt-services-block"
              target="_blank"
            >
              <h4 className="pt-title">
                <span className="pt-icon">
                  <svg>
                    <use xlinkHref="#icon-services_support" />
                  </svg>
                </span>
                <span className="pt-text">Support 24/7</span>
              </h4>
              <p>Contact us 24 hours a day, 7 days a week.</p>
            </a>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a
              href="page-faq.html"
              className="pt-services-block"
              target="_blank"
            >
              <h4 className="pt-title">
                <span className="pt-icon">
                  <svg>
                    <use xlinkHref="#icon-services_return" />
                  </svg>
                </span>
                <span className="pt-text">Return</span>
              </h4>
              <p>Simply return it within 30 days for an exchange.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
  <a href="#" id="js-back-to-top" className="pt-back-to-top">
    <span className="pt-icon">
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style={{ enableBackground: "new 0 0 24 24" }}
        xmlSpace="preserve"
      >
        <g>
          <polygon
            fill="currentColor"
            points="20.9,17.1 12.5,8.6 4.1,17.1 2.9,15.9 12.5,6.4 22.1,15.9 	"
          />
        </g>
      </svg>
    </span>
    <span className="pt-text">BACK TO TOP</span>
  </a>
  {/* modal "Add To Cart" */}
  <div
    className="modal fade"
    id="modalAddToCart"
    tabIndex={-1}
    role="dialog"
    data-srcvalue="ajax-content/ajax_modal-add-to-cart.html"
    aria-label="myModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-sm" />
  </div>
  {/* modal "Add Quick View" */}
  <div
    className="modal fade"
    id="ModalquickView"
    tabIndex={-1}
    role="dialog"
    data-srcvalue="ajax-content/ajax_modal-quick-view.html"
    aria-label="myModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-quick-view" />
  </div>
  {/* modal "Discount" */}
  <div
    className="modal fade"
    id="ModalDiscount"
    tabIndex={-1}
    role="dialog"
    data-srcvalue="ajax-content/ajax_modal-discount.html"
    aria-label="myModalLabel"
    aria-hidden="true"
    data-pause={2000}
    data-localstorage="showedmodal"
  >
    <div className="modal-dialog modal-md" />
  </div>
  <div className="pt-svg-sprite">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-arrow_large_left"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 3l-9 9 9 9" stroke="currentColor" strokeWidth="1.6" />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 12 20"
        id="icon-arrow_large_right"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1l9 9-9 9" stroke="currentColor" strokeWidth="1.6" />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 12 7"
        id="icon-arrow_small_bottom"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.1" />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 12 7"
        id="icon-arrow_small_top"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 6l5-5 5 5" stroke="currentColor" strokeWidth="1.1" />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-cart_1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="transparent" d="M0 0h24v24H0z" />
        <path
          d="M2.792 8.113l.008-.056V8A1.2 1.2 0 0 1 4 6.8h16A1.2 1.2 0 0 1 21.2 8v.057l.008.056 1.991 13.937A1.2 1.2 0 0 1 22 23.2H2a1.2 1.2 0 0 1-1.199-1.15L2.792 8.113z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M17 10c0-4.97-2.239-9-5-9s-5 4.03-5 9"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-cart_1_disable"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.786 5.654c.254-.885.584-1.696.98-2.407C8.732 1.505 10.195.199 12 .199c1.803 0 3.267 1.306 4.235 3.048.395.71.725 1.522.98 2.407l5.22-5.22 1.13 1.13L19.132 6H20a2 2 0 0 1 2 2l2 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2L2 8a2 2 0 0 1 2-2h.869L.434 1.565 1.566.434l5.22 5.22zm1.566.345a9.827 9.827 0 0 1 .812-1.975c.842-1.516 1.878-2.225 2.836-2.225s1.994.709 2.836 2.225c.319.573.594 1.238.812 1.975H8.352zM6.37 7.6A16.71 16.71 0 0 0 6.2 10h1.6c0-.35.012-.696.034-1.034L10.869 12l-9.128 9.128L3.6 8.113v-.114c0-.22.18-.4.4-.4h2.37zM12 13.131l-9.269 9.268H21.27L12 13.131zm10.26 7.996l-9.129-9.128 3.035-3.034c.022.338.034.683.034 1.034h1.6c0-.825-.059-1.63-.17-2.4H20c.22 0 .4.18.4.4v.114l1.86 13.014zM12 10.867L8.731 7.6h6.538L12 10.868z"
          fill="currentColor"
        />
      </symbol>
      <symbol
        viewBox="0 0 24 23.8"
        id="icon-cart_1_plus"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <path d="M22 8c0-1.1-.9-2-2-2h-2.7C16.4 2.6 14.4.2 12 .2S7.6 2.6 6.7 6H4c-1.1 0-2 .9-2 2L0 22v.1C0 23.2.9 24 2 24h20c1.1 0 2-.8 2-1.9V22L22 8zM12 1.8c1.5 0 2.9 1.7 3.6 4.2H8.4c.7-2.5 2.1-4.2 3.6-4.2zm10 20.6H2c-.2 0-.4-.1-.4-.3l2-13.9V8c0-.2.2-.4.4-.4h2.4c-.1.8-.2 1.6-.2 2.4h1.6c0-.8.1-1.6.2-2.4h8c.1.8.2 1.6.2 2.4h1.6c0-.8-.1-1.6-.2-2.4H20c.2 0 .4.2.4.5l2 14c0 .2-.2.3-.4.3z" />
          <path d="M12.8 11h-1.6v3.2H8v1.6h3.2V19h1.6v-3.2H16v-1.6h-3.2z" />
        </g>
      </symbol>
      <symbol
        viewBox="0 0 24.2 23.8"
        id="icon-cart_2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.1 5H6.9c-.3 0-.5.1-.7.1L5.1.2H0v1.6h3.9L5 7.3v.1l2 9c.2 1 1 1.6 1.9 1.6h11.3c.9 0 1.6-.6 1.8-1.6l2-9c.2-1.2-.7-2.4-1.9-2.4zm-1.7 11.1c0 .2-.2.3-.3.3H8.9c-.1 0-.2-.1-.3-.3L6.8 7.8l-.2-.7c0-.2 0-.3.1-.3.1-.1.1-.1.2-.1h15.2c.1 0 .1 0 .2.1 0 .1.1.2.1.4l-2 8.9zM9.5 19C8.1 19 7 20.1 7 21.5S8.1 24 9.5 24s2.5-1.1 2.5-2.5S10.9 19 9.5 19zm0 3.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm10-3.4c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm0 3.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
          fill="currentColor"
        />
      </symbol>
      <symbol
        viewBox="0 0 24.2 23.8"
        id="icon-cart_2_plus"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <path d="M9.5 19C8.1 19 7 20.1 7 21.5S8.1 24 9.5 24s2.5-1.1 2.5-2.5S10.9 19 9.5 19zm0 3.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm10-3.4c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm0 3.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zM13.8 9.8h1.6V6.6h3.2V5h-3.2V1.8h-1.6V5h-3.2v1.6h3.2z" />
          <path d="M22.1 5h-1.9v1.7h1.9c.1 0 .1 0 .2.1 0 .1.1.2.1.4l-2 8.9c0 .2-.2.3-.3.3H8.9c-.1 0-.2-.1-.3-.3L6.8 7.8l-.2-.7c0-.2 0-.3.1-.3.1-.1.1-.1.2-.1H9V5H6.9c-.3 0-.5.1-.7.1L5.1.2H0v1.6h3.9L5 7.3v.1l2 9c.2 1 1 1.6 1.9 1.6h11.3c.9 0 1.6-.6 1.8-1.6l2-9c.2-1.2-.7-2.4-1.9-2.4z" />
        </g>
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 16 16"
        id="icon-close"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.434.434l-14 14 1.132 1.132 14-14L14.434.434zm-14 1.132l14 14 1.132-1.132-14-14L.434 1.566z"
          fill="currentColor"
        />
      </symbol>
      <symbol
        viewBox="0 0 24 22"
        id="icon-compare"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M5.5 8L0 17.2C0 20.5 2.4 23 5.5 23s5.5-2.5 5.5-5.8L5.5 8zm3.6 9.2H1.9l3.6-6.1 3.6 6.1zm-3.6 4.2c-1.7 0-3-1.1-3.6-2.6h7.2c-.6 1.5-1.9 2.6-3.6 2.6zM19 3.2h-4.1C14.5 1.9 13.4 1 12 1s-2.5.9-2.9 2.2H5v1.6h4.1C9.5 6.1 10.6 7 12 7s2.5-.9 2.9-2.2H19V3.2zm-7 2.2c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zM18.5 8L13 17.2c0 3.2 2.4 5.8 5.5 5.8s5.5-2.5 5.5-5.8L18.5 8zm3.6 9.2h-7.2l3.6-6.1 3.6 6.1zm-3.6 4.2c-1.7 0-3-1.1-3.6-2.6h7.2c-.6 1.5-1.9 2.6-3.6 2.6z"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-compare-add"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 9L0 18.2C0 21.5 2.4 24 5.5 24s5.5-2.5 5.5-5.8L5.5 9zm3.6 9.2H1.9l3.6-6.1 3.6 6.1zm9.469-16.75l-3.966 1.04c-.717-1.155-2.01-1.747-3.364-1.391-1.354.355-2.19 1.505-2.246 2.864L5.027 5.004l.407 1.548L9.399 5.51c.717 1.155 2.01 1.747 3.364 1.391 1.354-.355 2.19-1.505 2.246-2.864l3.966-1.04-.406-1.549zm-6.212 3.905a1.367 1.367 0 0 1-1.71-.999 1.367 1.367 0 0 1 .999-1.71 1.367 1.367 0 0 1 1.71 1 1.367 1.367 0 0 1-1 1.709zM18.5 6L13 15.2c0 3.2 2.4 5.8 5.5 5.8s5.5-2.5 5.5-5.8L18.5 6zm3.6 9.2h-7.2l3.6-6.1 3.6 6.1z"
          fill="currentColor"
        />
      </symbol>
      <symbol
        viewBox="0 0 24 24"
        id="icon-edit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M2.3 20.4c-.1 0-.1 0 0 0H2c-.1 0-.1-.1-.2-.1-.1-.1-.1-.2-.1-.3v-.3l.6-5v-.1s0-.1.1-.1L14.6 2.1c.4-.4.8-.5 1.4-.5.5 0 1 .2 1.3.5l2.6 2.6c.4.4.5.8.5 1.3s-.2 1-.5 1.3L7.7 19.6s-.1 0-.1.1h-.1l-5.2.7zm.6-1.3l2.9-.4-2.6-2.6-.3 3zm.8-4.3L5 16.1l9.7-9.7L13.5 5l-9.8 9.8zm3.5 3.5L17 8.5l-1.3-1.3L5.9 17l1.3 1.3zM15.5 3l-1.2 1.2 3.5 3.5L19 6.5c.1-.1.2-.3.2-.4 0-.2-.1-.3-.2-.4L16.4 3c-.1-.1-.3-.2-.4-.2-.2 0-.4 0-.5.2z"
        />
      </symbol>
      <symbol
        id="icon-eye"
        xmlSpace="preserve"
        viewBox="0 0 24 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style dangerouslySetInnerHTML={{ __html: ".anst0{fill:#333}" }} />
        <path
          className="anst0"
          d="M23.9 11.7c-1-2.2-2.5-4.1-4.6-5.5C17.1 4.7 14.7 4 12 4s-5.1.7-7.3 2.2C2.6 7.6 1.1 9.4.1 11.7L0 12l.1.3c1 2.2 2.5 4.1 4.6 5.5C6.9 19.3 9.3 20 12 20s5.1-.7 7.3-2.2c2.1-1.4 3.6-3.2 4.6-5.5l.1-.3-.1-.3zm-5.5 4.8c-1.9 1.3-4 1.9-6.4 1.9-2.4 0-4.5-.6-6.4-1.9-1.7-1.2-3-2.6-3.9-4.5.8-1.8 2.1-3.3 3.9-4.5 1.9-1.3 4-1.9 6.4-1.9 2.4 0 4.5.6 6.4 1.9 1.7 1.2 3 2.6 3.9 4.5-.9 1.8-2.2 3.3-3.9 4.5z"
        />
        <path
          className="anst0"
          d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.4c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4z"
        />
      </symbol>
      <symbol
        viewBox="0 0 22 24"
        id="icon-filter"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M9 24V12L1 5V0h22v5l-8 7v8l-6 4zM2.6 4.3l8 7V21l2.8-1.9v-7.9l8-7V1.6H2.6v2.7z"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 18 23"
        id="icon-lock"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={9}
          cy={14}
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 16v3M.8 7.8h16.4v14.4H.8z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M4.8 7c0-3.015 2.01-5.2 4.2-5.2V.2C5.666.2 3.2 3.387 3.2 7h1.6zM9 1.8c2.19 0 4.2 2.185 4.2 5.2h1.6C14.8 3.387 12.334.2 9 .2v1.6z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-mail">
        <path d="M0 0h24v24H0z" />
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          d="M.8 4.8h22.4v14.4H.8z"
        />
        <path
          d="M1.5 5.5L12 13l10.5-7.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-404"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff" d="M0 0h24v24H0z" />
        <circle
          cx={12}
          cy={12}
          r="11.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M17 7L7 17M7 7l10 10"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-delivery"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 12l-5.5-5H14V3H0v17h4.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2h5.4c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H24v-8zm-6.1-3.4l3.9 3.6H14V8.6h3.9zM7 20.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zm2.9-2C9.7 17 8.4 16 7 16s-2.7 1-2.9 2.4H1.6V4.6h10.8v13.8H9.9zm8.1 2c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zm2.9-2C20.7 17 19.4 16 18 16s-2.7 1-2.9 2.4H14v-4.6h8.4v4.6h-1.5z"
          fill="currentColor"
        />
      </symbol>
      <symbol
        viewBox="0 0 24.1 24"
        id="icon-menu-documentation"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style
          dangerouslySetInnerHTML={{ __html: ".atst0{fill:currentColor}" }}
        />
        <path
          className="atst0"
          d="M21.3 12.2c0-1.5 1.2-2.6 2.6-2.6h.1c-.5-2.5-1.8-4.7-3.6-6.4-.2.3-.5.6-.8.8 0 0-.6.5-1.5.5-.5 0-1-.1-1.5-.5 0 0-1.1-.6-1.1-2.3 0-.4.1-.7.3-1.1C14.6.2 13.3 0 12 0c-1.2 0-2.4.2-3.5.5.6 1.2.1 2.7-1.1 3.4-.4.2-.9.3-1.3.3-.9 0-1.7-.4-2.2-1.2C2.1 4.6.7 6.7.1 9.1c1.4.1 2.4 1.3 2.4 2.6 0 1.4-1.1 2.5-2.5 2.6.5 2.4 1.7 4.6 3.5 6.3.5-.8 1.3-1.2 2.2-1.2.5 0 .9.1 1.4.4 1.2.7 1.7 2.3 1 3.5 1.3.4 2.6.7 4 .7 1.2 0 2.3-.2 3.4-.5-.7-1.2-.2-2.8 1-3.5.4-.2.8-.3 1.3-.3 1 0 1.9.5 2.4 1.4 1.9-1.6 3.3-3.8 3.9-6.3-1.7 0-2.8-1.2-2.8-2.6zm-1.2 6.6c-.7-.5-1.5-.7-2.4-.7-.7 0-1.4.2-2.1.5-1 .6-1.7 1.5-2 2.6-.1.4-.1.7-.1 1.1-.5.1-1 .1-1.4.1-.7 0-1.4-.1-2.1-.2 0-.4 0-.8-.1-1.2-.3-1.1-1-2-2-2.5-.7-.4-1.4-.6-2.1-.6-.7 0-1.5.2-2.1.5-.7-.9-1.3-1.9-1.7-3 1.3-.7 2.2-2.1 2.2-3.6s-.8-2.9-2-3.6c.4-1.1 1-2 1.8-2.9.6.4 1.4.6 2.2.6.7 0 1.5-.2 2.1-.5 1.4-.8 2.1-2.1 2.2-3.6.5-.1 1.1-.1 1.7-.1.6 0 1.2.1 1.9.2 0 2 1.1 3.1 1.8 3.6s1.6.8 2.4.8c1 0 1.8-.4 2.2-.6.7.9 1.3 1.9 1.7 3-1.4.7-2.3 2.1-2.3 3.7v.1c0 1.6.9 3 2.2 3.7-.6.7-1.3 1.7-2 2.6z"
        />
        <path
          className="atst0"
          d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6.4c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-faqs"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff" d="M0 0h24v24H0z" />
        <circle
          cx={12}
          cy={12}
          r="11.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 9a4 4 0 1 1 4 4v3m0 2v2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-mail"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          d="M.8 4.8h22.4v14.4H.8z"
        />
        <path
          d="M1.5 5.5L12 13l10.5-7.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-maintance"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path fill="#fff" d="M0 0h24v24H0z" />
          <path
            d="M6.194 23L3.75 20.708 1 17.944l6.828-6.16A7.868 7.868 0 0 1 17.956 1.523l-4.303 4.302a1.222 1.222 0 0 0 0 1.728l2.795 2.795c.477.477 1.25.477 1.728 0l4.302-4.303a7.867 7.867 0 0 1-10.097 10.19L6.194 23z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </g>
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-men"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          d="M2.826 23.2c.36-5.393 4.323-9.4 9.174-9.4 4.851 0 8.815 4.007 9.174 9.4H2.826z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx={12}
          cy={10}
          r="9.2"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <mask id="axa" fill="#fff">
          <path d="M21.628 12.702a10 10 0 1 0-19.317-.228L12 10l9.628 2.702z" />
        </mask>
        <path
          d="M21.628 12.702a10 10 0 1 0-19.317-.228L12 10l9.628 2.702z"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="3.2"
          mask="url(#axa)"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-return"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 2L2 9l7 7" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M15.5 8H2v1.6h13.5c3.5 0 6.4 2.9 6.4 6.4 0 3.5-2.9 6.4-6.4 6.4H2V24h13.5c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
          fill="currentColor"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-shop"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          d="M3.8 8.8h16.4v13.4H3.8z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.6"
          d="M9.8 16.8h4.4v5.4H9.8zM1 8l4-6h14l4 6"
        />
        <path
          d="M9.147 11.528L8.5 10.64l-.647.887c-.4.549-.858.967-1.34 1.247A2.998 2.998 0 0 1 5 13.2a2.998 2.998 0 0 1-1.512-.425c-.495-.287-.965-.72-1.373-1.29a6.84 6.84 0 0 1-.967-2.033A8.513 8.513 0 0 1 .836 7.8h22.328a8.515 8.515 0 0 1-.312 1.652 6.838 6.838 0 0 1-.968 2.033c-.407.57-.877 1.003-1.372 1.29A2.998 2.998 0 0 1 19 13.2a2.998 2.998 0 0 1-1.512-.425c-.483-.28-.941-.698-1.341-1.247l-.647-.887-.646.887c-.4.549-.86.967-1.342 1.247A2.998 2.998 0 0 1 12 13.2a2.998 2.998 0 0 1-1.512-.425c-.483-.28-.941-.698-1.341-1.247z"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-size_guide"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)" stroke="currentColor" strokeWidth="1.6">
          <path d="M0 5h22m-4-4l4 4-4 4m3 7v3m0-8v3m-5 7h3m-8 0h3M5 0v22m4-4l-4 4-4-4" />
        </g>
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-menu-women"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path fill="#fff" d="M0 0h24v24H0z" />
          <path
            d="M4.826 23.2c.36-5.393 4.323-9.4 9.174-9.4 4.851 0 8.815 4.007 9.174 9.4H4.826z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M.8 8A5.2 5.2 0 0 1 6 2.8h6.2V9c0 6.47-5.035 11.762-11.4 12.174V8z"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx={14}
            cy={10}
            r="9.2"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <mask id="bba" fill="#fff">
            <path d="M23.628 12.702a10 10 0 1 0-19.317-.228L14 10l9.628 2.702z" />
          </mask>
          <path
            d="M23.628 12.702a10 10 0 1 0-19.317-.228L14 10l9.628 2.702z"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="3.2"
            mask="url(#bba)"
          />
        </g>
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-mobile-menu-toggle">
        <path
          d="M0 6h24M0 12h16M0 18h24"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-mobile-menu-toggle02">
        <circle
          cx={3}
          cy={12}
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx={12}
          cy={12}
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx={21}
          cy={12}
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-mobile_menu_toggle">
        <path
          d="M0 6h24M0 12h16M0 18h24"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 16 16" id="icon-options">
        <path
          d="M13.172 4.953l1.547-1.547-2.125-2.125-1.547 1.547a6.21 6.21 0 0 0-.75-.36 4.472 4.472 0 0 0-.797-.265V0h-3v2.203a4.52 4.52 0 0 0-.797.266c-.26.104-.51.224-.75.36L3.406 1.28 1.281 3.406l1.547 1.547c-.135.24-.26.49-.375.75-.104.26-.187.526-.25.797H0v3h2.203c.063.27.146.537.25.797.115.26.24.51.375.75l-1.547 1.547 2.125 2.125 1.547-1.547c.24.135.49.26.75.375.26.104.526.187.797.25V16h3v-2.203a5.53 5.53 0 0 0 .797-.25c.26-.115.51-.24.75-.375l1.547 1.547 2.125-2.125-1.547-1.547c.135-.24.255-.49.36-.75.114-.26.202-.526.265-.797H16v-3h-2.203a4.479 4.479 0 0 0-.266-.797 6.215 6.215 0 0 0-.36-.75zM8 10.5a2.407 2.407 0 0 1-1.766-.734A2.407 2.407 0 0 1 5.5 8c0-.688.245-1.276.734-1.766A2.407 2.407 0 0 1 8 5.5a2.41 2.41 0 0 1 1.766.734c.49.49.734 1.079.734 1.766a2.41 2.41 0 0 1-.734 1.766c-.49.49-1.079.734-1.766.734z"
          fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-pause">
        <path fill="currentColor" d="M0 0h9v24H0zm15 0h9v24h-9z" />
      </symbol>
      <symbol fill="none" viewBox="0 0 67 19" id="icon-payment_01">
        <path
          d="M45.213.861h-5.158c-.304 0-.607.298-.759.597l-2.124 13.117c0 .299.152.448.455.448h2.731c.303 0 .455-.15.455-.447l.607-3.727c0-.298.304-.597.759-.597h1.669c3.49 0 5.462-1.64 5.917-4.919.303-1.341 0-2.534-.607-3.28-.91-.744-2.276-1.192-3.945-1.192zm.607 4.92c-.303 1.788-1.669 1.788-3.034 1.788h-.91l.606-3.428c0-.15.152-.298.455-.298h.304c.91 0 1.82 0 2.276.596.303.149.303.596.303 1.342z"
          fill="#469BDB"
        />
        <path
          d="M8.041.861H2.883c-.304 0-.607.298-.759.597L0 14.575c0 .299.152.448.455.448h2.428c.303 0 .607-.298.758-.597l.607-3.577c0-.298.304-.597.759-.597h1.669c3.49 0 5.462-1.64 5.917-4.919.303-1.341 0-2.534-.607-3.28C11.076 1.31 9.862.862 8.041.862zm.607 4.92C8.345 7.569 6.98 7.569 5.614 7.569h-.759l.607-3.428c0-.15.152-.298.455-.298h.304c.91 0 1.82 0 2.275.596.152.149.304.596.152 1.342zm15.02-.149h-2.427c-.152 0-.455.15-.455.298l-.152.746-.152-.299c-.607-.745-1.669-1.043-2.883-1.043-2.73 0-5.158 2.087-5.613 4.92-.304 1.49.151 2.832.91 3.726.759.894 1.82 1.192 3.186 1.192 2.276 0 3.49-1.341 3.49-1.341l-.152.745c0 .298.152.447.455.447h2.276c.304 0 .607-.298.759-.596l1.365-8.348c-.151-.149-.455-.447-.607-.447zm-3.49 4.77c-.303 1.342-1.365 2.385-2.882 2.385-.759 0-1.365-.298-1.669-.596-.303-.447-.455-1.043-.455-1.789.152-1.341 1.365-2.385 2.73-2.385.76 0 1.215.298 1.67.596.455.448.607 1.193.607 1.79z"
          fill="#283B82"
        />
        <path
          d="M60.688 5.632H58.26c-.151 0-.455.15-.455.298l-.152.746-.151-.299c-.607-.745-1.67-1.043-2.883-1.043-2.731 0-5.159 2.087-5.614 4.92-.303 1.49.152 2.832.91 3.726.76.894 1.821 1.192 3.187 1.192 2.276 0 3.49-1.341 3.49-1.341l-.152.745c0 .298.151.447.455.447h2.276c.303 0 .607-.298.758-.596l1.366-8.348c-.152-.149-.304-.447-.607-.447zm-3.49 4.77c-.303 1.342-1.365 2.385-2.883 2.385-.758 0-1.365-.298-1.668-.596-.304-.447-.456-1.043-.456-1.789.152-1.341 1.366-2.385 2.731-2.385.759 0 1.214.298 1.67.596.606.448.758 1.193.606 1.79z"
          fill="#469BDB"
        />
        <path
          d="M36.87 5.633h-2.58c-.303 0-.454.149-.606.298l-3.338 5.068-1.517-4.77c-.152-.298-.304-.447-.759-.447h-2.427c-.304 0-.456.298-.456.596l2.732 7.9-2.58 3.578c-.151.298 0 .746.304.746h2.427c.304 0 .455-.15.607-.299l8.345-11.776c.455-.447.152-.894-.152-.894z"
          fill="#283B82"
        />
        <path
          d="M63.573 1.31L61.45 14.726c0 .298.152.447.455.447h2.124c.304 0 .607-.298.76-.596L66.91 1.459c0-.298-.151-.447-.455-.447h-2.428c-.151-.15-.303 0-.455.298z"
          fill="#469BDB"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 50 17" id="icon-payment_02">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.226 16.407l4.62-15.233h4.122l-4.62 15.233h-4.122zM13.383 1.178L9.675 7.635c-.944 1.692-1.496 2.546-1.761 3.615h-.056c.065-1.355-.124-3.018-.142-3.959l-.409-6.113H.368l-.071.41c1.783 0 2.84.895 3.13 2.727L4.78 16.407h4.27l8.635-15.229h-4.302zM45.44 16.407l-.114-2.266-5.147-.004-1.052 2.27H34.65l8.115-15.204h5.493l1.374 15.204H45.44zm-.472-8.985c-.046-1.126-.085-2.654-.008-3.579h-.06c-.252.756-1.33 3.027-1.803 4.144l-1.534 3.339h3.614l-.21-3.904zM28.295 16.84c-2.91 0-4.841-.923-6.22-1.746l1.963-3c1.238.693 2.21 1.492 4.446 1.492.72 0 1.412-.187 1.806-.868.573-.99-.133-1.524-1.743-2.435l-.795-.517c-2.387-1.632-3.42-3.18-2.296-5.885C26.176 2.15 28.072.84 31.2.84c2.158 0 4.18.933 5.36 1.845l-2.258 2.648c-1.15-.93-2.104-1.401-3.195-1.401-.87 0-1.53.335-1.759.788-.429.85.139 1.43 1.393 2.209l.946.601c2.898 1.828 3.588 3.745 2.862 5.537-1.25 3.084-3.695 3.773-6.254 3.773z"
          fill="#1D5B99"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 42 24" id="icon-payment_03">
        <path
          d="M24.732 12.063c0 6.572-5.396 11.937-12.15 11.937C5.895 24 .435 18.635.435 12.063.434 5.492 5.83.127 12.518.127c6.818 0 12.214 5.365 12.214 11.936z"
          fill="#EA192A"
        />
        <path
          d="M41.111 12c0 6.603-5.428 12-12.214 12-6.72 0-12.213-5.397-12.213-12S22.112 0 28.833 0c6.85 0 12.278 5.397 12.278 12z"
          fill="#F9B532"
        />
        <path
          d="M24.764 12.063c0-.889-.13-1.714-.258-2.54h-7.497c.065-.444.194-.825.323-1.27h6.721a7.484 7.484 0 0 0-.517-1.269H17.85c.194-.444.453-.825.711-1.27h4.33a6.05 6.05 0 0 0-.97-1.27h-2.39a10.92 10.92 0 0 1 1.227-1.206C18.681 1.325 15.87.19 12.802.127v23.865c3.094-.048 5.864-1.238 8.021-3.111.452-.381.84-.826 1.228-1.27h-2.52a14.525 14.525 0 0 1-.905-1.206h4.33c.258-.381.517-.826.71-1.27h-5.75a7.484 7.484 0 0 1-.518-1.27h6.72c.389-1.199.647-2.468.647-3.802z"
          fill="#EA192A"
        />
        <path
          d="M16.944 15.048l.194-1.08c-.064 0-.194.064-.323.064-.452 0-.517-.254-.452-.38l.387-2.223h.711l.194-1.206h-.646l.13-.762h-1.293s-.776 4.19-.776 4.698c0 .762.453 1.08 1.034 1.08.388 0 .711-.127.84-.19zm.451-2.033c0 1.778 1.227 2.223 2.261 2.223.97 0 1.357-.19 1.357-.19l.259-1.207s-.711.317-1.357.317c-1.422 0-1.163-1.015-1.163-1.015h2.65s.193-.826.193-1.143c0-.826-.452-1.842-1.874-1.842-1.357-.127-2.326 1.27-2.326 2.857zm2.261-1.84c.711 0 .582.825.582.888h-1.422c0-.063.13-.889.84-.889zm8.207 3.872l.258-1.397s-.646.318-1.098.318c-.905 0-1.293-.698-1.293-1.46 0-1.524.776-2.35 1.68-2.35.647 0 1.164.382 1.164.382l.194-1.334s-.776-.317-1.487-.317c-1.486 0-2.972 1.27-2.972 3.682 0 1.588.775 2.667 2.326 2.667.517 0 1.228-.19 1.228-.19zM9.835 10.031c-.905 0-1.551.254-1.551.254l-.194 1.08s.581-.254 1.421-.254c.453 0 .84.063.84.444 0 .254-.064.318-.064.318h-.582c-1.098 0-2.326.444-2.326 1.904 0 1.143.775 1.397 1.228 1.397.904 0 1.292-.571 1.357-.571l-.065.508h1.163l.517-3.493c0-1.523-1.292-1.587-1.744-1.587zm.258 2.857c0 .19-.13 1.207-.905 1.207-.387 0-.517-.318-.517-.508 0-.318.194-.762 1.164-.762.193.063.258.063.258.063zm2.714 2.285c.323 0 1.938.064 1.938-1.65 0-1.588-1.55-1.27-1.55-1.905 0-.318.258-.445.71-.445.194 0 .905.064.905.064l.194-1.143s-.452-.127-1.228-.127c-.97 0-1.939.38-1.939 1.65 0 1.46 1.616 1.334 1.616 1.905 0 .381-.452.445-.776.445-.581 0-1.163-.19-1.163-.19l-.194 1.142c.065.127.388.254 1.487.254zM38.59 9.016l-.259 1.714s-.517-.635-1.228-.635c-1.163 0-2.197 1.397-2.197 3.048 0 1.015.517 2.095 1.616 2.095.775 0 1.228-.508 1.228-.508l-.065.444h1.292l.97-6.095-1.357-.063zm-.582 3.365c0 .698-.323 1.587-1.034 1.587-.452 0-.71-.381-.71-1.016 0-1.016.452-1.65 1.033-1.65.453 0 .711.317.711 1.079zM2.79 15.11l.776-4.57.13 4.57H4.6l1.68-4.57-.71 4.57h1.356L7.96 9.017H5.828l-1.293 3.746-.064-3.746H2.596L1.562 15.11H2.79zm20.034 0c.388-2.095.452-3.809 1.357-3.492.13-.825.323-1.142.453-1.46h-.259c-.582 0-1.034.762-1.034.762l.13-.698h-1.229l-.84 4.952h1.422v-.063zm8.014-5.079c-.904 0-1.55.254-1.55.254l-.194 1.08s.581-.254 1.421-.254c.453 0 .84.063.84.444 0 .254-.064.318-.064.318h-.582c-1.098 0-2.326.444-2.326 1.904 0 1.143.775 1.397 1.228 1.397.904 0 1.292-.571 1.357-.571l-.065.508h1.163l.517-3.493c.065-1.523-1.292-1.587-1.744-1.587zm.324 2.857c0 .19-.13 1.207-.905 1.207-.388 0-.517-.318-.517-.508 0-.318.194-.762 1.163-.762.194.063.194.063.259.063zm2.518 2.222c.387-2.095.452-3.809 1.357-3.492.129-.825.323-1.142.452-1.46h-.258c-.582 0-1.035.762-1.035.762l.13-.698h-1.228l-.84 4.952h1.421v-.063z"
          fill="#fff"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 55 18" id="icon-payment_04">
        <path
          d="M29.51 9.556c2.492 0 4.513-1.985 4.513-4.434 0-2.45-2.02-4.434-4.513-4.434s-4.514 1.985-4.514 4.434c0 2.45 2.02 4.434 4.514 4.434z"
          fill="#F5821E"
        />
        <path
          d="M3.383.943H.953v8.358h2.43c1.302 0 2.257-.341 3.038-.938a4.189 4.189 0 0 0 1.563-3.241c0-2.473-1.823-4.179-4.6-4.179zM5.38 7.254c-.521.426-1.215.682-2.257.682h-.52V2.393h.433c1.042 0 1.736.17 2.257.682.608.512.955 1.28.955 2.047.087.768-.26 1.62-.868 2.132zM10.415.943h-1.65v8.358h1.65V.943zm4.166 3.24c-1.041-.34-1.302-.597-1.302-1.023 0-.512.521-.938 1.216-.938.52 0 .954.17 1.388.682l.868-1.109a3.82 3.82 0 0 0-2.517-.938c-1.476 0-2.69 1.024-2.69 2.388 0 1.194.52 1.706 2.082 2.303.695.256.955.34 1.129.511.347.171.52.512.52.853 0 .682-.52 1.194-1.301 1.194a2.028 2.028 0 0 1-1.823-1.109l-1.042 1.024c.782 1.108 1.736 1.62 2.951 1.62 1.736 0 2.952-1.109 2.952-2.729 0-1.45-.521-2.046-2.43-2.729zm2.95.938c0 2.473 1.997 4.35 4.514 4.35.694 0 1.302-.171 2.083-.512V6.997c-.695.683-1.302.939-1.997.939-1.649 0-2.864-1.194-2.864-2.9 0-1.62 1.215-2.9 2.778-2.9.78 0 1.388.256 2.083.939V1.113c-.695-.34-1.302-.511-2.083-.511-2.43.17-4.514 2.132-4.514 4.52zm20.224 1.451L35.498.943h-1.822l3.558 8.613h.955L41.922.943h-1.823l-2.344 5.629zM42.617 9.3h4.774V7.937h-3.038V5.634h2.951v-1.45h-2.95v-1.79h3.037V.943h-4.774V9.3z"
          fill="#141414"
        />
        <path
          d="M52.074 5.804c1.302-.256 1.997-1.108 1.997-2.388 0-1.535-1.129-2.473-3.038-2.473h-2.517v8.358h1.649V5.975h.26L52.77 9.3h1.996l-2.69-3.497zm-1.388-1.023h-.521V2.223h.52c1.042 0 1.65.426 1.65 1.279s-.608 1.279-1.65 1.279z"
          fill="#4D4D4D"
        />
        <path
          d="M52.074 5.804c1.302-.256 1.997-1.108 1.997-2.388 0-1.535-1.129-2.473-3.038-2.473h-2.517v8.358h1.649V5.975h.26L52.77 9.3h1.996l-2.69-3.497zm-1.388-1.023h-.521V2.223h.52c1.042 0 1.65.426 1.65 1.279s-.608 1.279-1.65 1.279z"
          fill="#141414"
        />
        <path
          d="M13.191 17.06v-4.69l3.299 3.325v-3.07h.694v4.69l-3.298-3.326v3.07h-.695zm7.463-3.753H18.83v1.024h1.736v.682H18.83v1.45h1.823v.596h-2.517v-4.434h2.517v.682zm2.172.001v3.752h-.695v-3.752H21.09v-.597h2.777v.597h-1.041zm2.084-.596l1.128 2.984 1.215-3.155 1.128 3.155 1.215-2.984h.868l-1.996 4.69-1.128-3.155-1.216 3.155-1.91-4.69h.695zm5.64 2.132c0-.597.261-1.194.695-1.62a2.393 2.393 0 0 1 1.65-.683c.607 0 1.214.256 1.648.682a2.31 2.31 0 0 1 .695 1.62 2.31 2.31 0 0 1-.694 1.62 2.393 2.393 0 0 1-1.65.683c-.607 0-1.128-.17-1.562-.597-.52-.426-.781-.938-.781-1.705zm.695 0c0 .511.174.852.521 1.193.347.341.694.512 1.128.512.434 0 .868-.17 1.215-.512.348-.34.521-.682.521-1.193 0-.512-.173-.853-.52-1.194-.348-.341-.695-.512-1.216-.512-.434 0-.868.17-1.215.512-.26.34-.434.767-.434 1.194zm6.423.339l1.389 1.877h-.868l-1.302-1.791H36.8v1.79h-.694v-4.434h.78c.608 0 1.042.085 1.303.341.26.256.434.597.434.938 0 .341-.087.597-.26.768-.174.34-.435.511-.695.511zm-.868-.511h.173c.608 0 .955-.256.955-.683 0-.426-.347-.682-.955-.682h-.26v1.365h.087zm3.56-.255l1.735-1.79h.868l-1.996 1.96 1.996 2.389h-.868l-1.649-1.962-.173.17v1.792h-.695V12.54h.694v1.876h.087z"
          fill="#858585"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 65 22" id="icon-payment_05">
        <path d="M6.328 5.525h2.209L7.432 2.764 6.328 5.525z" fill="#017AAB" />
        <path
          d="M55.215.2v1.183L54.613.199h-4.718v1.184L49.293.199h-6.425c-1.104 0-2.008.197-2.811.592V.199H35.54v.592c-.502-.395-1.105-.592-1.908-.592H17.47l-1.104 2.466L15.262.199h-5.12v1.184L9.54.199H5.223L3.215 4.835.906 9.964h5.12l.602-1.579h1.406l.602 1.579h5.822V8.78l.502 1.184h2.912l.502-1.184v1.184h13.953V7.399h.201c.2 0 .2 0 .2.296v2.17h7.229v-.592c.602.296 1.505.592 2.71.592h3.012l.602-1.578h1.405l.603 1.578h5.822v-1.48l.904 1.48h4.718V.199h-4.518zm-33.93 8.284h-1.707V3.06l-2.41 5.425h-1.505l-2.41-5.425v5.425H9.842l-.703-1.48H5.725l-.603 1.579H3.215L6.227 1.58h2.51l2.81 6.608V1.58h2.71l2.21 4.734 2.007-4.734h2.81v6.904zM28.11 3.06h-3.915v1.283h3.815v1.38h-3.815v1.381h3.915v1.48h-5.622V1.58h5.622v1.48zm7.529 2.86c.2.395.301.691.301 1.283v1.38h-1.706v-.887c0-.394 0-.986-.302-1.38-.3-.297-.602-.297-1.204-.297h-1.807v2.565h-1.707V1.58h3.815c.903 0 1.506 0 2.008.296s.803.789.803 1.578c0 1.085-.703 1.677-1.205 1.874.502.099.803.394 1.004.592zm3.012 2.565h-1.707V1.481h1.707v7.003zm19.776 0h-2.41l-3.212-5.227v5.227h-3.413l-.602-1.48h-3.514l-.602 1.579h-1.907c-.804 0-1.807-.198-2.41-.79-.602-.591-.903-1.38-.903-2.662 0-.987.2-1.973.903-2.762.502-.592 1.406-.789 2.51-.789h1.606v1.48h-1.606c-.602 0-.904.098-1.305.394-.301.296-.502.888-.502 1.578 0 .79.1 1.282.502 1.677.301.296.703.394 1.204.394h.703l2.31-5.424h2.509l2.81 6.608V1.679h2.51L56.52 6.51V1.68h1.707v6.805h.2z"
          fill="#017AAB"
        />
        <path
          d="M45.879 5.525h2.309l-1.105-2.761-1.204 2.761zM28.813 19.727v-5.622l-2.61 2.762 2.61 2.86zm-10.743-4.93v1.282h3.715v1.38H18.07v1.48h4.116l1.907-2.07-1.806-2.072H18.07zm14.562 0h-2.109v1.775h2.209c.602 0 1.004-.296 1.004-.887-.1-.592-.502-.888-1.104-.888z"
          fill="#017AAB"
        />
        <path
          d="M63.647 16.475v-4.438h-4.216c-.903 0-1.606.197-2.108.592v-.592h-4.618c-.703 0-1.606.197-2.008.592v-.592h-8.13v.592c-.603-.493-1.708-.592-2.21-.592h-5.42v.592c-.502-.493-1.707-.592-2.31-.592h-6.022l-1.406 1.48-1.305-1.48H14.86v9.666h8.834l1.406-1.48 1.305 1.48h5.42v-2.269h.703c.703 0 1.607 0 2.31-.296v2.663h4.517v-2.564h.2c.302 0 .302 0 .302.296V21.8h13.652c.904 0 1.807-.197 2.31-.591v.591h4.316c.903 0 1.807-.098 2.409-.493 1.004-.591 1.606-1.676 1.606-2.959 0-.69-.2-1.38-.502-1.874zm-31.12 1.578H30.52v2.368h-3.213L25.3 18.152l-2.108 2.269h-6.626v-7.003h6.726l2.008 2.268 2.108-2.268h5.32c1.305 0 2.811.394 2.811 2.268-.1 1.973-1.506 2.367-3.012 2.367zm10.04-.394c.2.296.3.69.3 1.282v1.381h-1.706v-.888c0-.394 0-1.085-.302-1.38-.2-.296-.602-.296-1.204-.296h-1.807v2.564H36.14v-7.003h3.815c.803 0 1.506 0 2.008.296s.903.79.903 1.578c0 1.085-.703 1.677-1.204 1.874.502.198.803.395.903.592zm6.926-2.86h-3.915v1.282h3.814v1.38h-3.814v1.382h3.915v1.479H43.87v-7.003h5.622v1.48zm4.216 5.523h-3.212v-1.48h3.212c.301 0 .502 0 .703-.197.1-.098.2-.296.2-.493s-.1-.394-.2-.493c-.1-.099-.301-.197-.603-.197-1.606-.099-3.513 0-3.513-2.17 0-.986.602-2.071 2.41-2.071h3.312v1.676h-3.112c-.301 0-.502 0-.703.099-.2.099-.2.296-.2.493 0 .296.2.395.401.493.2.099.401.099.602.099h.904c.903 0 1.506.197 1.907.592.301.296.502.789.502 1.48 0 1.479-.903 2.169-2.61 2.169zm8.633-.69c-.401.394-1.104.69-2.108.69h-3.212v-1.48h3.212c.301 0 .502 0 .703-.197.1-.098.2-.296.2-.493s-.1-.394-.2-.493c-.1-.099-.301-.197-.602-.197-1.607-.099-3.514 0-3.514-2.17 0-.986.602-2.071 2.41-2.071h3.312v1.676h-3.012c-.3 0-.502 0-.702.099-.201.099-.201.296-.201.493 0 .296.1.395.401.493.201.099.402.099.603.099h.903c.904 0 1.506.197 1.908.592.1 0 .1.098.1.098.301.395.402.888.402 1.381 0 .592-.201 1.085-.603 1.48z"
          fill="#017AAB"
        />
        <path d="M28.813 19.727v-5.622l-2.61 2.762 2.61 2.86z" fill="#017AAB" />
        <path d="M55.012 9.57l.2.296h.1l-.3-.296z" fill="#228FE0" />
        <path
          d="M39.944 14.797h-2.108v1.775h2.208c.603 0 1.004-.296 1.004-.887-.1-.592-.502-.888-1.104-.888zM33.03 2.887h-2.108v1.775h2.208c.603 0 1.004-.296 1.004-.888-.1-.591-.502-.887-1.104-.887z"
          fill="#017AAB"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 64 64" id="icon-play">
        <path fill="currentColor" d="M0 0h64v64H0z" />
        <path d="M43 32L22 44V20l21 12z" fill="#fff" />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-quick_view">
        <path d="M15 11H7m4-4v8" stroke="currentColor" strokeWidth="1.6" />
        <circle
          cx={11}
          cy={11}
          r="10.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M23 23l-5-5" stroke="currentColor" strokeWidth="1.6" />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-remove">
        <path
          d="M5.754 23.2L4.848 7.8h14.304l-.906 15.4H5.754zM2 4h20M10 1h4"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 16 16" id="icon-review">
        <path
          d="M7.552.272c.07-.181.2-.272.39-.272.208 0 .338.09.39.272l1.637 5.193a.35.35 0 0 0 .13.217.527.527 0 0 0 .285.082h5.197c.207 0 .337.1.39.299.069.2.017.362-.157.49L11.632 9.76a.6.6 0 0 0-.182.245.582.582 0 0 0 0 .245l1.636 5.165c.052.2-.008.363-.181.49-.156.127-.304.127-.442 0l-4.209-3.236a.485.485 0 0 0-.26-.081.452.452 0 0 0-.234.082l-4.209 3.235c-.155.127-.311.127-.467 0-.156-.127-.208-.29-.156-.49l1.637-5.165a.49.49 0 0 0-.026-.272.323.323 0 0 0-.156-.218L.2 6.552c-.173-.127-.234-.29-.182-.49.07-.199.208-.298.416-.298H5.63a.369.369 0 0 0 .234-.082.436.436 0 0 0 .182-.217L7.552.272z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-search">
        <path fill="transparent" d="M0 0h24v24H0z" />
        <circle
          cx={11}
          cy={11}
          r="10.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M23 23l-5-5" stroke="currentColor" strokeWidth="1.6" />
      </symbol>
      <symbol fill="none" viewBox="0 0 36 36" id="icon-services_battery">
        <path fill="transparent" d="M0 0h36v36H0z" />
        <path
          d="M28.91 4.516h-2.183V1.13c0-.33-.102-.6-.306-.811A1.043 1.043 0 0 0 25.636 0h-4.363c-.319 0-.58.106-.784.318-.205.211-.307.482-.307.811v3.387h-4.364V1.13c0-.33-.102-.6-.307-.811A1.043 1.043 0 0 0 14.727 0h-4.363c-.319 0-.58.106-.784.318-.205.211-.307.482-.307.811v3.387H7.09c-.318 0-.58.106-.784.318-.205.211-.307.482-.307.811v28.226c0 .33.102.6.307.811.204.212.466.318.784.318h21.818c.318 0 .58-.106.784-.318.205-.211.307-.482.307-.811V5.645c0-.33-.102-.6-.307-.811a1.043 1.043 0 0 0-.784-.318zM8.181 11.29h19.636v16.936H8.182V11.29zm14.182-9.032h2.181v2.258h-2.181V2.258zm-10.91 0h2.182v2.258h-2.181V2.258zm16.364 4.516v2.258H8.182V6.774h19.636zM8.182 32.742v-2.258h19.636v2.258H8.182zM21.17 18.735a1.458 1.458 0 0 0-.41-.494.948.948 0 0 0-.58-.177H18l1.977-2.716c.16-.212.216-.482.17-.812-.045-.329-.181-.588-.408-.776-.205-.165-.466-.223-.785-.176a1.113 1.113 0 0 0-.75.423l-3.272 4.516a2.04 2.04 0 0 0-.205.565.696.696 0 0 0 .102.564c.114.165.25.318.41.459a.843.843 0 0 0 .58.212H18l-1.977 2.716c-.16.212-.216.482-.17.812.045.33.181.588.408.776.114.047.216.094.307.141.114.047.227.07.341.07.16 0 .318-.035.477-.105a.982.982 0 0 0 .41-.353l3.272-4.516a2.04 2.04 0 0 0 .205-.565.696.696 0 0 0-.102-.564z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 36 36" id="icon-services_color">
        <path fill="transparent" d="M0 0h36v36H0z" />
        <path
          d="M32 20.25V1.125a.997.997 0 0 0-.352-.773A1.001 1.001 0 0 0 30.875 0H27.5a1.05 1.05 0 0 0-.527.14 1.2 1.2 0 0 0-.387.317l-2.461 3.305-2.46-3.305a1.115 1.115 0 0 0-.423-.316A.866.866 0 0 0 20.75 0H6.125a1.11 1.11 0 0 0-.809.352C5.106.562 5 .82 5 1.125V20.25c0 1.242.434 2.309 1.3 3.2.891.866 1.958 1.3 3.2 1.3H14v6.75c0 1.242.434 2.297 1.3 3.164.891.89 1.958 1.336 3.2 1.336 1.242 0 2.297-.445 3.164-1.336.89-.867 1.336-1.922 1.336-3.164v-6.75h4.5c1.242 0 2.297-.434 3.164-1.3.89-.891 1.336-1.958 1.336-3.2zm-11.813-18l3.024 4.043c.21.281.516.422.914.422s.703-.14.914-.422l3.023-4.043h1.688v14.625H7.25V2.25h12.938zm1.688 20.25a1.11 1.11 0 0 0-.809.352c-.21.21-.316.468-.316.773V31.5c0 .61-.223 1.137-.668 1.582-.445.445-.973.668-1.582.668-.61 0-1.137-.223-1.582-.668-.445-.445-.668-.973-.668-1.582v-7.875a.997.997 0 0 0-.352-.773 1.001 1.001 0 0 0-.773-.352H9.5c-.61 0-1.137-.223-1.582-.668-.445-.445-.668-.973-.668-1.582v-1.125h22.5v1.125c0 .61-.223 1.137-.668 1.582-.445.445-.973.668-1.582.668h-5.625zM18.5 28.125a1.11 1.11 0 0 0-.809.352c-.21.21-.316.468-.316.773v1.125c0 .305.105.574.316.809.235.21.504.316.809.316.305 0 .563-.105.773-.316a1.11 1.11 0 0 0 .352-.809V29.25a.997.997 0 0 0-.352-.773 1.001 1.001 0 0 0-.773-.352z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-services_delivery">
        <path
          d="M24 12l-5.5-5H14V3H0v17h4.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2h5.4c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H24v-8zm-6.1-3.4l3.9 3.6H14V8.6h3.9zM7 20.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zm2.9-2C9.7 17 8.4 16 7 16s-2.7 1-2.9 2.4H1.6V4.6h10.8v13.8H9.9zm8.1 2c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4zm2.9-2C20.7 17 19.4 16 18 16s-2.7 1-2.9 2.4H14v-4.6h8.4v4.6h-1.5z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 36 36" id="icon-services_dimensions">
        <path fill="transparent" d="M0 0h36v36H0z" />
        <path
          d="M9.537 34.67c.122.098.256.183.403.257a1.382 1.382 0 0 0 .88 0c.146-.074.28-.159.402-.257L34.67 11.222c.22-.244.33-.525.33-.843 0-.317-.11-.598-.33-.842L26.463 1.33a1.223 1.223 0 0 0-.842-.33c-.318 0-.599.11-.843.33L1.33 24.778c-.22.244-.33.525-.33.843 0 .317.11.598.33.842l8.207 8.207zM6.862 22.58l2.675 2.71c.122.099.256.184.403.257a1.35 1.35 0 0 0 .879 0c.146-.073.28-.158.403-.256.22-.244.33-.525.33-.843 0-.317-.11-.598-.33-.842L8.511 20.93l1.868-1.869 1.503 1.54c.122.097.256.183.402.256a1.385 1.385 0 0 0 .88 0c.146-.073.28-.159.403-.257.22-.244.33-.525.33-.842 0-.318-.11-.599-.33-.843l-1.539-1.502 1.869-1.869 2.674 2.711c.122.098.257.184.403.257a1.381 1.381 0 0 0 .88 0 2.29 2.29 0 0 0 .402-.256c.22-.245.33-.526.33-.843 0-.318-.11-.599-.33-.843l-2.71-2.674 1.868-1.869 1.502 1.539c.122.098.256.183.403.256a1.35 1.35 0 0 0 .88 0 2.29 2.29 0 0 0 .402-.256c.22-.244.33-.525.33-.843 0-.317-.11-.598-.33-.842l-1.538-1.503 1.868-1.868 2.675 2.711c.122.098.256.183.403.256a1.35 1.35 0 0 0 .879 0c.146-.073.28-.158.403-.256.22-.244.33-.525.33-.843 0-.317-.11-.598-.33-.842L22.58 6.862l3.04-3.04 6.559 6.557-21.8 21.8-6.558-6.558 3.041-3.041z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 36 36" id="icon-services_drive_units">
        <path fill="transparent" d="M0 0h36v36H0z" />
        <path
          d="M27.352 11.755a1.107 1.107 0 0 0-.809-.355.998.998 0 0 0-.773.355 1.127 1.127 0 0 0-.352.816c0 .284.117.544.352.78 1.289 1.302 1.933 2.863 1.933 4.684 0 1.822-.644 3.36-1.933 4.613a1.127 1.127 0 0 0-.352.817c0 .283.117.544.352.78.117.118.246.213.386.284.14.047.27.071.387.071.117 0 .246-.024.387-.071a1.33 1.33 0 0 0 .422-.284 8.429 8.429 0 0 0 1.898-2.91c.422-1.088.633-2.2.633-3.335a9.148 9.148 0 0 0-.633-3.335 8.429 8.429 0 0 0-1.898-2.91zm2.671-4.436a1.19 1.19 0 0 0-.316.816c0 .284.105.545.316.781a12.07 12.07 0 0 1 2.743 4.152c.656 1.585.984 3.229.984 4.932 0 1.703-.328 3.335-.984 4.897a13.452 13.452 0 0 1-2.743 4.187 1.19 1.19 0 0 0-.316.816c0 .284.105.544.316.78a.985.985 0 0 0 .387.249c.164.047.305.071.422.071.117 0 .246-.024.387-.071.14-.047.27-.13.386-.248a15.427 15.427 0 0 0 1.864-2.271 13.08 13.08 0 0 0 1.37-2.59c.376-.923.657-1.87.845-2.84.21-.97.316-1.963.316-2.98s-.105-2.01-.316-2.98a14.183 14.183 0 0 0-.844-2.84 12.196 12.196 0 0 0-1.371-2.554 14.553 14.553 0 0 0-1.864-2.307A1.047 1.047 0 0 0 30.832 7c-.305 0-.574.106-.809.32zm-19.687 4.436a.997.997 0 0 0-.774-.355.998.998 0 0 0-.773.355 8.428 8.428 0 0 0-1.898 2.91 9.248 9.248 0 0 0-.633 3.37c0 1.136.21 2.26.633 3.372a8.797 8.797 0 0 0 1.898 2.945c.094.118.211.212.352.284.164.047.304.07.421.07.118 0 .247-.023.387-.07a.975.975 0 0 0 .387-.284c.234-.213.351-.474.351-.781 0-.308-.117-.58-.351-.816-1.29-1.301-1.934-2.863-1.934-4.684 0-1.822.645-3.36 1.934-4.613.187-.284.281-.58.281-.887 0-.308-.094-.58-.281-.816zM2.25 18c0-1.703.316-3.324.95-4.861a13.863 13.863 0 0 1 2.777-4.223 1.15 1.15 0 0 0 .316-.78c0-.308-.106-.58-.316-.817A1.167 1.167 0 0 0 5.168 7a1.04 1.04 0 0 0-.773.32 16.224 16.224 0 0 0-1.899 2.306 15.484 15.484 0 0 0-1.371 2.626 14.32 14.32 0 0 0-.844 2.803 15.517 15.517 0 0 0 0 5.89c.188.97.469 1.916.844 2.839a16.1 16.1 0 0 0 1.371 2.59 16.216 16.216 0 0 0 1.899 2.307.985.985 0 0 0 .386.248c.14.047.27.071.387.071.117 0 .246-.024.387-.071a.956.956 0 0 0 .422-.248c.21-.237.316-.497.316-.781 0-.307-.106-.58-.316-.816a13.997 13.997 0 0 1-2.778-4.187A12.915 12.915 0 0 1 2.25 18zM18 13.458c-1.242 0-2.309.45-3.2 1.348-.866.876-1.3 1.94-1.3 3.194s.434 2.33 1.3 3.229c.891.875 1.958 1.313 3.2 1.313 1.242 0 2.297-.438 3.164-1.313.89-.899 1.336-1.975 1.336-3.229s-.445-2.318-1.336-3.194c-.867-.898-1.922-1.348-3.164-1.348zm0 6.813c-.61 0-1.137-.225-1.582-.674A2.193 2.193 0 0 1 15.75 18c0-.615.223-1.147.668-1.597.445-.45.973-.674 1.582-.674.61 0 1.137.225 1.582.674.445.45.668.982.668 1.597s-.223 1.147-.668 1.597c-.445.45-.973.674-1.582.674z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-services_return">
        <path
          d="M2 9l-.566-.566L.87 9l.565.566L2 9zm6.434-7.566l-7 7 1.132 1.132 7-7-1.132-1.132zm-7 8.132l7 7 1.132-1.132-7-7-1.132 1.132z"
          fill="currentColor"
        />
        <path
          d="M15.5 8H2v1.6h13.5c3.5 0 6.4 2.9 6.4 6.4 0 3.5-2.9 6.4-6.4 6.4H2V24h13.5c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-services_size_guide">
        <g clipPath="url(#clip0)">
          <path fill="#fff" d="M0 0h24v24H0z" />
          <path
            d="M0 5h22m-4-4l4 4-4 4m3 7v3m0-8v3m-5 7h3m-8 0h3M5 0v22m4-4l-4 4-4-4"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </g>
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-services_support">
        <path
          d="M12 0C5.5 0 .1 5.3 0 11.8v6c0 1.7 1.3 3 3 3h3v-9H1.6C1.7 6.1 6.4 1.6 12 1.6c5.7 0 10.3 4.5 10.4 10.2H18v9h3c.5 0 1-.1 1.4-.4v.6c0 .8-.6 1.4-1.4 1.4h-9V24h9c1.7 0 3-1.3 3-3v-9.2C23.9 5.3 18.6 0 12 0zM4.4 13.4v5.8H3c-.8 0-1.4-.6-1.4-1.4v-4.4h2.8zm18 4.4c0 .8-.6 1.4-1.4 1.4h-1.4v-5.8h2.8v4.4z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 27 36" id="icon-services_technical">
        <path
          d="M1.125 36h24.75c.328 0 .598-.105.809-.316.21-.211.316-.48.316-.809V1.125c0-.328-.105-.598-.316-.809A1.098 1.098 0 0 0 25.875 0H1.125C.797 0 .527.105.316.316.106.527 0 .796 0 1.125v33.75c0 .328.105.598.316.809.211.21.48.316.809.316zM2.25 2.25h22.5v31.5H2.25V2.25zm11.25 13.5a7.61 7.61 0 0 0-3.094.633 8.13 8.13 0 0 0-2.496 1.652 8.087 8.087 0 0 0-1.687 2.496 7.997 7.997 0 0 0-.598 3.094c0 1.102.2 2.133.598 3.094.422.937.984 1.77 1.687 2.496a8.085 8.085 0 0 0 2.496 1.687 7.996 7.996 0 0 0 3.094.598c1.102 0 2.121-.2 3.059-.598a8.085 8.085 0 0 0 2.496-1.687 7.833 7.833 0 0 0 1.687-2.496 7.61 7.61 0 0 0 .633-3.094c0-1.102-.21-2.121-.633-3.059a7.607 7.607 0 0 0-1.652-2.496 7.348 7.348 0 0 0-2.496-1.687 7.61 7.61 0 0 0-3.094-.633zm0 13.5c-1.57 0-2.906-.54-4.008-1.617-1.078-1.102-1.617-2.438-1.617-4.008 0-1.57.54-2.895 1.617-3.973C10.594 18.551 11.93 18 13.5 18c1.57 0 2.895.55 3.973 1.652 1.101 1.078 1.652 2.403 1.652 3.973 0 1.57-.55 2.906-1.652 4.008-1.078 1.078-2.403 1.617-3.973 1.617zm0-15.75c1.242 0 2.297-.434 3.164-1.3C17.554 11.308 18 10.241 18 9c0-1.242-.445-2.297-1.336-3.164-.867-.89-1.922-1.336-3.164-1.336-1.242 0-2.309.445-3.2 1.336C9.435 6.703 9 7.758 9 9c0 1.242.434 2.309 1.3 3.2.891.866 1.958 1.3 3.2 1.3zm0-6.75c.61 0 1.137.223 1.582.668.445.445.668.973.668 1.582 0 .61-.223 1.137-.668 1.582-.445.445-.973.668-1.582.668-.61 0-1.137-.223-1.582-.668-.445-.445-.668-.973-.668-1.582 0-.61.223-1.137.668-1.582.445-.445.973-.668 1.582-.668zm2.25 16.875c0 .633-.223 1.172-.668 1.617-.422.422-.95.633-1.582.633-.633 0-1.172-.21-1.617-.633a2.266 2.266 0 0 1-.633-1.617c0-.633.21-1.16.633-1.582a2.203 2.203 0 0 1 1.617-.668c.633 0 1.16.223 1.582.668.445.422.668.95.668 1.582z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 36 36" id="icon-services_weight">
        <path fill="transparent" d="M0 0h36v36H0z" />
        <path
          d="M9 31c.938 0 1.734-.331 2.39-.994.657-.663.985-1.468.985-2.415v-5.682h11.25v5.682c0 .947.328 1.752.984 2.415A3.238 3.238 0 0 0 27 31c.938 0 1.734-.331 2.39-.994.657-.663.985-1.468.985-2.415V9.409c0-.947-.328-1.752-.984-2.415A3.238 3.238 0 0 0 27 6c-.938 0-1.734.331-2.39.994-.657.663-.985 1.468-.985 2.415v5.682h-11.25V9.409c0-.947-.328-1.752-.984-2.415A3.238 3.238 0 0 0 9 6c-.938 0-1.734.331-2.39.994-.657.663-.985 1.468-.985 2.415v18.182c0 .947.328 1.752.984 2.415A3.238 3.238 0 0 0 9 31zM25.875 9.41c0-.309.105-.57.316-.782.235-.237.504-.355.809-.355.305 0 .563.118.773.355.235.213.352.473.352.781v18.182c0 .308-.117.58-.352.817-.21.213-.468.32-.773.32s-.574-.107-.809-.32a1.192 1.192 0 0 1-.316-.817V9.409zm-2.25 7.954v2.272h-11.25v-2.272h11.25zM7.875 9.409c0-.308.105-.568.316-.781.235-.237.504-.355.809-.355.305 0 .563.118.773.355.235.213.352.473.352.781v18.182c0 .308-.117.58-.352.817-.21.213-.468.32-.773.32s-.574-.107-.809-.32a1.192 1.192 0 0 1-.316-.817V9.409zm-6.75 10.227H2.25v5.682c0 .308.105.58.316.817.235.213.504.32.809.32.305 0 .563-.107.773-.32.235-.237.352-.51.352-.817V11.682c0-.308-.117-.568-.352-.781a.997.997 0 0 0-.773-.355c-.305 0-.574.118-.809.355a1.07 1.07 0 0 0-.316.78v5.683H1.125c-.305 0-.574.118-.809.355A1.07 1.07 0 0 0 0 18.5c0 .308.105.58.316.817.235.213.504.32.809.32zm33.75-2.272H33.75v-5.682c0-.308-.117-.568-.352-.781a.997.997 0 0 0-.773-.355c-.305 0-.574.118-.809.355a1.07 1.07 0 0 0-.316.78v13.637c0 .308.105.58.316.817.235.213.504.32.809.32.305 0 .563-.107.773-.32.235-.237.352-.51.352-.817v-5.682h1.125c.305 0 .563-.106.773-.32.235-.236.352-.508.352-.816 0-.308-.117-.568-.352-.781a.997.997 0 0 0-.773-.355z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 18 19" id="icon-social_icon_1">
        <path
          d="M9 .5a8.885 8.885 0 0 0-3.516.703A9.09 9.09 0 0 0 2.62 3.137 8.975 8.975 0 0 0 .703 6.002 8.758 8.758 0 0 0 0 9.5a8.942 8.942 0 0 0 1.6 5.133 9.129 9.129 0 0 0 1.81 1.933c.703.551 1.47.99 2.303 1.319a17.834 17.834 0 0 1-.07-1.266 5.726 5.726 0 0 1 .105-1.318c.047-.176.123-.504.229-.985.117-.492.234-.996.351-1.511.129-.516.24-.973.334-1.371l.14-.616-.14-.369c-.082-.246-.123-.568-.123-.967 0-.62.158-1.136.475-1.546.316-.422.703-.633 1.16-.633.375 0 .656.129.844.386.187.247.28.54.28.88 0 .386-.093.849-.28 1.388-.176.54-.329 1.078-.457 1.617-.106.446-.024.826.246 1.143.28.316.644.474 1.09.474.398 0 .767-.1 1.107-.298.351-.2.65-.48.896-.844.258-.364.457-.797.598-1.301.152-.504.229-1.06.229-1.67 0-.539-.094-1.031-.282-1.476a3.358 3.358 0 0 0-.773-1.16 3.306 3.306 0 0 0-1.195-.756 3.947 3.947 0 0 0-1.512-.282c-.645 0-1.219.112-1.723.334a4.026 4.026 0 0 0-1.283.88c-.34.362-.604.778-.791 1.247a4.122 4.122 0 0 0-.264 1.46c0 .386.065.767.194 1.142.129.375.287.674.474.896a.234.234 0 0 1 .053.14.219.219 0 0 1 0 .124c-.035.14-.082.334-.14.58-.06.234-.094.38-.106.44-.024.082-.059.134-.106.158-.046.011-.11 0-.193-.035-.562-.258-1.008-.739-1.336-1.442-.328-.703-.492-1.383-.492-2.039 0-.715.129-1.4.387-2.057a5.173 5.173 0 0 1 1.125-1.74c.504-.504 1.125-.902 1.863-1.195.738-.305 1.594-.457 2.566-.457a5.77 5.77 0 0 1 2.18.404c.68.258 1.266.621 1.758 1.09a4.829 4.829 0 0 1 1.178 1.635c.293.633.439 1.324.439 2.074 0 .773-.117 1.5-.351 2.18a5.756 5.756 0 0 1-.967 1.775c-.41.504-.903.902-1.477 1.195a4.079 4.079 0 0 1-1.88.44c-.458 0-.88-.1-1.266-.299-.387-.211-.65-.457-.791-.738l-.246.914a60.04 60.04 0 0 1-.317 1.23 6.23 6.23 0 0 1-.51 1.248c-.222.446-.427.815-.615 1.108.422.129.856.228 1.3.299.446.07.903.105 1.372.105a8.759 8.759 0 0 0 3.498-.703 8.975 8.975 0 0 0 2.865-1.916 9.091 9.091 0 0 0 1.934-2.865A8.885 8.885 0 0 0 18 9.5a8.76 8.76 0 0 0-.703-3.498 8.833 8.833 0 0 0-1.934-2.865 8.832 8.832 0 0 0-2.865-1.934A8.758 8.758 0 0 0 9 .5z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 11 18" id="icon-social_icon_facebook">
        <path
          d="M6.91 5.045c0-.516.103-.932.309-1.248.217-.317.687-.475 1.41-.475l1.838-.017V.14A23.92 23.92 0 0 0 7.786 0a5.6 5.6 0 0 0-1.822.28 3.713 3.713 0 0 0-1.427.826c-.39.375-.693.844-.91 1.407C3.409 3.076 3.3 3.738 3.3 4.5v2.25H0v3.375h3.3L3.317 18H6.91v-7.875H9.9L11 6.75H6.91V5.045z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 18 18" id="icon-social_icon_instagram">
        <path
          d="M9 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.392.144.745.374 1.036.673.299.29.529.644.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671a2.982 2.982 0 0 1-1.708 1.708c-.317.124-.794.27-1.671.31-.95.043-1.234.053-3.637.053s-2.688-.01-3.637-.053c-.877-.04-1.354-.187-1.671-.31a2.788 2.788 0 0 1-1.035-.673 2.788 2.788 0 0 1-.673-1.035c-.123-.317-.27-.793-.31-1.671-.043-.949-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.144-.392.374-.745.673-1.036a2.78 2.78 0 0 1 1.035-.673c.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052zM9 0C6.556 0 6.25.01 5.29.054S3.676.25 3.104.473c-.6.225-1.145.58-1.594 1.038-.458.45-.813.993-1.039 1.594C.25 3.677.098 4.33.054 5.289.01 6.25 0 6.556 0 9s.01 2.75.054 3.71c.044.959.196 1.613.419 2.185.226.6.58 1.145 1.038 1.594.45.458.993.813 1.594 1.038.572.223 1.227.375 2.184.419C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.6 4.6 0 0 0 2.633-2.632c.222-.572.374-1.226.418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.411 4.411 0 0 0 16.49 1.51 4.412 4.412 0 0 0 14.895.472C14.323.25 13.67.098 12.711.054 11.75.01 11.444 0 9 0z"
          fill="currentColor"
        />
        <path
          d="M9 4.378a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244zM9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.804-6.724a1.08 1.08 0 1 0 0-2.16 1.08 1.08 0 0 0 0 2.16z"
          fill="currentColor"
        />
      </symbol>
      <symbol
        viewBox="0 0 24 24"
        id="icon-unlock"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M11.2 17.9V20h1.6v-2.1c1.3-.4 2.2-1.5 2.2-2.9 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.4.9 2.5 2.2 2.9zm.8-4.3c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4z"
        />
        <path
          fill="currentColor"
          d="M17.8 8h-10c0-3 2-5.2 4.2-5.2.8 0 1.6.3 2.3.9l1.2-1.1c-.9-.8-2.1-1.3-3.4-1.3C8.7 1.2 6.2 4.4 6.2 8H3v16h18V8h-3.2zm1.6 14.4H4.6V9.6h14.8v12.8z"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="icon-update">
        <path
          d="M17.607 20.838C12.78 23.56 6.54 22.068 3.675 17.57l-1.35.86c3.344 5.248 10.535 6.921 16.068 3.802l-.786-1.394z"
          fill="currentColor"
        />
        <path
          d="M2.375 17l.194-.776-.776-.194-.194.776.776.194zm-.599 5.682l1.375-5.488-1.552-.388-1.375 5.487 1.552.389zm.404-4.906l5.488 1.375.388-1.552-5.487-1.375-.389 1.552zM6.393 3.162C11.22.44 17.46 1.932 20.325 6.43l1.35-.86C18.33.322 11.14-1.35 5.607 1.768l.786 1.394z"
          fill="currentColor"
        />
        <path
          d="M21.625 7l-.194.776.776.194.194-.776L21.625 7zm.599-5.682l-1.375 5.488 1.552.388 1.375-5.487-1.552-.389zm-.404 4.906l-5.488-1.375-.388 1.552 5.487 1.375.389-1.552z"
          fill="currentColor"
        />
      </symbol>
      <symbol
        viewBox="0 0 20 24"
        id="icon-user"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 13C6.4 13 2 17.8 2 24h20c0-6.2-4.4-11-10-11zm0 1.6c4.2 0 7.6 3.3 8.3 7.8H3.7c.7-4.5 4.1-7.8 8.3-7.8zm0-2.6c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zm0-10.4c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4z"
          fill="currentColor"
        />
      </symbol>
      <symbol
        viewBox="0 0 25.4 22"
        id="icon-wishlist"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M6.9 2.6c1.4 0 2.7.6 3.8 1.6l.2.2L12 5.6l1.1-1.1.2-.2c1-1 2.3-1.6 3.8-1.6s2.8.6 3.8 1.6c2.1 2.1 2.1 5.6 0 7.7L12 20.7l-8.9-8.9C1 9.7 1 6.2 3.1 4.1c1.1-.9 2.4-1.5 3.8-1.5zm0-1.6C5.1 1 3.3 1.7 2 3.1-.7 5.8-.7 10.3 2 13l10 10 10-9.9c2.7-2.8 2.7-7.3 0-10-1.4-1.4-3.1-2-4.9-2-1.8 0-3.6.7-4.9 2l-.2.2-.2-.2C10.4 1.7 8.7 1 6.9 1z"
        />
      </symbol>
      <symbol
        viewBox="0 0 24 24"
        id="icon-wishlist-add"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M6.902 1c-1.8 0-3.6.7-4.9 2.1-2.7 2.7-2.7 7.2 0 9.9l10 10 10-9.9c2.7-2.8 2.7-7.3 0-10-1.4-1.4-3.1-2-4.9-2-1.8 0-3.6.7-4.9 2l-.2.2-.2-.2c-1.4-1.4-3.1-2.1-4.9-2.1z"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon-youtube"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.824 8.263c-.105-.741-.357-1.355-.756-1.841-.386-.498-.96-.827-1.722-.984a22.231 22.231 0 0 0-2.04-.256 46.926 46.926 0 0 0-3.673-.164L12 5l-.65.018a47.334 47.334 0 0 0-3.656.164c-.739.061-1.419.146-2.04.256-.761.157-1.341.486-1.74.984-.387.486-.633 1.1-.738 1.841a22.252 22.252 0 0 0-.158 2.443L3 12l.018 1.313c.011.862.064 1.67.158 2.424.105.741.351 1.361.738 1.86.398.485.979.807 1.74.965.621.11 1.301.195 2.04.256.738.06 1.423.103 2.056.127a158.5 158.5 0 0 0 1.6.055h1.283c.433-.012.967-.03 1.6-.055a46.865 46.865 0 0 0 2.074-.127 22.252 22.252 0 0 0 2.039-.256c.761-.158 1.336-.48 1.722-.966.399-.498.65-1.118.756-1.859.094-.754.147-1.562.158-2.425L21 12l-.018-1.294a22.235 22.235 0 0 0-.158-2.443zM9.75 15.5v-7l5.625 3.5-5.625 3.5z"
          fill="currentColor"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 16 16" id="icon_add">
        <path d="M0 8h16M8 0v16" stroke="currentColor" strokeWidth="1.6" />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon_avatar"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="transparent" d="M0 0h24v24H0z" />
        <path
          d="M2.826 23.2c.36-5.393 4.323-9.4 9.174-9.4 4.851 0 8.815 4.007 9.174 9.4H2.826z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx={12}
          cy={6}
          r="5.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 16 13"
        id="icon_checkbox"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5.167L6.385 11 15 1"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 24 24"
        id="icon_comment"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.8 18v-.8h-4V.8h22.4v16.4H9.669l-.235.234L4.8 22.07V18z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </symbol>
      <symbol
        fill="none"
        viewBox="0 0 16 16"
        id="icon_minus"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 8h16" stroke="currentColor" strokeWidth="1.6" />
      </symbol>
    </svg>
  </div>
  {/* Mirrored from softali.net/victor/yanka/html/index-skin-fishing.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 08 Apr 2022 08:54:46 GMT */}
</>

  )
}

export default AllCategoryProducts
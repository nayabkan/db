import React from "react";
import '../../css/newAuction.css'
import Footer from "../footer/Footer";
import Header from "../header/Header";

function AuctionWorld() {
  return (
    <div id="spaces-main" className="pt-perspective">
      <Header />
      {/* content  */}
      <main className="l-main row">
        <div className="main large-12 small-12 columns">
          <div className="body field clearfix">
            <div
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              className="vc_row wpb_row vc_row-fluid vc_custom_1647339677699 vc_row-has-fill"
              style={{ height : '500px'}}
            >
              <div className="wpb_column vc_column_container vc_col-sm-7 vc_col-lg-7 vc_col-md-10 vc_col-xs-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd_empty_space"
                      data-heightmobile={0}
                      data-heighttablet={30}
                      data-heightdesktop={70}
                      style={{ height: 70 }}
                    />
                    <div
                      className="wd_empty_space"
                      data-heightmobile={70}
                      data-heighttablet={75}
                      data-heightdesktop={90}
                      style={{ height: 90 }}
                    />
                    <div
                      className="wd-heading text-left"
                      style={{ maxWidth: 700 }}
                    >
                      <h1
                        style={{ margin: 0, color: "#ffffff", marginTop: '-135px' }}
                        className="title_a auction-title"
                      >
                        Join Our Next Auction! Find Your Equipment
                      </h1>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={20}
                      data-heighttablet={20}
                      data-heightdesktop={20}
                      style={{ height: 20 }}
                    />
                    <div
                      className="search_product_form one_line devia-anim item-target"
                      data-devia-animate='{"triggerHandler":"inview","animationTarget":".item-target","duration":"1200","delay":"150",
														"initValues":{"y":41,"z":-118,"rotateX":-65,"opacity":0},
														"animations":{"y":0,"z":0,"rotateX":0,"opacity":1,"delay":2,"ease":"easeOutQuint"}}'
                    >
                      <div className="html-before item-target" />
                      <form
                        role="search"
                        method="get"
                        action="https://bidpro.webdevia.com/shop/"
                      >
                        <ul className="inline-list">
                          <li className="item-target product_cat">
                            <select
                              name="product-category"
                              id="term"
                              className="product_categories"
                            >
                              <option value={-1}>All Categories</option>
                              <option className="level-0" value="watches">
                                Watches&nbsp;&nbsp;(1)
                              </option>
                              <option className="level-0" value="vehicles">
                                Vehicles&nbsp;&nbsp;(10)
                              </option>
                              <option className="level-0" value="gaming">
                                Gaming&nbsp;&nbsp;(6)
                              </option>
                              <option className="level-0" value="stamps">
                                Stamps&nbsp;&nbsp;(2)
                              </option>
                              <option className="level-0" value="sneakers">
                                Sneakers&nbsp;&nbsp;(8)
                              </option>
                              <option className="level-0" value="electronics">
                                Electronics&nbsp;&nbsp;(4)
                              </option>
                              <option className="level-0" value="antiques">
                                Antiques&nbsp;&nbsp;(4)
                              </option>
                            </select>
                          </li>
                          <li className="item-target product-name">
                            <input
                              type="hidden"
                              name="post_type"
                              defaultValue="product"
                            />
                            <input
                              type="text"
                              name="s"
                              id="product_name"
                              placeholder="I'm Looking for..."
                            />
                          </li>
                          <li className="item-target btn-search">
                            <div className="submit-button item-target">
                              <input
                                type="submit"
                                className="button"
                                defaultValue="search"
                              />
                            </div>
                          </li>
                        </ul>
                      </form>
                      <div className="html-after item-target" />
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={50}
                      data-heighttablet={80}
                      data-heightdesktop={130}
                      style={{ height: 130 }}
                    />
                    <div
                      className="wd-video-box-bg wpb_video_widget wpb_content_element vc_clearfix vc_video-aspect-ratio- vc_video-el-width- vc_video-align-"
                      style={{
                        background: "url() center center no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="wpb_wrapper">
                        <div className="wd-video-box">
                          <div className="full_screen_video_wrapper text-left">
                            <a
                              href="#"
                              data-toggle="modal625427726692a"
                              data-reveal-id="modal625427726692a"
                              className="play popup1_open"
                            >
                              <i className="fa fa-play fa-1x" />
                              <span>
                                We are running our summer discount
                                <br />
                                Watch video to learn more
                              </span>
                              <div className="playvideo_animation" />
                              <div
                                className="playvideo_animation"
                                style={{ animationDelay: "0.4s" }}
                              />
                              <div
                                className="playvideo_animation"
                                style={{ animationDelay: "0.6s" }}
                              />
                            </a>
                            <div
                              className="medium reveal"
                              id="modal625427726692a"
                              data-reveal=""
                              data-reset-on-close="true"
                              data-animation-in="fade-in"
                              data-animation-out="fade-out"
                            >
                              <div className="flex-video widescreen vimeo"></div>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={20}
                      data-heighttablet={40}
                      data-heightdesktop={70}
                      style={{ height: 70 }}
                    />
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-5 vc_col-lg-5 vc_col-md-2 vc_hidden-md vc_hidden-sm vc_hidden-xs">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper" />
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix" />
            <div
              data-animation-delay={300}
              className="vc_row wpb_row vc_row-fluid"
            >
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd_empty_space"
                      data-heightmobile={35}
                      data-heighttablet={40}
                      data-heightdesktop={55}
                      style={{ height: 55 }}
                    />
                    <div
                      className="wd-heading text-left"
                      style={{ maxWidth: "100%" }}
                    >
                      <h2 style={{ margin: 0 }} className="title_a">
                        Explore Popular Categories
                      </h2>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={30}
                      data-heighttablet={40}
                      data-heightdesktop={45}
                      style={{ height: 45 }}
                    />
                    <div className="woocommerce columns-6 standard">
                      <ul className="products columns-6 grid">
                        <li className="product-category product first">
                          <a href="product-category/watches/index.html">
                            <img
                              src={require('../../uploads/2021/07/watch-556x414.png')}
                              alt="Watches"
                              width={600}
                              height={414}
                            />
                            <h2 className="woocommerce-loop-category__title">
                              Watches <mark className="count">(1)</mark>
                            </h2>
                            <div className="woo-category-info" />
                          </a>
                        </li>
                        <li className="product-category product">
                          <a href="product-category/vehicles/index.html">
                            <img
                              src={require('../../uploads/2021/07/finance-car@2x-556x414.png')}
                              alt="Vehicles"
                              width={600}
                              height={414}
                            />
                            <h2 className="woocommerce-loop-category__title">
                              Vehicles <mark className="count">(10)</mark>
                            </h2>
                            <div className="woo-category-info" />
                          </a>
                        </li>
                        <li className="product-category product">
                          <a href="product-category/gaming/index.html">
                            <img
                              src={require('../../uploads/2021/07/xbox-556x414.png')}
                              alt="Gaming"
                              width={600}
                              height={414}
                            />
                            <h2 className="woocommerce-loop-category__title">
                              Gaming <mark className="count">(6)</mark>
                            </h2>
                            <div className="woo-category-info" />
                          </a>
                        </li>
                        <li className="product-category product">
                          <a href="product-category/stamps/index.html">
                            <img
                              src={require('../../uploads/2021/07/stamps-556x414.png')}
                              alt="Stamps"
                              width={600}
                              height={414}
                            />
                            <h2 className="woocommerce-loop-category__title">
                              Stamps <mark className="count">(2)</mark>
                            </h2>
                            <div className="woo-category-info" />
                          </a>
                        </li>
                        <li className="product-category product">
                          <a href="product-category/sneakers/index.html">
                            <img
                              src={require('../../uploads/2021/07/sneakers@2x-556x414.png')}
                              alt="Sneakers"
                              width={600}
                              height={414}
                            />
                            <h2 className="woocommerce-loop-category__title">
                              Sneakers <mark className="count">(8)</mark>
                            </h2>
                            <div className="woo-category-info" />
                          </a>
                        </li>
                        <li className="product-category product last">
                          <a href="product-category/electronics/index.html">
                            <img
                              src={require('../../uploads/2021/07/apple_ipad--556x414.png')}
                              alt="Electronics"
                              width={600}
                              height={414}
                            />
                            <h2 className="woocommerce-loop-category__title">
                              Electronics <mark className="count">(4)</mark>
                            </h2>
                            <div className="woo-category-info" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row wpb_row vc_row-fluid featured-grid">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd_empty_space"
                      data-heightmobile={20}
                      data-heighttablet={35}
                      data-heightdesktop={50}
                      style={{ height: 50 }}
                    />
                    <div
                      className="wd-heading text-left"
                      style={{ maxWidth: "100%" }}
                    >
                      <h2 style={{ margin: 0 }} className="title_a">
                        Trending Auctions
                      </h2>
                      <p style={{}} className="sub_title_a">
                        See what's popular across thousands of items.
                      </p>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={30}
                      data-heighttablet={40}
                      data-heightdesktop={40}
                      style={{ height: 40 }}
                    />
                    <div className="woocommerce columns-4">
                      <ul className="products columns-4 grid">
                        <li className="product type-product post-10818 status-publish first instock product_cat-watches product_tag-premium product_tag-sales has-post-thumbnail featured downloadable sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <div className="auction-time">
                              Time left:
                              <div
                                className="main-auction auction-time-countdown"
                                data-time={1660608000}
                                data-auctionid={10818}
                                data-format="dHMS"
                              />
                            </div>
                            <a
                              href="product/unique-watch/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={10818}
                              data-product_sku="5784-245-1-1-1-1-1"
                              aria-label="Read more about “Unique Watch”"
                              rel="nofollow"
                            >
                              Bid now
                            </a>
                            <a
                              href="product/unique-watch/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2021/07/vitae-london-JvNFXRKWjL8-unsplash-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/watches/index.html"
                                rel="tag"
                              >
                                Watches
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/unique-watch/index.html">
                                Unique Watch
                              </a>
                            </h2>
                            <span className="price">
                              <span
                                className="auction-price starting-bid"
                                data-auction-id={10818}
                                data-bid=""
                                data-status="running"
                              >
                                <span className="current auction">
                                  Starting bid:
                                </span>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  350.00
                                </span>
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-10800 status-publish instock product_cat-antiques product_tag-premium product_tag-sales has-post-thumbnail featured downloadable sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <a
                              href="product/black-premium-collection-2/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={10800}
                              data-product_sku="5784-245-1-1-1-1"
                              aria-label="Read more about “Black Premium Collection”"
                              rel="nofollow"
                            >
                              Auction finished
                            </a>
                            <a
                              href="product/black-premium-collection-2/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2018/05/alexander-andrews-BX4Q0gojWAs-unsplash-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/antiques/index.html"
                                rel="tag"
                              >
                                Antiques
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/black-premium-collection-2/index.html">
                                Black Premium Collection
                              </a>
                            </h2>
                            <span className="price">
                              <span className="winned-for auction">
                                Auction Ended
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-10798 status-publish instock product_cat-gaming product_tag-premium product_tag-sales has-post-thumbnail featured downloadable sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <div className="auction-time future">
                              Auction starts in:
                              <div
                                className="auction-time-countdown future"
                                data-time={1662681600}
                                data-format="dHMS"
                              />
                            </div>
                            <a
                              href="product/white-sony-ps-4-joystick-2/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={10798}
                              data-product_sku="5784-245-1-1-1"
                              aria-label="Read more about “White Sony PS-4 Joystick”"
                              rel="nofollow"
                            >
                              Auction not started
                            </a>
                            <a
                              href="product/white-sony-ps-4-joystick-2/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2018/05/igor-karimov-59MGmlUiqwA-unsplash-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/gaming/index.html"
                                rel="tag"
                              >
                                Gaming
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/white-sony-ps-4-joystick-2/index.html">
                                White Sony PS-4 Joystick
                              </a>
                            </h2>
                            <span className="price">
                              <span
                                className="auction-price starting-bid"
                                data-auction-id={10798}
                                data-bid=""
                                data-status="future"
                              >
                                <span className="starting auction">
                                  Starting bid:
                                </span>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  350.00
                                </span>
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-10795 status-publish last instock product_cat-antiques product_tag-premium product_tag-sales has-post-thumbnail featured downloadable sold-individually shipping-taxable purchasable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <div className="auction-time future">
                              Auction starts in:
                              <div
                                className="auction-time-countdown future"
                                data-time={1664496000}
                                data-format="dHMS"
                              />
                            </div>
                            <a
                              href="product/brown-leader-bag-1/index.html"
                              data-quantity={1}
                              className="button product_type_auction add_to_cart_button"
                              data-product_id={10795}
                              data-product_sku="5784-245-1-1"
                              aria-label="Read more about “Brown Leader Bag”"
                              rel="nofollow"
                            >
                              Auction not started
                            </a>
                            <a
                              href="product/brown-leader-bag-1/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2018/05/alvaro-serrano-pFLNV4gkXsc-unsplash-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/antiques/index.html"
                                rel="tag"
                              >
                                Antiques
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/brown-leader-bag-1/index.html">
                                Brown Leader Bag
                              </a>
                            </h2>
                            <span className="price">
                              <span
                                className="auction-price starting-bid"
                                data-auction-id={10795}
                                data-bid=""
                                data-status="future"
                              >
                                <span className="starting auction">
                                  Starting bid:
                                </span>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  350.00
                                </span>
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-11002 status-publish first instock product_cat-gaming product_tag-premium product_tag-sales has-post-thumbnail featured downloadable sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <div className="auction-time future">
                              Auction starts in:
                              <div
                                className="auction-time-countdown future"
                                data-time={1696032000}
                                data-format="dHMS"
                              />
                            </div>
                            <a
                              href="product/xbox-joystick/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={11002}
                              data-product_sku="5784-245-1-1-1-2"
                              aria-label="Read more about “Xbox Joystick”"
                              rel="nofollow"
                            >
                              Auction not started
                            </a>
                            <a
                              href="product/xbox-joystick/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2021/09/louis-philippe-poitras-OitYIbHSyWU-unsplash-600x414.gif')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/gaming/index.html"
                                rel="tag"
                              >
                                Gaming
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/xbox-joystick/index.html">
                                Xbox Joystick
                              </a>
                            </h2>
                            <span className="price">
                              <span
                                className="auction-price starting-bid"
                                data-auction-id={11002}
                                data-bid=""
                                data-status="future"
                              >
                                <span className="starting auction">
                                  Starting bid:
                                </span>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  350.00
                                </span>
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={65}
                      data-heighttablet={65}
                      data-heightdesktop={65}
                      style={{ height: 65 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              className="vc_row wpb_row vc_row-fluid vc_custom_1625854912175 vc_row-has-fill"
            >
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd_empty_space"
                      data-heightmobile={15}
                      data-heighttablet={15}
                      data-heightdesktop={15}
                      style={{ height: 15 }}
                    />
                    <div
                      className="wd-heading text-left"
                      style={{ maxWidth: "100%" }}
                    >
                      <h2 style={{ margin: 0 }} className="title_a">
                        Upcoming Auctions
                      </h2>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={100}
                      data-heighttablet={100}
                      data-heightdesktop={100}
                      style={{ height: 100 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix" />
            <div
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              className="vc_row wpb_row vc_row-fluid vc_custom_1626175829049"
            >
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner vc_custom_1626178067664">
                  <div className="wpb_wrapper">
                    <div className="woocommerce columns-4" style={{
                          marginTop: "90px"
                    }}>
                      <ul className="products columns-4 grid">
                        <li className="product type-product post-591 status-publish first instock product_cat-electronics product_tag-premium product_tag-sales has-post-thumbnail downloadable sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <a
                              href="product/iphone-charger/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={591}
                              data-product_sku="5784-255"
                              aria-label="Read more about “iPhone Charger”"
                              rel="nofollow"
                            >
                              Auction finished
                            </a>
                            <a
                              href="product/iphone-charger/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2018/05/iphone-charger-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/electronics/index.html"
                                rel="tag"
                              >
                                Electronics
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/iphone-charger/index.html">
                                iPhone Charger
                              </a>
                            </h2>
                            <div
                              className="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong className="rating">5.00</strong>{" "}
                                out of 5
                              </span>
                            </div>
                            <span className="price">
                              <span className="winned-for auction">
                                Auction Ended
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-587 status-publish instock product_cat-vehicles product_tag-premium product_tag-sales has-post-thumbnail sale sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <a
                              href="product/forklift-truck/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={587}
                              data-product_sku="5784-215"
                              aria-label="Read more about “Forklift Truck”"
                              rel="nofollow"
                            >
                              Auction finished
                            </a>
                            <a
                              href="product/forklift-truck/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2018/05/Forklift-Truckt-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/vehicles/index.html"
                                rel="tag"
                              >
                                Vehicles
                              </a>
                            </span>
                            <span className="product_item_details__meta_wrapper" />
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/forklift-truck/index.html">
                                Forklift Truck
                              </a>
                            </h2>
                            <span className="price">
                              <span className="winned-for auction">
                                Auction Ended
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-10674 status-publish instock product_cat-gaming has-post-thumbnail sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <a
                              href="product/play-station-5/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={10674}
                              data-product_sku=""
                              aria-label="Read more about “Play Station 5”"
                              rel="nofollow"
                            >
                              Auction finished
                            </a>
                            <a
                              href="product/play-station-5/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2021/07/dennis-cortes-cL7xovIO7sw-unsplash-scaled-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/gaming/index.html"
                                rel="tag"
                              >
                                Gaming
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/play-station-5/index.html">
                                Play Station 5
                              </a>
                            </h2>
                            <span className="price">
                              <span className="winned-for auction">
                                Auction Ended
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-551 status-publish last instock product_cat-stamps product_tag-premium product_tag-sales has-post-thumbnail sold-individually shipping-taxable purchasable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <div className="auction-time">
                              Time left:
                              <div
                                className="main-auction auction-time-countdown"
                                data-time={1759190400}
                                data-auctionid={551}
                                data-format="dHMS"
                              />
                            </div>
                            <a
                              href="product/postage-stamp/index.html"
                              data-quantity={1}
                              className="button product_type_auction add_to_cart_button"
                              data-product_id={551}
                              data-product_sku="woo-sunglasses"
                              aria-label="Read more about “Postage Stamp”"
                              rel="nofollow"
                            >
                              Bid now
                            </a>
                            <a
                              href="product/postage-stamp/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2017/12/ali-bakhtiari-81eOv8Vox8k-unsplash-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/stamps/index.html"
                                rel="tag"
                              >
                                Stamps
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/postage-stamp/index.html">
                                Postage Stamp
                              </a>
                            </h2>
                            <span className="price">
                              <span
                                className="auction-price current-bid"
                                data-auction-id={551}
                                data-bid={90}
                                data-status="running"
                              >
                                <span className="current auction">
                                  Current bid:
                                </span>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  90.00
                                </span>
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix" />
            <div
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              className="vc_row wpb_row vc_row-fluid"
            >
              <div className="banner-picket-by-hand-heading wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd_empty_space"
                      data-heightmobile={60}
                      data-heighttablet={60}
                      data-heightdesktop={45}
                      style={{ height: 45 }}
                    />
                    <div
                      className="wd-heading text-left"
                      style={{ maxWidth: "100%" }}
                    >
                      <h2 style={{ margin: 0 }} className="title_a">
                        Products picked by hand
                      </h2>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={40}
                      data-heighttablet={40}
                      data-heightdesktop={75}
                      style={{ height: 75 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix" />
            <div
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              className="vc_row wpb_row vc_row-fluid vc_custom_1626168932296 vc_row-has-fill"
            >
              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12">
                <div className="vc_column-inner vc_custom_1635441281502">
                  <div className="wpb_wrapper">
                    <div className="wd-banner">
                      <div className="banner-img">
                        <img
                          src={require('../../uploads/2021/07/banner-bg@2x.jpg')}
                          width={440}
                          height={222}
                          alt="Headphone Trending JBL Harman"
                        />
                      </div>
                      <div className="disc bottom_right">
                        <h4 style={{ color: "#fff" }}>
                          Headphone Trending JBL Harman
                        </h4>
                        <a
                          href="product/mercedes-eqc-1-2021/index.html"
                          className="wd-btn small btn-radius btn-color-4 hover-color-1 btn-solid"
                          style={{ fontSize: 14 }}
                        >
                          Get in touch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-6">
                <div className="vc_column-inner vc_custom_1635441371779">
                  <div className="wpb_wrapper">
                    <div className="wd-banner">
                      <div className="banner-img">
                        <img
                          src={require('../../uploads/2021/07/Banner-bg-2@2x.jpg')}
                          width={440}
                          height={222}
                          alt="Headphone Trending JBL Harman"
                        />
                      </div>
                      <div className="disc bottom_right">
                        <h4 style={{ color: "#000000" }}>
                          Headphone Trending JBL Harman
                        </h4>
                        <a
                          href="product/xbox-360-2/index.html"
                          className="wd-btn small btn-radius btn-color-4 hover-color-1 btn-solid"
                          style={{ fontSize: 14 }}
                        >
                          Get in touch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-6">
                <div className="vc_column-inner vc_custom_1635441380746">
                  <div className="wpb_wrapper">
                    <div className="wd-banner">
                      <div className="banner-img">
                        <img
                          src={require('../../uploads/2021/07/Banner-bg-3@2x.jpg')}
                          width={440}
                          height={222}
                          alt="Headphone Trending JBL Harman"
                        />
                      </div>
                      <div className="disc bottom_right">
                        <h4 style={{ color: "#fff" }}>
                          Headphone Trending JBL Harman
                        </h4>
                        <a
                          href="product/samsung/index.html"
                          className="wd-btn small btn-radius btn-color-4 hover-color-1 btn-solid"
                          style={{ fontSize: 14 }}
                        >
                          Get in touch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix" />
            <div
              data-vc-full-width="true"
              data-vc-full-width-init="false"
              className="vc_row wpb_row vc_row-fluid vc_custom_1625595306103 vc_row-has-fill"
            >
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner vc_custom_1626169711848">
                  <div className="wpb_wrapper">
                    <div className="wd-banner">
                      <div className="banner-img">
                        <img
                          src={require('../../uploads/2021/07/Banner-bg-4@2x.jpg')}
                          width={440}
                          height={222}
                          alt="Headphone Trending JBL Harman"
                        />
                      </div>
                      <div className="disc top_left">
                        <h4 style={{ color: "#fff" }}>
                          Headphone Trending JBL Harman
                        </h4>
                        <a
                          href="product/unique-watch/index.html"
                          className="wd-btn small btn-radius btn-color-4 hover-color-1 btn-solid"
                          style={{ fontSize: 14 }}
                        >
                          Get in touch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner vc_custom_1626169728718">
                  <div className="wpb_wrapper">
                    <div className="wd-banner">
                      <div className="banner-img">
                        <img
                          src={require('../../uploads/2021/07/Banner-bg-5@2x.jpg')}
                          width={440}
                          height={222}
                          alt="Headphone Trending JBL Harman"
                        />
                      </div>
                      <div className="disc top_left">
                        <h4 style={{ color: "#000000" }}>
                          Headphone Trending JBL Harman
                        </h4>
                        <a
                          href="product/sneakers/index.html"
                          className="wd-btn small btn-radius btn-color-3 hover-color-1 btn-solid"
                          style={{ fontSize: 14 }}
                        >
                          Get in touch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row-full-width vc_clearfix" />
            <div className="vc_row wpb_row vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd_empty_space"
                      data-heightmobile={70}
                      data-heighttablet={75}
                      data-heightdesktop={55}
                      style={{ height: 55 }}
                    />
                    <div
                      className="wd-heading text-left"
                      style={{ maxWidth: "100%" }}
                    >
                      <h2 style={{ margin: 0 }} className="title_a">
                        Products picked by hand
                      </h2>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={30}
                      data-heighttablet={40}
                      data-heightdesktop={40}
                      style={{ height: 40 }}
                    />
                    <div className="woocommerce columns-4">
                      <ul className="products columns-4 grid">
                        <li className="product type-product post-589 status-publish first instock product_cat-antiques product_tag-premium product_tag-sales has-post-thumbnail sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <a
                              href="product/black-fayorit-typewriter/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={589}
                              data-product_sku="5784-235"
                              aria-label="Read more about “Black Fayorit typewriter”"
                              rel="nofollow"
                            >
                              Auction finished
                            </a>
                            <a
                              href="product/black-fayorit-typewriter/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2018/05/florian-klauer-mk7D-4UCfmg-unsplash-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/antiques/index.html"
                                rel="tag"
                              >
                                Antiques
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/black-fayorit-typewriter/index.html">
                                Black Fayorit typewriter
                              </a>
                            </h2>
                            <span className="price">
                              <span className="winned-for auction">
                                Auction Ended
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-548 status-publish instock product_cat-vehicles product_tag-auction product_tag-premium product_tag-sales has-post-thumbnail sale sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <a
                              href="product/mercedes-eqc-1-2021/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={548}
                              data-product_sku="woo-vneck-tee"
                              aria-label="Read more about “Mercedes EQC 2021”"
                              rel="nofollow"
                            >
                              Auction finished
                            </a>
                            <span className="onsale">Sale!</span>
                            <a
                              href="product/mercedes-eqc-1-2021/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2017/12/Img-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/vehicles/index.html"
                                rel="tag"
                              >
                                Vehicles
                              </a>
                            </span>
                            <span className="product_item_details__meta_wrapper">
                              <span className="details_taxonomy product_item_details__meta">
                                | Odometer: 62,988 mi (ACTUAL)
                              </span>
                              <span className="details_taxonomy product_item_details__meta">
                                | Body Style: SEDAN 4D
                              </span>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/mercedes-eqc-1-2021/index.html">
                                Mercedes EQC 2021
                              </a>
                            </h2>
                            <span className="price">
                              <span className="winned-for auction">
                                Auction Ended
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-590 status-publish instock product_cat-sneakers product_tag-premium product_tag-sales has-post-thumbnail downloadable sold-individually shipping-taxable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <a
                              href="product/sneakers/index.html"
                              data-quantity={1}
                              className="button product_type_auction"
                              data-product_id={590}
                              data-product_sku="5784-245"
                              aria-label="Read more about “Sneakers”"
                              rel="nofollow"
                            >
                              Auction finished
                            </a>
                            <a
                              href="product/sneakers/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src={require('../../uploads/2018/05/sneaker-600x414.jpg')}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/sneakers/index.html"
                                rel="tag"
                              >
                                Sneakers
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/sneakers/index.html">Sneakers</a>
                            </h2>
                            <span className="price">
                              <span className="winned-for auction">
                                Auction Ended
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                        <li className="product type-product post-597 status-publish last instock product_cat-sneakers product_tag-premium product_tag-sales has-post-thumbnail sold-individually shipping-taxable purchasable product-type-auction">
                          <figure className="product_item_thumbnail">
                            <div className="auction-time">
                              Time left:
                              <div
                                className="main-auction auction-time-countdown"
                                data-time={1651276800}
                                data-auctionid={597}
                                data-format="dHMS"
                              />
                            </div>
                            <a
                              href="product/sneaker-premium/index.html"
                              data-quantity={1}
                              className="button product_type_auction add_to_cart_button"
                              data-product_id={597}
                              data-product_sku="5784-765"
                              aria-label="Read more about “Sneaker Premium”"
                              rel="nofollow"
                            >
                              Bid now
                            </a>
                            <a
                              href="product/sneaker-premium/index.html"
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              <img
                                width={600}
                                height={414}
                                src="wp-content/uploads/2018/12/photo-1596568359553-a56de6970068-600x414.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                                srcSet="
                            https://bidpro.webdevia.com/wp-content/uploads/2018/12/photo-1596568359553-a56de6970068-600x414.jpg  600w,
                            https://bidpro.webdevia.com/wp-content/uploads/2018/12/photo-1596568359553-a56de6970068-300x206.jpg  300w,
                            https://bidpro.webdevia.com/wp-content/uploads/2018/12/photo-1596568359553-a56de6970068-768x528.jpg  768w,
                            https://bidpro.webdevia.com/wp-content/uploads/2018/12/photo-1596568359553-a56de6970068-490x337.jpg  490w,
                            https://bidpro.webdevia.com/wp-content/uploads/2018/12/photo-1596568359553-a56de6970068.jpg         1000w
                          "
                                sizes="(max-width: 600px) 100vw, 600px"
                              />
                            </a>
                            <span className="auction-bage" />
                          </figure>
                          <div className="product_item_details">
                            <span className="product_item_details__meta">
                              <a
                                href="product-category/sneakers/index.html"
                                rel="tag"
                              >
                                Sneakers
                              </a>
                            </span>
                            <h2 className="woocommerce-loop-product__title">
                              <a href="product/sneaker-premium/index.html">
                                Sneaker Premium
                              </a>
                            </h2>
                            <div
                              className="star-rating"
                              role="img"
                              aria-label="Rated 4.50 out of 5"
                            >
                              <span style={{ width: "90%" }}>
                                Rated <strong className="rating">4.50</strong>{" "}
                                out of 5
                              </span>
                            </div>
                            <span className="price">
                              <span
                                className="auction-price starting-bid"
                                data-auction-id={597}
                                data-bid=""
                                data-status="running"
                              >
                                <span className="current auction">
                                  Starting bid:
                                </span>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  10.00
                                </span>
                              </span>
                            </span>
                            <div className="auction-condition">
                              Item condition: New
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row wpb_row vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd_empty_space"
                      data-heightmobile={70}
                      data-heighttablet={75}
                      data-heightdesktop={65}
                      style={{ height: 65 }}
                    />
                    <div
                      className="wd-heading text-left"
                      style={{ maxWidth: "100%" }}
                    >
                      <h2 style={{ margin: 0 }} className="title_a">
                        Premier Sellers
                      </h2>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={30}
                      data-heighttablet={40}
                      data-heightdesktop={40}
                      style={{ height: 40 }}
                    />
                    <div id="dokan-store-listing-filter-wrap">
                      <div className="left">
                        <p className="item store-count">
                          Total stores showing: 6
                        </p>
                      </div>
                      <div className="right">
                        <div className="item">
                          <div className="dokan-icons">
                            <div className="dokan-icon-div" />
                            <div className="dokan-icon-div" />
                            <div className="dokan-icon-div" />
                          </div>
                          <button className="dokan-store-list-filter-button dokan-btn dokan-btn-theme" />
                        </div>
                        <form
                          name="stores_sorting"
                          className="sort-by item"
                          method="get"
                        >
                          <label>:</label>
                          <select
                            name="stores_orderby"
                            id="stores_orderby"
                            aria-label=""
                          >
                            <option value="most_recent">Most Recent</option>
                            <option value="total_orders">Most Popular</option>
                            <option value="random">Random</option>
                          </select>
                        </form>
                        <div className="toggle-view item">
                          <span
                            className="dashicons dashicons-screenoptions"
                            data-view="grid-view"
                          />
                          <span
                            className="dashicons dashicons-menu-alt"
                            data-view="list-view"
                          />
                        </div>
                      </div>
                    </div>
                    <form
                      name="dokan_store_lists_filter_form"
                      id="dokan-store-listing-filter-form-wrap"
                      style={{ display: "none" }}
                    >
                      <div className="store-search grid-item">
                        <input
                          type="search"
                          className="store-search-input"
                          name="dokan_seller_search"
                          placeholder=""
                        />
                      </div>
                      <div className="apply-filter">
                        <button
                          id="cancel-filter-btn"
                          className="dokan-btn dokan-btn-theme"
                        />
                        <button
                          id="apply-filter-btn"
                          className="dokan-btn dokan-btn-theme"
                          type="submit"
                        />
                      </div>
                    </form>
                    <div id="dokan-seller-listing-wrap" className="grid-view">
                      <div className="seller-listing-content">
                        <ul className="dokan-seller-wrap">
                          <li className="dokan-single-seller woocommerce coloum-3 no-banner-img">
                            <div className="store-wrapper">
                              <div className="store-header">
                                <div className="store-banner">
                                  <a href="store/pro-auction-inc/index.html">
                                    <img
                                      src={require('../../uploads/2018/05/default-store-banner.png')}
                                      alt="image"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="store-content default-store-banner">
                                <div className="store-data-container">
                                  <div className="featured-favourite" />
                                  <div className="store-data">
                                    <h2>
                                      <a href="store/pro-auction-inc/index.html">
                                        Pro Auction Inc.
                                      </a>
                                    </h2>
                                    <div
                                      className="dokan-seller-rating"
                                      title="Rated 5.00 out of 5"
                                    >
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      
                                      
                                      <p className="rating">grbid out of 5</p>
                                    </div>
                                    <p className="store-address">
                                      <span className="country">
                                        United States (US)
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="store-footer">
                                <div className="seller-avatar">
                                  <a href="store/pro-auction-inc/index.html">
                                    <img
                                      src={require('../../uploads/2021/10/team-10-96x96.jpg')}
                                      alt="Pro Auction Inc."
                                    />
                                  </a>
                                </div>
                                <a
                                  href="store/pro-auction-inc/index.html"
                                  title=""
                                >
                                  <span className="dashicons dashicons-arrow-right-alt2 dokan-btn-theme dokan-btn-round" >
                                  <i class="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="dokan-single-seller woocommerce coloum-3 no-banner-img">
                            <div className="store-wrapper">
                              <div className="store-header">
                                <div className="store-banner">
                                  <a href="store/saperst-co-inc/index.html">
                                    <img
                                      src={require('../../uploads/2018/05/default-store-banner.png')}
                                      alt="image"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="store-content default-store-banner">
                                <div className="store-data-container">
                                  <div className="featured-favourite">
                                    <div className="featured-label" />
                                  </div>
                                  <div className="store-data">
                                    <h2>
                                      <a href="store/saperst-co-inc/index.html">
                                        Saperst Co. Inc
                                      </a>
                                    </h2>
                                    <p className="store-address">
                                      <span className="state"> Florida,</span>
                                      <span className="country">
                                        United States (US)
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="store-footer">
                                <div className="seller-avatar">
                                  <a href="store/saperst-co-inc/index.html">
                                    <img
                                      src={require('../../uploads/2021/10/team-9-96x96.jpg')}
                                      alt="Saperst Co. Inc"
                                    />
                                  </a>
                                </div>
                                <a
                                  href="store/saperst-co-inc/index.html"
                                  title=""
                                >
                                  <span className="dashicons dashicons-arrow-right-alt2 dokan-btn-theme dokan-btn-round">
                                  <i class="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="dokan-single-seller woocommerce coloum-3 no-banner-img">
                            <div className="store-wrapper">
                              <div className="store-header">
                                <div className="store-banner">
                                  <a href="store/auctionnerpro/index.html">
                                    <img
                                      src={require('../../uploads/2018/05/default-store-banner.png')}
                                      alt="image"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="store-content default-store-banner">
                                <div className="store-data-container">
                                  <div className="featured-favourite" />
                                  <div className="store-data">
                                    <h2>
                                      <a href="store/auctionnerpro/index.html">
                                        AuctionnerPro
                                      </a>
                                    </h2>
                                    <div
                                      className="dokan-seller-rating"
                                      title="Rated 5.00 out of 5"
                                    >
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      
                                      <p className="rating">grbid out of 5</p>
                                    </div>
                                    <p className="store-address">
                                      <span className="country">
                                        United Kingdom (UK)
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="store-footer">
                                <div className="seller-avatar">
                                  <a href="store/auctionnerpro/index.html">
                                    <img
                                      src={require('../../uploads/2021/10/team-12-96x96.jpg')}
                                      alt="AuctionnerPro"
                                    />
                                  </a>
                                </div>
                                <a
                                  href="store/auctionnerpro/index.html"
                                  title=""
                                >
                                  <span className="dashicons dashicons-arrow-right-alt2 dokan-btn-theme dokan-btn-round">
                                  <i class="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="dokan-single-seller woocommerce coloum-3 no-banner-img">
                            <div className="store-wrapper">
                              <div className="store-header">
                                <div className="store-banner">
                                  <a href="store/eastcost-equip/index.html">
                                    <img
                                      src={require('../../uploads/2018/05/default-store-banner.png')}
                                      alt="image"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="store-content default-store-banner">
                                <div className="store-data-container">
                                  <div className="featured-favourite">
                                    <div className="featured-label" />
                                  </div>
                                  <div className="store-data">
                                    <h2>
                                      <a href="store/eastcost-equip/index.html">
                                        EastCost Equip
                                      </a>
                                    </h2>
                                    <p className="store-address">
                                      <span className="country">
                                        United Arab Emirates
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="store-footer">
                                <div className="seller-avatar">
                                  <a href="store/eastcost-equip/index.html">
                                    <img
                                      src={require('../../uploads/2021/10/team-8-96x96.jpg')}
                                      alt="EastCost Equip"
                                    />
                                  </a>
                                </div>
                                <a
                                  href="store/eastcost-equip/index.html"
                                  title=""
                                >
                                  <span className="dashicons dashicons-arrow-right-alt2 dokan-btn-theme dokan-btn-round" >
                                  <i class="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="dokan-single-seller woocommerce coloum-3">
                            <div className="store-wrapper">
                              <div className="store-header">
                                <div className="store-banner">
                                  <a href="store/big-auction-service/index.html">
                                    <img
                                      src={require('../../uploads/2018/05/dustyroze-Xc1LXlXiLUs-unsplash.jpg')}
                                      alt="image"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="store-content">
                                <div className="store-data-container">
                                  <div className="featured-favourite" />
                                  <div className="store-data">
                                    <h2>
                                      <a href="store/big-auction-service/index.html">
                                        Big Auction Service
                                      </a>
                                    </h2>
                                    <div
                                      className="dokan-seller-rating"
                                      title="Rated 4.75 out of 5"
                                    >
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      
                                      <p className="rating">grbid out of 5</p>
                                    </div>
                                    <p className="store-address">
                                      <span className="country"> France </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="store-footer">
                                <div className="seller-avatar">
                                  <a href="store/big-auction-service/index.html">
                                    <img
                                      src={require('../../uploads/2021/10/team-4-96x96.jpg')}
                                      alt="Big Auction Service"
                                    />
                                  </a>
                                </div>
                                <a
                                  href="store/big-auction-service/index.html"
                                  title=""
                                >
                                  <span className="dashicons dashicons-arrow-right-alt2 dokan-btn-theme dokan-btn-round" >
                                  <i class="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="dokan-single-seller woocommerce coloum-3 no-banner-img">
                            <div className="store-wrapper">
                              <div className="store-header">
                                <div className="store-banner">
                                  <a href="store/modern-auctions-co/index.html">
                                    <img
                                      src={require('../../uploads/2018/05/default-store-banner.png')}
                                      alt="image"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="store-content default-store-banner">
                                <div className="store-data-container">
                                  <div className="featured-favourite">
                                    <div className="featured-label" />
                                  </div>
                                  <div className="store-data">
                                    <h2>
                                      <a href="store/modern-auctions-co/index.html">
                                        Modern Auctions. Co.
                                      </a>
                                    </h2>
                                    <div
                                      className="dokan-seller-rating"
                                      title="Rated 4.50 out of 5"
                                    >
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      <i class="fa-solid fa-star" style={{ color : "gold"}}></i>
                                      
                                      <p className="rating">grbid out of 5</p>
                                    </div>
                                    <p className="store-address">
                                      <span className="state"> Michigan,</span>
                                      <span className="country">
                                        United States (US)
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="store-footer">
                                <div className="seller-avatar">
                                  <a href="store/modern-auctions-co/index.html">
                                    <img
                                      src={require('../../uploads/2021/10/team-7-96x96.jpg')}
                                      alt="Modern Auctions. Co."
                                    />
                                  </a>
                                </div>
                                <a
                                  href="store/modern-auctions-co/index.html"
                                  title=""
                                >
                                  <span className="dashicons dashicons-arrow-right-alt2 dokan-btn-theme dokan-btn-round" >
                                  <i class="fa-solid fa-angle-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* .dokan-seller-wrap */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row wpb_row vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="wd_empty_space"
                      data-heightmobile={70}
                      data-heighttablet={75}
                      data-heightdesktop={70}
                      style={{ height: 70 }}
                    />
                    <div
                      className="wd-heading text-left"
                      style={{ maxWidth: "100%" }}
                    >
                      <h2 style={{ margin: 0 }} className="title_a">
                        Recent News
                      </h2>
                    </div>
                    <div
                      className="wd_empty_space"
                      data-heightmobile={30}
                      data-heighttablet={40}
                      data-heightdesktop={40}
                      style={{ height: 40 }}
                    />
                    <div className="small-up-1 medium-up-2 large-up-3 flexi-item">
                      <div className="column column-block">
                        <article className="wd-post wd-post--multicolumn post-2858 post type-post status-publish format-standard has-post-thumbnail hentry category-freebies category-news tag-3rd-tag tag-tag-1 tag-tag-2">
                          <div className="wd-post__thumbnail">
                            <img
                              width={840}
                              height={500}
                              src={require('../../uploads/2018/12/regis-hari-bouchard-ZjViL8qxihM-unsplash-scaled-840x500.jpg')}
                              className="attachment-grbid_sblog-thumb size-grbid_sblog-thumb wp-post-image"
                              alt=""
                            />
                          </div>
                          <div className="wd-post__content">
                            <ul className="wd-post__meta clearfix">
                              <li>December 28, 2018</li>
                              <li className="wd-post__author">By:Alex Ali</li>
                              <li>
                                <a
                                  href="blog/category/freebies/index.html"
                                  rel="category tag"
                                >
                                  Freebies
                                </a>
                                ,
                                <a
                                  href="blog/category/news/index.html"
                                  rel="category tag"
                                >
                                  News
                                </a>
                              </li>
                              <li className="wd-post__comments">3 comments</li>
                            </ul>
                            <h4 className="wd-post__title">
                              <a href="blog/2018/12/28/19-powerful-customer-experience-statistics-to-know-in-2021/index.html">
                                19 Powerful Customer Experience Statistics to
                                Know in 2021
                              </a>
                            </h4>
                            <div className="wd-post__read-more">
                              <a href="blog/2018/12/28/19-powerful-customer-experience-statistics-to-know-in-2021/index.html">
                                Learn more{' '}
                                <i class="fa-solid fa-angle-right"></i>
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="column column-block">
                        <article className="wd-post wd-post--multicolumn post-264 post type-post status-publish format-standard has-post-thumbnail hentry category-freebies category-news">
                          <div className="wd-post__thumbnail">
                            <img
                              width={840}
                              height={500}
                              src={require('../../uploads/2018/12/photo-1596568359553-a56de6970068-840x500.jpg')}
                              className="attachment-grbid_sblog-thumb size-grbid_sblog-thumb wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="wd-post__content">
                            <ul className="wd-post__meta clearfix">
                              <li>December 28, 2018</li>
                              <li className="wd-post__author">By:Alex Ali</li>
                              <li>
                                <a
                                  href="blog/category/freebies/index.html"
                                  rel="category tag"
                                >
                                  Freebies
                                </a>
                                ,
                                <a
                                  href="blog/category/news/index.html"
                                  rel="category tag"
                                >
                                  News
                                </a>
                              </li>
                              <li className="wd-post__comments">2 comments</li>
                            </ul>
                            <h4 className="wd-post__title">
                              <a href="blog/2018/12/28/15-customer-success-lessons-companies-should-adopt-from-it/index.html">
                                15 Customer Success Lessons Companies Should
                                Adopt from IT
                              </a>
                            </h4>
                            <div className="wd-post__read-more">
                              <a href="blog/2018/12/28/15-customer-success-lessons-companies-should-adopt-from-it/index.html">
                                Learn more{' '}
                                <i class="fa-solid fa-angle-right"></i>
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="column column-block">
                        <article className="wd-post wd-post--multicolumn post-262 post type-post status-publish format-standard has-post-thumbnail hentry category-news">
                          <div className="wd-post__thumbnail">
                            <img
                              width={840}
                              height={500}
                              src={require('../../uploads/2018/12/photo-1542291026-7eec264c27ff-840x500.jpg')}
                              className="attachment-grbid_sblog-thumb size-grbid_sblog-thumb wp-post-image"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="wd-post__content">
                            <ul className="wd-post__meta clearfix">
                              <li>December 28, 2018</li>
                              <li className="wd-post__author">By:Alex Ali</li>
                              <li>
                                <a
                                  href="blog/category/news/index.html"
                                  rel="category tag"
                                >
                                  News
                                </a>
                              </li>
                              <li className="wd-post__comments">3 comments</li>
                            </ul>
                            <h4 className="wd-post__title">
                              <a href="blog/2018/12/28/how-to-improve-customer-journey-for-better-customer-experience/index.html">
                                How to Improve Customer Journey for Better
                                Experience
                              </a>
                            </h4>
                            <div className="wd-post__read-more">
                              <a href="blog/2018/12/28/how-to-improve-customer-journey-for-better-customer-experience/index.html">
                                Learn more{' '}
                                <i class="fa-solid fa-angle-right"></i>
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* /content  */}
      <Footer />
      
    </div>
  );
}

export default AuctionWorld;

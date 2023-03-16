import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import "./css/demo9.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./components/product/ProductDetails";
import Register from "./components/register/Register";
import Login from "./components/register/Login";
import AllProducts from "./components/category/AllProducts";
import VendorPage from "./components/vendor/VendorPage";
import VendorRegister from "./components/register/VendorRegister";
import UserLogin from "./components/register/UserLogin";
import AllCategoryProducts from "./components/category/AllCategoryProducts";
import Auction from "./components/auctions/Auction";
import ProductAuction from "./components/product auction/ProductAuction";
import AuctionWorld from "./components/product auction/AuctionWorld";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product-details" element={<ProductDetails />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/vendor-register" element={<VendorRegister />} />
          <Route exact path="/vendor-login" element={<Login />} />
          <Route exact path="/user-login" element={<UserLogin />} />
          <Route exact path="/all-products" element={<AllProducts />} />
          <Route exact path="/all-category-products" element={<AllCategoryProducts />} />
          <Route exact path="/vendor" element={<VendorPage />} />
          <Route exact path="/auction" element={<Auction />} />
          <Route exact path="/product-auction" element={<AuctionWorld />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

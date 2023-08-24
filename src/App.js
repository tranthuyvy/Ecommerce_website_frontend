import logo from "./logo.svg";
import "./App.css";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/component/Footer/Footer";
import Navigation from "./customer/component/Navigation/Navigation";
import Product from "./customer/component/Product/Product";
import ProductDetail from "./customer/component/ProductDetail/ProductDetail";
import Cart from "./customer/component/Cart/Cart";
import Checkout from "./customer/component/Checkout/Checkout";
import Order from "./customer/component/Order/Order";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetail /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        <Order />
      </div>
      <Footer />
    </div>
  );
}

export default App;

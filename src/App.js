import logo from "./logo.svg";
import "./App.css";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/component/Footer/Footer";
import Navigation from "./customer/component/Navigation/Navigation";
import Product from "./customer/component/Product/Product";
import ProductDetail from "./customer/component/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetail />
      </div>
      <Footer />
    </div>
  );
}

export default App;

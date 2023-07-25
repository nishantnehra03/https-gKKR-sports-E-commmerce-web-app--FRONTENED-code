import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
 import Category from "./components/Category/Category";
 import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Shop from "./components/Shop/Shop";
import SinglePlayer from "./components/Single/SinglePlayer";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/shop/" element={<Shop />} />
            <Route path="/shop/category/:id" element={<Category />} />
            <Route path="/shop/product/:id" element={<SingleProduct />} />
            <Route path="/squad/:id" element={< SinglePlayer/>} />
            <Route path="/about" element={< About/>} />
            
          </Routes>
          
         
          
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;

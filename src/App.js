import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About/AboutSection";
// import Coffee from "./pages/Coffee";
// import Tea from "./pages/Tea";
import Products from "./pages/Products/ProductDetails";
import Contact from "./pages/Contact/ContactSection";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* COMMON NAVBAR + FOOTER */}
        <Route path="/" element={<Layout />}>

          {/* HOME */}
          <Route
            index
            element={<Home />}
          />

          {/* ABOUT */}
          <Route
            path="about"
            element={<About />}
          />

          {/* COFFEE */}
          {/* 
          <Route
            path="coffee"
            element={<Coffee />}
          />
          */}

          {/* TEA */}
          {/* 
          <Route
            path="tea"
            element={<Tea />}
          />
          */}

          {/* PRODUCTS */}
          <Route
            path="products"
            element={<Products />}
          />

          {/* CONTACT */}
          <Route
            path="contact"
            element={<Contact />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  )
}

export default App;
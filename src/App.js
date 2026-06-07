import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About/AboutPage";
import Products from "./pages/Products/ProductsPage";
import Contact from "./pages/Contact/ContactSection";

import CoffeePage from "./pages/Products/CoffeePage";
import TeaPage from "./pages/Products/TeaPage";

import Infrastructure from "./pages/InfrastructurePage/Infrastructure";
import GalleryPage from "./pages/InfrastructurePage/GalleryPage";
import PackagingPage from "./pages/InfrastructurePage/PackagingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          {/* HOME */}
          <Route index element={<Home />} />

          {/* ABOUT */}
          <Route
            path="about"
            element={<About />}
          />

          {/* PRODUCTS */}
          <Route
            path="products"
            element={<Products />}
          />

          {/* COFFEE */}
          <Route
            path="products/coffee"
            element={<CoffeePage />}
          />

          {/* TEA */}
          <Route
            path="products/tea"
            element={<TeaPage />}
          />

          {/* INFRASTRUCTURE */}
          <Route
            path="infrastructure"
            element={<Infrastructure />}
          />

          {/* GALLERY */}
          <Route
            path="gallery"
            element={<GalleryPage />}
          />

          {/* PACKAGING */}
          <Route
            path="packaging"
            element={<PackagingPage />}
          />

          {/* CONTACT */}
          <Route
            path="contact"
            element={<Contact />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
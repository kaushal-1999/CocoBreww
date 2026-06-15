import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Underprosess from "./pages/UnderProcess/UnderProgress";

// ✅ IMPORTANT: import hook
import useAnimations from "./hooks/useAnimations";

function App() {
  // ✅ RUN ONCE GLOBALLY
  useAnimations();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />

          <Route path="products/coffee" element={<CoffeePage />} />
          <Route path="products/tea" element={<TeaPage />} />

          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="packaging" element={<PackagingPage />} />

          <Route path="under-process" element={<Underprosess />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
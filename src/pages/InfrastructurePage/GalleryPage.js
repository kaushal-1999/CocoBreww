// import React, { useState } from "react";
// import "./GalleryPage.css";
// import { FaTimes, FaSearchPlus } from "react-icons/fa";

// import g1 from "../../assets/gallery/gallery1.jpg";
// import g2 from "../../assets/gallery/gallery2.jpg";
// import g3 from "../../assets/gallery/gallery3.jpg";
// import g4 from "../../assets/gallery/gallery4.jpg";
// import g5 from "../../assets/gallery/gallery5.jpg";
// import g6 from "../../assets/gallery/gallery6.jpg";
// import g7 from "../../assets/gallery/gallery7.jpg";
// import g8 from "../../assets/gallery/gallery8.jpg";

// const galleryData = [
//   { image: g1, category: "Infrastructure" },
//   { image: g2, category: "Infrastructure" },
//   { image: g3, category: "Packaging" },
//   { image: g4, category: "Packaging" },
//   { image: g5, category: "Products" },
//   { image: g6, category: "Products" },
//   { image: g7, category: "Facility" },
//   { image: g8, category: "Facility" },
// ];

// const GalleryPage = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(null);

//   const filteredImages =
//     activeFilter === "All"
//       ? galleryData
//       : galleryData.filter(
//           (item) => item.category === activeFilter
//         );

//   return (
//     <div className="gallery-page">

//       {/* HERO */}

//       <section className="gallery-hero">
//         <div className="gallery-overlay"></div>

//         <div className="gallery-hero-content">
//           <span>COCOBREWW GALLERY</span>

//           <h1>
//             Moments, Facilities &
//             Product Excellence
//           </h1>

//           <p>
//             Explore our manufacturing facilities,
//             packaging units, coffee products and
//             production excellence.
//           </p>
//         </div>
//       </section>

//       {/* FILTER */}

//       <section className="gallery-filter">

//         {[
//           "All",
//           "Infrastructure",
//           "Packaging",
//           "Products",
//           "Facility",
//         ].map((item) => (
//           <button
//             key={item}
//             className={
//               activeFilter === item
//                 ? "active-filter"
//                 : ""
//             }
//             onClick={() => setActiveFilter(item)}
//           >
//             {item}
//           </button>
//         ))}

//       </section>

//       {/* GALLERY */}

//       <section className="gallery-grid">

//         {filteredImages.map((item, index) => (

//           <div
//             key={index}
//             className="gallery-card"
//             onClick={() =>
//               setSelectedImage(item.image)
//             }
//           >
//             <img
//               src={item.image}
//               alt=""
//             />

//             <div className="gallery-hover">
//               <FaSearchPlus />
//             </div>

//           </div>

//         ))}

//       </section>

//       {/* LIGHTBOX */}

//       {selectedImage && (
//         <div
//           className="lightbox-overlay"
//           onClick={() =>
//             setSelectedImage(null)
//           }
//         >

//           <div
//             className="lightbox-content"
//             onClick={(e) =>
//               e.stopPropagation()
//             }
//           >

//             <button
//               className="close-btn"
//               onClick={() =>
//                 setSelectedImage(null)
//               }
//             >
//               <FaTimes />
//             </button>

//             <img
//               src={selectedImage}
//               alt=""
//             />

//           </div>

//         </div>
//       )}

//     </div>
//   );
// };

// export default GalleryPage;


import React, { useState } from "react";
import "./GalleryPage.css";
import { FaTimes, FaSearchPlus } from "react-icons/fa";

import coffee1 from "../../assets/products/coffee1.jpeg";
import coffee2 from "../../assets/products/coffee2.jpeg";
import coffee3 from "../../assets/products/coffee3.jpeg";
import coffee4 from "../../assets/products/coffee4.jpeg";

import iced1 from "../../assets/products/iced1.jpeg";
import iced2 from "../../assets/products/iced2.jpeg";
import iced3 from "../../assets/products/iced3.jpeg";
import iced4 from "../../assets/products/iced4.jpeg";
import iced5 from "../../assets/products/iced5.jpeg";
import iced6 from "../../assets/products/iced6.jpeg";

import tea1 from "../../assets/products/tea1.jpeg";
import tea2 from "../../assets/products/tea2.jpeg";
import tea3 from "../../assets/products/tea3.jpeg";
import tea4 from "../../assets/products/tea4.jpeg";

const galleryData = [
  {
    image: coffee1,
    category: "Coffee",
    title: "Spray Dried Premium Coffee",
  },
  {
    image: coffee2,
    category: "Coffee",
    title: "Spray Dried Instant Coffee",
  },
  {
    image: coffee3,
    category: "Coffee",
    title: "Agglomerated Coffee",
  },
  {
    image: coffee4,
    category: "Coffee",
    title: "Freeze Dried Coffee",
  },

  {
    image: tea1,
    category: "Tea Premix",
    title: "Black Lemon Tea",
  },
  {
    image: tea2,
    category: "Tea Premix",
    title: "Green Lemon Tea",
  },
  {
    image: tea3,
    category: "Tea Premix",
    title: "Nimbu Pani",
  },
  {
    image: tea4,
    category: "Tea Premix",
    title: "Masala Shikanji",
  },

  {
    image: iced1,
    category: "Iced Tea",
    title: "Watermelon Iced Tea",
  },
  {
    image: iced2,
    category: "Iced Tea",
    title: "Peach Iced Tea",
  },
  {
    image: iced3,
    category: "Iced Tea",
    title: "Orange Iced Tea",
  },
  {
    image: iced4,
    category: "Iced Tea",
    title: "Mango Iced Tea",
  },
  {
    image: iced5,
    category: "Iced Tea",
    title: "Strawberry Iced Tea",
  },
  {
    image: iced6,
    category: "Iced Tea",
    title: "Chocolate Iced Coffee",
  },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeFilter
        );

  return (
    <div className="gallery-page">

      <section className="gallery-hero">
        <div className="gallery-overlay"></div>

        <div className="gallery-hero-content">
          <span>COCOBREWW GALLERY</span>

          <h1>Premium Beverage Collection</h1>

          <p>
            Explore our coffee, tea premix,
            iced tea and beverage solutions.
          </p>
        </div>
      </section>

      <section className="gallery-filter">
        {[
          "All",
          "Coffee",
          "Tea Premix",
          "Iced Tea",
        ].map((item) => (
          <button
            key={item}
            className={
              activeFilter === item
                ? "active-filter"
                : ""
            }
            onClick={() => setActiveFilter(item)}
          >
            {item}
          </button>
        ))}
      </section>

      <section className="gallery-grid">
        {filteredImages.map((item, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() =>
              setSelectedImage(item.image)
            }
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-hover">
              <FaSearchPlus />

              <h3>{item.title}</h3>

              <span>{item.category}</span>
            </div>
          </div>
        ))}
      </section>

      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <div
            className="lightbox-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="close-btn"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              <FaTimes />
            </button>

            <img
              src={selectedImage}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
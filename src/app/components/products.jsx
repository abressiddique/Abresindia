"use client"; // Add this at the top

import React, { useState } from 'react';

const products = [
  { id: 1, name: "Sunny Yellow Party Shirt", description: "A vibrant yellow printed shirt perfect for casual outings and parties.", imageUrl: "./images/photos/1.jpg" },
  { id: 2, name: "Funky Colorful Party Shirt", description: "A funky shirt with a mix of colors and cool designs, ideal for party wear.", imageUrl: "./images/photos/2.jpg" },
  { id: 3, name: "Fiery Red Party Shirt", description: "A bold red-colored shirt with a unique design, perfect for parties.", imageUrl: "./images/photos/3.jpg" },
  { id: 4, name: "Calm Green Printed Shirt", description: "A casual green printed shirt with a decent and relaxed look.", imageUrl: "./images/photos/4.jpg" },
  { id: 5, name: "Cool Green Versatile Shirt", description: "A stylish green printed shirt suitable for both casual outings and parties.", imageUrl: "./images/photos/5.jpg" },
  { id: 6, name: "Popular Red Party Shirt", description: "A best-selling red shirt designed for party wear.", imageUrl: "./images/photos/6.jpg" },
  { id: 7, name: "Classic Formal Office Shirt", description: "A formal shirt designed specifically for office wear.", imageUrl: "./images/photos/7.jpg" },
  { id: 8, name: "Green Striped Office Shirt", description: "A green striped shirt, a great choice for office wear.", imageUrl: "./images/photos/8.jpg" },
  { id: 9, name: "Blue Striped Office Shirt", description: "A stylish blue striped shirt, perfect for the office.", imageUrl: "./images/photos/9.jpg" },
  { id: 10, name: "Yellow Striped Office Shirt", description: "A yellow striped shirt designed for office wear.", imageUrl: "./images/photos/10.jpg" },
  { id: 11, name: "Light Green Formal Shirt", description: "A light green formal shirt, an ideal choice for office wear.", imageUrl: "./images/photos/11.jpg" },
  { id: 12, name: "Luxury Blue Classy Shirt", description: "A luxurious blue shirt that can be worn in both office settings and at parties.", imageUrl: "./images/photos/12.jpg" },
  { id: 13, name: "Classy Green Party Shirt", description: "A classy green-colored shirt, perfect for parties.", imageUrl: "./images/photos/13.jpg" },
  { id: 14, name: "Elegant Yellow Office Shirt", description: "An elegant yellow shirt tailored specifically for office wear.", imageUrl: "./images/photos/14.jpg" },
  { id: 15, name: "Classy Olive Office Shirt", description: "An olive-colored shirt that looks classy, perfect for the office.", imageUrl: "./images/photos/15.jpg" },
  { id: 16, name: "Light Blue Office Shirt", description: "A light blue-colored shirt designed for office wear.", imageUrl: "./images/photos/16.jpg" },
  { id: 17, name: "Parrot Green Office Shirt", description: "A parrot green shirt that is perfect for office wear.", imageUrl: "./images/photos/17.jpg" },
  { id: 18, name: "Vine Color Office Shirt", description: "A vine-colored shirt that adds a classy touch to office attire.", imageUrl: "./images/photos/18.jpg" },
  { id: 19, name: "Light Yellow Office Shirt", description: "A light yellow shirt that is perfect for office wear.", imageUrl: "./images/photos/19.jpg" },
  { id: 20, name: "Colorful Printed White Kurti", description: "A white kurti with a colorful print, offering a traditional yet modern look.", imageUrl: "./images/photos/20.jpg" },
  { id: 21, name: "White Linen Printed Shirt", description: "A white linen shirt with a cool print, perfect for casual wear.", imageUrl: "./images/photos/21.jpg" },
  { id: 22, name: "Faded Red and White Textured Shirt", description: "A textured shirt with a faded look of red and white, ideal for a relaxed style.", imageUrl: "./images/photos/22.jpg" },
  { id: 23, name: "Pink Printed Formal Shirt", description: "A pink printed shirt, suitable for formal wear.", imageUrl: "./images/photos/23.jpg" },
  { id: 24, name: "Trendy Korean Design Shirt", description: "The most popular shirt with a Korean design, perfect for parties.", imageUrl: "./images/photos/24.jpg" },
  { id: 25, name: "Red Embroidered Kurti", description: "A beautiful kurti with red embroidery, offering an elegant traditional look.", imageUrl: "./images/photos/25.jpg" },
  { id: 26, name: "Black Kurti with White Embroidery", description: "A black kurti with intricate white embroidery, perfect for a classy look.", imageUrl: "./images/photos/26.jpg" },
  { id: 27, name: "Black Kurti with Grey Embroidery", description: "A black kurti with grey embroidery, offering a subtle yet stylish look.", imageUrl: "./images/photos/27.jpg" },
  { id: 28, name: "Red Kurti with Black Embroidery", description: "A red kurti with black embroidery, offering a bold traditional style.", imageUrl: "./images/photos/28.jpg" },
  { id: 29, name: "White Kurti with White Embroidery", description: "A white kurti with delicate white embroidery, perfect for an elegant look.", imageUrl: "./images/photos/29.jpg" },
  { id: 30, name: "Leopard Print Shirt", description: "A trendy leopard print shirt, perfect for making a bold fashion statement.", imageUrl: "./images/photos/30.jpg" },
];

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md max-w-xs mx-auto mt-16 relative">
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 bg-black text-white rounded-full p-2 hover:bg-red-500 transition border-2 border-white shadow-lg"
          aria-label="Close"
        >
          <svg 
            fill="#FFFFFF" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 48 48" 
            width="20px" 
            height="20px"
          >
            <path d="M24 4C12.972 4 4 12.972 4 24c0 11.028 8.972 20 20 20 11.028 0 20-8.972 20-20C44 12.972 35.028 4 24 4zm-6.364 30.364l-3.636-3.636 3.636-3.636L18.364 24l-3.636-3.636 3.636-3.636L24 18.364l3.636-3.636 3.636 3.636L29.636 24l3.636 3.636-3.636 3.636L24 29.636l-3.636 3.636z" />
          </svg>
        </button>
        <img src={imageUrl} alt="Selected" className="w-full h-auto" />
      </div>
    </div>
  );
};

const Productsview = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="product" className="pt-[120px] bg-[#352f44] text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products:</h1>
        <h2 className="text-4xl font-bold mb-8 text-center">"Take a Look at Our Collection"</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-[#5c5470] shadow-lg rounded-lg overflow-hidden"
            >
              <button onClick={() => openModal(product.imageUrl)} className="w-full">
                <img
                  src={product.imageUrl} // Updated this line
                  alt={product.name}
                  className="w-full h-48 sm:h-64 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300"; // Fallback image
                  }}
                />
              </button>
              <div className="p-4 bg-[#352f44]">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-base text-white">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </section>
  );
};

export default Productsview;

"use client";
import React from "react";

const AboutSection = () => {
  const images = [
    "./labels/label1.jpg",  // Added a dot at the start
    "./labels/label2.jpg",  // Added a dot at the start
    "./labels/label4.jpg",  // Added a dot at the start
  ];

  return (
    <section className="text-white pt-16" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Abres India</h2>
          <p className="text-base lg:text-lg">
            Since 1984, Abres India has been a prominent name in the fashion industry, specializing in the manufacturing of stylish female clothing, including formal shirts, kurtis, jeans, and denim pants. Founded by Matin Ahmed Siddiqui, Abres India combines traditional craftsmanship with modern design to bring classy and fancy apparel to our customers. Our goal has always been to provide high-quality garments that offer both style and affordability. Whether you're looking for fabrics or ready-made garments, we have you covered.
          </p>
          <p className="text-base lg:text-lg mt-4">
            At Abres India, we offer a diverse range of high-quality fabrics, including denim, cotton, and linen, produced in our own mills and supplied to manufacturers at wholesale rates. We ensure that every fabric we manufacture meets the highest standards of quality. Through our retail branch, Abreshop, we bring our exclusive Abres-branded clothing directly to consumers, offering them the opportunity to own fashionable clothing at competitive prices. Our e-commerce platform is under construction, but you can still explore and purchase our beautiful collection of shirts and kurtis on our Instagram page.
          </p>
          <p className="text-base lg:text-lg mt-4">
            Our collection features some of the best-selling shirts and kurtis, perfect for various occasions. Whether you need a classy office look or a trendy party style, we have it all. Our "Sunny Yellow Party Shirt" is a vibrant choice, perfect for casual outings and parties, while our "Luxury Blue Classy Shirt" effortlessly transitions from office wear to party attire. We also offer the "Funky Colorful Party Shirt," which features a mix of cool colors and designs, making it ideal for a fun night out.
          </p>
          <p className="text-base lg:text-lg mt-4">
            We also specialize in crafting sophisticated office shirts, such as the "Classic Formal Office Shirt," which provides a professional look, and the "Green Striped Office Shirt," offering a stylish twist to your office attire. For those looking for an elegant touch, our "Light Green Formal Shirt" and "Elegant Yellow Office Shirt" are popular choices, combining simplicity with style. At Abres India, we are dedicated to ensuring that our customers feel confident and comfortable in whatever they wear, whether it is for the office, a party, or a casual day out.
          </p>
          <h3 className="text-2xl font-bold mt-8">Our Bestsellers</h3>
          <p className="text-base lg:text-lg mt-4">
            Here are some of our most popular products: the "Fiery Red Party Shirt," a bold and stylish choice for parties, and the "Cool Green Versatile Shirt," perfect for both casual outings and gatherings. Our "Luxury Blue Classy Shirt" is a customer favorite, offering a sophisticated look for multiple occasions. The "Colorful Printed White Kurti" and "Red Embroidered Kurti" are some of our top-selling traditional garments, combining modern design with cultural heritage.
          </p>
          <p className="text-base lg:text-lg mt-4">
            We also offer a range of trendy kurtis, such as the "Black Kurti with White Embroidery" and "Leopard Print Shirt," ideal for making a bold fashion statement. Each of our kurtis and shirts is designed to cater to different fashion tastes, making Abres India the go-to choice for fashionable, high-quality clothing. We believe that everyone deserves to look their best, which is why we take pride in offering garments that combine style, comfort, and quality at an affordable price.
          </p>
          <h3 className="text-2xl font-bold mt-8">Our Labels</h3>
          <p className="text-base lg:text-lg mt-4">
            In addition to our wide range of clothing products, Abres India has also developed unique labels that define our identity in the fashion world. Our labels represent our dedication to quality and the unique blend of traditional and modern elements in our designs. Each label embodies the values of creativity, authenticity, and excellence that have made Abres India a beloved name in the industry.
          </p>
          <div className="mt-8">
            <h3 className="text-3xl font-bold mb-4 text-center">Our Labels</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={image}  // This path is updated
                    alt={`About Abres India ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client";
import React from "react";

const servicesData = [
  {
    id: 1,
    title: "AbresEssentials",
    description: (
      <>
        AbresEssentials is our Instagram-based store where we sell a wide variety of high-quality, affordable female shirts, kurtis, and other trendy attire. From formal office wear to stylish party outfits, explore our diverse collection and discover more options.
         Visit our{" "}
        <a
          href="https://www.instagram.com/abresessential?igsh=MTNqcjlmeXYybTczNQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          Instagram page
        </a>{" "}
        and order your favorites today!
      </>
    ),
    image: "./images/ban.jpg",  // Added a dot at the start
  },

  {
    id: 2,
    title: "Abres Textile",
    description: (
      <>
        Abres Textile is our fabric division, providing high-quality materials like denim, cotton, and linen. We manufacture and supply fabrics directly from our mill to clients all over India, ensuring superior quality at affordable prices. If you want to order fabric for manufacturing, we provide fabrics on demand across India. Please contact us at{" "}
        <a
          href="mailto:abrestextile@gmail.com"
          className="text-blue-400 underline"
        >
          abrestextile@gmail.com
        </a>
        .
      </>
    ),
    image: "./images/abrestextilelogo.png",  // Added a dot at the start
  },

  {
    id: 3,
    title: "Abres Denim",
    description: (
      <>
        Abres Denim specializes in crafting stylish and durable denim fabrics. We manufacture high-quality jeans and offer them in bulk, as well as supply different kinds of denim fabric all over India. For inquiries or to place an order, contact us at{" "}
        <a
          href="mailto:abresdenim@gmail.com"
          className="text-blue-400 underline"
        >
          abresdenim@gmail.com
        </a>
        .
      </>
    ),
    image: "./images/abresdenimlogo.png",  // Added a dot at the start
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 pt-40">
      <h2 className="text-center text-6xl font-bold text-white mb-16">
        Our Services
      </h2>
      <ul className="flex flex-col gap-16">
        {servicesData.map((service, index) => (
          <li
            key={service.id}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } bg-[#352f44] p-10 rounded-lg relative`}
          >
            <div className="lg:w-1/2">
              <img
                src={service.image}  // This path is updated
                alt={service.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-2xl text-gray-400">{service.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                {service.id === 1 && (
                  <>
                    <span className="text-2xl ml-2">❤️</span> {/* Red heart */}
                    <span className="text-2xl ml-2">📷</span> {/* Camera */}
                    <span className="text-2xl ml-2">✌️</span> {/* Peace symbol */}
                  </>
                )}
                {service.id === 2 && (
                  <>
                    <span className="text-2xl ml-2">🧵</span> {/* Thread */}
                    <span className="text-2xl ml-2">🧶</span> {/* Wool */}
                    <span className="text-2xl ml-2">🧷</span> {/* Fabric */}
                  </>
                )}
                {service.id === 3 && (
                  <>
                    <span className="text-2xl ml-2">👖</span> {/* Jeans */}
                    <span className="text-2xl ml-2">💙</span> {/* Blue heart */}
                    <span className="text-2xl ml-2">🧵</span> {/* Blue thread */}
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;

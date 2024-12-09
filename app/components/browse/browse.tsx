import React from "react";

const BrowseDressStyle = () => {
  const dressStyles = [
    {
      id: 1,
      name: "Casual",
      image: "/browse/1.png", 
      size: "row-span-1", 
      
    },
    {
      id: 2,
      name: "Formal",
      image: "/browse/2.png", 
      size: "col-span-2", // Taller card
      
    },
    {
      id: 3,
      name: "Party",
      image: "/browse/3.png", 
      size: "col-span-2", // Taller card
      
    },
    {
      id: 4,
      name: "Gym",
      image: "/browse/4.png",
      size: "row-span-1",
      
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-6 lg:px-12 bg-gray-50 rounded-lg text-center">
      <h2 className="text-5xl font-extrabold text-center mb-8">BROWSE BY DRESS STYLE</h2>
      <div className="content-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-6">
        {dressStyles.map((style) => (
          <div
            key={style.id}
            className={`relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition ${style.size}`}
          >
           
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-[289] object-cover"
            />
            <div className="absolute inset-0 text-black flex items-center justify-center">
              <h3 className="absolute top-6 left-6 text-2xl font-bold  text-black">{style.name}</h3>
            </div>
          </div>
          
        ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseDressStyle;
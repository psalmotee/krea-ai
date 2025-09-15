// src/components/Gallery.tsx
import Image from "next/image";
import React from "react";

const galleryItems = [
  {
    title: "Digital Abstract",
    description: "AI art inspired abstract patterns",
    image: "https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg", // from Pexels AI
  },
  {
    title: "Futuristic Portrait",
    description: "Human in a futuristic setting with neon lights",
    image: "https://images.pexels.com/photos/3751191/pexels-photo-3751191.jpeg", // similar style
  },
  {
    title: "AI Landscape",
    description: "Surreal landscape that seems algorithmically generated",
    image: "https://images.pexels.com/photos/3173569/pexels-photo-3173569.jpeg",
  },
  {
    title: "Technology Abstract",
    description: "Digital tech-inspired color blend and shapes",
    image: "https://images.pexels.com/photos/1109341/pexels-photo-1109341.jpeg",
  },
  {
    title: "Robot Hand",
    description: "Hand interacting with futuristic interface",
    image: "https://images.pexels.com/photos/673587/pexels-photo-673587.jpeg",
  },
  {
    title: "VR Portrait",
    description: "Person in VR headset immersed in digital art",
    image: "https://images.pexels.com/photos/3740741/pexels-photo-3740741.jpeg",
  },
  {
    title: "Abstract Wave",
    description: "Fluid shapes and digital wave patterns",
    image: "https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg",
  },
  {
    title: "Neon City",
    description: "City skyline with neon lights at twilight",
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
  },
];

function Gallery() {
  return (
    <section className="w-full py-8">
      <h2 className="text-xl font-semibold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
              width={400}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

import Image from "next/image";
import React from "react";

function Gallery() {

  const galleryItems = [
    {
      title: "Digital Abstract",
      description: "AI art inspired abstract patterns",
      image:
        "https://images.pexels.com/photos/12372778/pexels-photo-12372778.jpeg",
    },
    {
      title: "Futuristic Portrait",
      description: "Human in a futuristic setting with neon lights",
      image:
        "https://images.pexels.com/photos/7856676/pexels-photo-7856676.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "AI Landscape",
      description: "Surreal landscape that seems algorithmically generated",
      image:
        "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg",
    },
    {
      title: "VR Portrait",
      description: "Person in VR headset immersed in digital art",
      image:
        "https://images.pexels.com/photos/4940757/pexels-photo-4940757.jpeg",
    },
    {
      title: "Abstract Wave",
      description: "Fluid shapes and digital wave patterns",
      image:
        "https://images.pexels.com/photos/3560187/pexels-photo-3560187.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Neon City",
      description: "City skyline with neon lights at twilight",
      image: "https://images.pexels.com/photos/316902/pexels-photo-316902.jpeg",
    },
    {
      title: "Robot Hand",
      description: "Hand interacting with futuristic interface",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
    {
      title: "Technology Abstract",
      description: "Digital tech-inspired color blend and shapes",
      image: "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg",
    },
  ];
  
  return (
    <section className="w-full pb-4">
      <h2 className="text-xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-base-100 rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover transform transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={300}
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-xs text-base-content/70 mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

import  Header  from "@/components/header";
import HeroCard from "@/components/heroCard";

import  ToolCard  from "@/components/toolCard";
import  GallerySection  from "@/components/gallerySection";
import  Footer  from "@/components/footer";
import Generate from "@/components/toolCard";
import HeroCarousel from "@/components/heroCard";

export default function Home() {

  // const generateTools = [
  //   {
  //     title: "Studio",
  //     description:
  //       "Real-time image and video generation with complete creative control",
  //     icon: "🎨",
  //     badge: "NEW",
  //     buttonText: "Open",
  //     iconBg: "icon-bg-blue",
  //   },
  //   {
  //     title: "Upscale",
  //     description:
  //       "Enhance image resolution and quality using advanced AI algorithms",
  //     icon: "⬆️",
  //     buttonText: "Open",
  //     iconBg: "icon-bg-green",
  //   },
  //   {
  //     title: "RealTime",
  //     description:
  //       "Generate images and videos in real-time with instant preview",
  //     icon: "⚡",
  //     badge: "BETA",
  //     buttonText: "Open",
  //     iconBg: "icon-bg-yellow",
  //   },
  //   {
  //     title: "Video Layer",
  //     description: "Advanced video generation and editing capabilities",
  //     icon: "🎬",
  //     badge: "NEW",
  //     buttonText: "Open",
  //     iconBg: "icon-bg-purple",
  //   },
  //   {
  //     title: "Enhancer",
  //     description: "Enhance and improve existing images with AI-powered tools",
  //     icon: "✨",
  //     badge: "BETA",
  //     buttonText: "Open",
  //     iconBg: "icon-bg-pink",
  //   },
  //   {
  //     title: "Video Transfer",
  //     description:
  //       "Transfer styles and apply effects to video content seamlessly",
  //     icon: "🔄",
  //     badge: "NEW",
  //     buttonText: "Open",
  //     iconBg: "icon-bg-indigo",
  //   },
  //   {
  //     title: "Train",
  //     description:
  //       "Train custom AI models with your own datasets and preferences",
  //     icon: "🧠",
  //     buttonText: "Open",
  //     iconBg: "icon-bg-orange",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-base-100">
      <Header />

      <main className="container mx-auto py-8 space-y-12 px-4">
        {/* Hero Section */}
        <section>
          {/* <HeroCard /> */}
          <HeroCarousel />
        </section>

        {/* Generate Tools Section */}
            <Generate />

        {/* Gallery Section */}
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
}

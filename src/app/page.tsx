import  Header  from "@/components/Header";
import Hero from "@/components/Hero";
import Generate from "@/components/Generate";
import  Gallery  from "@/components/Gallery";
import  Footer  from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />

      <main className="container mx-auto py-8 space-y-12 px-4">
        {/* Hero Section */}
          <Hero />

        {/* Generate Tools Section */}
            <Generate />

        {/* Gallery Section */}
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

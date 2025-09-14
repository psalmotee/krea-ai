"use client";

function GallerySection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-base-content">Gallery</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-lg border border-base-300 cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg group"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Info text */}
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium">Generated image {i + 1}</p>
              <p className="text-xs opacity-80">by User {i + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;

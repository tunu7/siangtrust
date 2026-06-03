import MainLayout from "../layouts/MainLayout";

const images = [
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  "https://images.unsplash.com/photo-1545389336-cf090694435e",
  "https://images.unsplash.com/photo-1599447421383-7f6dc9603e8",
  "https://images.unsplash.com/photo-1524863479829-916d8e77f114",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
];

function Gallery() {
  return (
    <MainLayout>

      <section className="pt-32 pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center">
            Studio Gallery
          </h1>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-16">

            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="mb-6 rounded-3xl hover:scale-[1.02] transition"
              />
            ))}

          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default Gallery;
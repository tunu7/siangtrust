import MainLayout from "../layouts/MainLayout";

import studioimage1 from "../assets/studioimage1.jpg";
import studioimage2 from "../assets/studioimage2.jpg";
import studioimage3 from "../assets/studioimage3.jpg";
import studioimage4 from "../assets/studioimage4.jpg";
import studioimage5 from "../assets/studioimage5.jpg";
import studioimage6 from "../assets/studioimage6.jpg";
import studioimage7 from "../assets/studioimage7.jpg";

const images = [
  studioimage1,
  studioimage2,
  studioimage3,
  studioimage4,
  studioimage5,
  studioimage6,
  studioimage7,
];

function Gallery() {
  return (
    <MainLayout>
      <section className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center">
            Studio Gallery
          </h1>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-16">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Studio Image ${index + 1}`}
                className="
                  mb-6
                  rounded-3xl
                  shadow-lg
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                  w-full
                "
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Gallery;
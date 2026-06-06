import MainLayout from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";
import images from "../assets/studioyoga.jpg";

function About() {
  return (
    <MainLayout>
      <Helmet>
        <title>About | Siang Trust Yoga Studio</title>
      </Helmet>

      <section className="pt-36 pb-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">

          <span className="text-[#6B4F3B] font-semibold">
            About Us
          </span>

          <h1 className="text-5xl font-bold mt-4">
            A place to come home to yourself.
          </h1>

          <p className="mt-8 text-lg text-zinc-600 leading-relaxed max-w-4xl">
            Siang Trust Yoga Studio was founded with a simple intention —
            to offer the people of Aalo a sincere, lineage-based yoga
            practice rooted in awareness, breath and presence.
          </p>

        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <img
            src={images}
            className="rounded-3xl"
          />

          <div>
            <h2 className="text-3xl font-bold">
              Our Philosophy
            </h2>

            <p className="mt-6 text-zinc-600 leading-relaxed">
              Yoga is not merely exercise.
              It is a process of bringing the body,
              breath and mind into harmony.
            </p>

            <div className="space-y-4 mt-10">

              <div className="p-6 border rounded-2xl">
                Authentic Lineage Teaching
              </div>

              <div className="p-6 border rounded-2xl">
                Small Group Classes
              </div>

              <div className="p-6 border rounded-2xl">
                Meditation & Pranayama Included
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Meet Your Teachers
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-16">

            <TeacherCard
              name="Gedam Ete"
              role="Founder · Lead Teacher"
            />

            <TeacherCard
              name="Sunny Vats"
              role="Senior Teacher"
            />

          </div>

        </div>
      </section>

    </MainLayout>
  );
}

function TeacherCard({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <div className="border rounded-3xl p-10">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-zinc-500 mt-2">{role}</p>
    </div>
  );
}

export default About;
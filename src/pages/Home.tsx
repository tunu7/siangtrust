import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  return (
    <MainLayout>
      <Helmet>
        <title>Siang Trust Yoga Studio | Aalo</title>
      </Helmet>

      {/* HERO */}

      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">

            <span className="uppercase tracking-[4px] text-sm text-amber-300">
              Aalo · Arunachal Pradesh
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Breathe deeper.
              <br />
              Move slower.
              <br />
              Return to stillness.
            </h1>

            <p className="mt-6 text-lg text-zinc-200">
              A quiet sanctuary of traditional Hatha Yoga,
              Ashtanga Vinyasa, Pranayama and Meditation.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <Link
                to="/contact"
                className="bg-[#6B4F3B] px-7 py-4 rounded-full"
              >
                Begin Your Practice
              </Link>

              <Link
                to="/programs"
                className="border border-white px-7 py-4 rounded-full"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}

      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200"
            alt=""
            className="rounded-3xl"
          />

          <div>

            <span className="text-[#6B4F3B] font-semibold">
              About The Studio
            </span>

            <h2 className="text-4xl font-bold mt-4">
              A place to come home to yourself.
            </h2>

            <p className="mt-6 text-zinc-600 leading-relaxed">
              Siang Trust Yoga Studio was founded with a simple intention —
              to offer the people of Aalo a sincere,
              lineage-based yoga practice rooted in breath,
              presence and awareness.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <Feature text="Rooted in Lineage" />
              <Feature text="Personal Guidance" />
              <Feature text="Meditation Included" />
              <Feature text="Calm Studio Space" />

            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-semibold"
            >
              Learn More <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

      {/* PROGRAMS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Our Practices
          </h2>

          <p className="text-center mt-4 text-zinc-500">
            Two complementary paths. One sincere practice.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-16">

            <ProgramCard
              title="Traditional Hatha Yoga"
              description="A measured practice of classical postures, alignment and breath."
            />

            <ProgramCard
              title="Ashtanga Vinyasa Yoga"
              description="A dynamic sequence linking movement and breath."
            />

          </div>
        </div>
      </section>

      {/* TEACHERS */}

      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold">
            Meet Your Teachers
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-16">

            <TeacherCard
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200"
              name="Gedam Ete"
              role="Founder · Lead Teacher"
            />

            <TeacherCard
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200"
              name="Sunny Vats"
              role="Senior Teacher"
            />

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold">
            Voices from Our Students
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <Testimonial
              name="Yumjum Kamdak"
              text="Anyone interested in exploring the magic of yoga can join."
            />

            <Testimonial
              name="Kirpy Ori"
              text="The quality of teaching is excellent and helped relieve my back pain."
            />

            <Testimonial
              name="Libi Kamki"
              text="Best place if you are looking for a yoga experience in Aalo."
            />

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24 bg-[#6B4F3B] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Begin Your Practice Today
          </h2>

          <p className="mt-6 text-zinc-200">
            Small class sizes. Personal guidance.
            Pranayama and Meditation included.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-full"
          >
            Book a Class
          </Link>

        </div>
      </section>
    </MainLayout>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle size={18} />
      <span>{text}</span>
    </div>
  );
}

function ProgramCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="p-10 rounded-3xl border"
    >
      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-4 text-zinc-600">
        {description}
      </p>

      <Link
        to="/programs"
        className="inline-block mt-6 font-semibold"
      >
        Learn More →
      </Link>
    </motion.div>
  );
}

function TeacherCard({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      <img
        src={image}
        className="h-96 w-full object-cover"
        alt=""
      />

      <div className="p-6">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-zinc-500">{role}</p>
      </div>
    </div>
  );
}

function Testimonial({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <div className="p-8 rounded-3xl border">
      <p className="text-zinc-600 italic">
        "{text}"
      </p>

      <div className="mt-6 font-semibold">
        {name}
      </div>
    </div>
  );
}

export default Home;
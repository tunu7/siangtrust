import MainLayout from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import studioImage from "../assets/studioyoga.jpg";
import gedamEte from "../assets/gedamete.jpg";
import sunnyVats from "../assets/sunnyvats.jpg";

function About() {
  return (
    <MainLayout>
      <Helmet>
        <title>About | Siang Trust Yoga Studio</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="pt-36 pb-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#6B4F3B] font-semibold uppercase tracking-wider">
            About Siang Trust Yoga Studio
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight text-stone-800">
            Traditional Yoga for Modern Life.
          </h1>

          <p className="mt-8 text-lg text-zinc-600 leading-relaxed max-w-4xl">
            Nestled in the heart of Aalo, Arunachal Pradesh, Siang Trust Yoga
            Studio is a dedicated space for authentic yogic learning and
            self-discovery. Our approach combines traditional wisdom with
            practical guidance, helping students cultivate strength,
            flexibility, mental clarity, and inner balance through consistent
            practice.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={studioImage}
              alt="Siang Trust Yoga Studio"
              className="rounded-3xl shadow-xl w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-stone-800">
              Our Philosophy
            </h2>

            <p className="mt-6 text-zinc-600 leading-relaxed">
              We believe yoga is far more than physical exercise. It is a
              holistic discipline that harmonizes body, breath, mind, and
              awareness. Every class is designed to help students develop
              sustainable well-being, deepen self-understanding, and build a
              lifelong relationship with their practice.
            </p>

            <p className="mt-4 text-zinc-600 leading-relaxed">
              Whether you are stepping onto the mat for the first time or
              seeking to refine an existing practice, our teachers provide
              personalized guidance in a supportive and welcoming environment.
            </p>

            <div className="space-y-4 mt-10">
              <ValueCard
                title="Authentic Traditional Teaching"
                description="Rooted in established yogic traditions and taught with integrity."
              />

              <ValueCard
                title="Small & Personal Classes"
                description="Individual attention that supports safe and meaningful progress."
              />

              <ValueCard
                title="Breath, Meditation & Awareness"
                description="Beyond postures, we integrate pranayama and meditation into every journey."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY PRACTICE WITH US */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-stone-800">
            Why Practice With Us?
          </h2>

          <p className="mt-6 text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Our studio provides a calm and supportive environment where
            students can develop physical vitality, mental resilience, and
            emotional balance through consistent yogic practice.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <FeatureCard
              title="Traditional Hatha Yoga"
              description="Build strength, flexibility, posture, and breath awareness."
            />

            <FeatureCard
              title="Ashtanga Vinyasa"
              description="Develop discipline, stamina, focus, and energy."
            />

            <FeatureCard
              title="Meditation Practice"
              description="Cultivate clarity, mindfulness, and inner peace."
            />
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-stone-800">
            Meet Your Teachers
          </h2>

          <p className="text-center text-zinc-600 mt-4 max-w-2xl mx-auto">
            Guided by experience, rooted in tradition, and dedicated to helping
            students grow through authentic yoga practice.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <TeacherCard
              image={gedamEte}
              name="Gedam Ete"
              role="Founder & Lead Teacher"
              description="RYT 500 Hours (Traditional Yoga) and MA in Yoga. Dedicated to preserving authentic yogic teachings and guiding students toward holistic well-being."
            />

            <TeacherCard
              image={sunnyVats}
              name="Sunny Vats"
              role="Senior Teacher"
              description="RYT 300 Hours from Bihar School of Yoga. Specializes in integrating traditional yogic principles with accessible daily practice."
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="pb-24 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-stone-800">
            Our Mission
          </h2>

          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            To make authentic yoga accessible to the people of Aalo and beyond,
            fostering healthier bodies, calmer minds, and more conscious living
            through dedicated practice and compassionate teaching.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

/* COMPONENTS */

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border border-stone-200 rounded-2xl bg-stone-50">
      <h3 className="font-semibold text-lg text-stone-800">
        {title}
      </h3>

      <p className="mt-2 text-zinc-600">
        {description}
      </p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300">
      <h3 className="font-semibold text-xl text-stone-800">
        {title}
      </h3>

      <p className="mt-3 text-zinc-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function TeacherCard({
  image,
  name,
  role,
  description,
}: {
  image: string;
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="h-96 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-stone-800">
          {name}
        </h3>

        <p className="text-[#6B4F3B] font-medium mt-2">
          {role}
        </p>

        <p className="mt-4 text-zinc-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default About;


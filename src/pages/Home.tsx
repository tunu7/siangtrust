import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion"; // Imported Variants here
import gedamEte from "../assets/gedamete.jpg";
import sunnyVats from "../assets/sunnyvats.jpg";

// Typed properly so TypeScript accepts "easeOut" and easing configurations
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function Home() {
  return (
    <MainLayout>
      <Helmet>
        <title>Siang Trust Yoga Studio | Aalo</title>
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="pt-32 relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 lg:col-span-7 text-white"
          >
            <span className="inline-block uppercase tracking-[4px] text-xs font-semibold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full backdrop-blur-sm">
              Aalo · Arunachal Pradesh
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mt-6 leading-[1.1] tracking-tight">
              Breathe deeper. <br />
              <span className="font-semibold text-stone-100">Move slower.</span> <br />
              Return to stillness.
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 max-w-xl font-light leading-relaxed">
              A quiet sanctuary of traditional Hatha Yoga,
              Ashtanga Vinyasa, Pranayama, and Meditation.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <Link
                to="/contact"
                className="bg-[#6B4F3B] hover:bg-[#573f2f] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-black/20"
              >
                Begin Your Practice
              </Link>

              <Link
                to="/programs"
                className="border-2 border-white/80 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#6B4F3B]/5 rounded-3xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200"
              alt="Yoga practice alignment"
              className="rounded-3xl shadow-xl w-full object-cover h-112.5"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="text-[#6B4F3B] text-sm uppercase tracking-wider font-bold">
              About The Studio
            </motion.span>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mt-3 leading-tight">
              A place to come home to yourself.
            </motion.h2>

            <motion.p variants={fadeInUp} className="mt-6 text-stone-600 leading-relaxed font-light">
              Siang Trust Yoga Studio was founded with a simple intention —
              to offer the people of Aalo a sincere,
              lineage-based yoga practice rooted in breath,
              presence, and awareness.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Feature text="Rooted in Lineage" />
              <Feature text="Personal Guidance" />
              <Feature text="Meditation Included" />
              <Feature text="Calm Studio Space" />
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-[#6B4F3B] hover:text-[#573f2f] transition-colors group"
              >
                Learn More <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">
              Our Practices
            </h2>
            <p className="mt-4 text-stone-500 font-light">
              Two complementary paths. One sincere practice.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16"
          >
            <ProgramCard
              title="Traditional Hatha Yoga"
              description="A measured practice of classical postures, focused structural alignment, and intentional breathwork designed to balance energy."
            />
            <ProgramCard
              title="Ashtanga Vinyasa Yoga"
              description="A dynamic and progressive sequence linking fluid movement with breath, cultivating focus, physical strength, and mental endurance."
            />
          </motion.div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">
              Meet Your Teachers
            </h2>
            <p className="mt-4 text-stone-500 font-light">
              Guided by experience, dedicated to your holistic growth.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-8 lg:gap-12 mt-16"
          >
            <TeacherCard
  image={gedamEte}
  name="Gedam Ete"
  role="RYT 500 Hours (Traditional Yoga)
MA (Yoga)"
/>

<TeacherCard
  image={sunnyVats}
  name="Sunny Vats"
  role="RYT 300 Hours
(Bihar School of Yoga)"
/>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">
              Voices from Our Students
            </h2>
            <p className="mt-4 text-stone-500 font-light">
              Real transformations from our community in Aalo.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <Testimonial
              name="Yumjum Kamdak"
              text="Anyone interested in exploring the magic of yoga can join. The environment is warm, inviting, and truly authentic."
            />
            <Testimonial
              name="Kirpy Ori"
              text="The quality of teaching is excellent and helped relieve my chronic back pain. I leave every single session feeling renewed."
            />
            <Testimonial
              name="Libi Kamki"
              text="Without a doubt, this is the best place if you are looking for a genuine, peaceful yoga experience right here in Aalo."
            />
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#6B4F3B] text-white relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -top-16 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Begin Your Practice Today
          </motion.h2>

          <p className="mt-6 text-lg text-stone-200/90 font-light max-w-xl mx-auto">
            Small class sizes. Personal guidance. <br />
            Pranayama and Meditation included in every path.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block mt-10 bg-white text-[#6B4F3B] hover:bg-stone-100 font-semibold px-10 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book a Class
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

/* HELPER COMPONENTS */

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 py-2 px-4 bg-white/60 border border-stone-200/40 rounded-xl shadow-sm">
      <CheckCircle size={18} className="text-[#6B4F3B] shrink-0" />
      <span className="text-stone-700 font-medium text-sm sm:text-base">{text}</span>
    </div>
  );
}

function ProgramCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)" }}
      className="p-8 md:p-10 rounded-3xl border border-stone-200/80 bg-stone-50/50 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-serif font-bold text-stone-800">{title}</h3>
        <p className="mt-4 text-stone-600 font-light leading-relaxed">{description}</p>
      </div>

      <Link
        to="/programs"
        className="inline-flex items-center gap-2 mt-8 font-semibold text-[#6B4F3B] group w-fit"
      >
        Learn More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

function TeacherCard({ image, name, role }: { image: string; name: string; role: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100"
    >
      <div className="overflow-hidden h-96 w-full">
        <img
          src={image}
          className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
          alt={`Yoga Instructor ${name}`}
        />
      </div>

      <div className="p-8 text-center sm:text-left">
        <h3 className="font-serif font-bold text-xl text-stone-800">{name}</h3>
        <p className="text-[#6B4F3B] text-sm font-medium mt-1">{role}</p>
      </div>
    </motion.div>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-8 rounded-3xl border border-stone-200/60 bg-stone-50/30 flex flex-col justify-between relative"
    >
      <Quote size={32} className="absolute top-6 right-8 text-stone-200/80 pointer-events-none" />
      
      <p className="text-stone-600 font-light italic leading-relaxed relative z-10 pr-4">
        "{text}"
      </p>

      <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#6B4F3B]/10 text-[#6B4F3B] flex items-center justify-center font-bold text-xs">
          {name.charAt(0)}
        </div>
        <span className="font-semibold text-stone-800 text-sm">{name}</span>
      </div>
    </motion.div>
  );
}

export default Home;
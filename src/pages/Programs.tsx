import MainLayout from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function Programs() {
  return (
    <MainLayout>
      <Helmet>
        <title>Programs | Siang Trust Yoga Studio</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="pt-36 pb-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-[#6B4F3B] font-semibold uppercase tracking-wider">
            Our Programs
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 text-stone-800">
            Traditional Yoga Practices for Modern Life
          </h1>

          <p className="mt-8 text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Strengthen your body, calm your mind, and cultivate lasting
            well-being through authentic yoga practice. Whether you are a
            beginner or an experienced practitioner, our classes provide a
            structured path rooted in tradition and personal guidance.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <ProgramCard
              title="Traditional Hatha Yoga"
              description="A classical approach to yoga focusing on mindful movement, proper alignment, breath awareness, and inner balance."
              benefits={[
                "Improves flexibility and mobility",
                "Builds strength and stability",
                "Supports healthy posture",
                "Enhances breathing capacity",
                "Reduces stress and tension",
                "Cultivates mindfulness",
              ]}
              suitableFor={[
                "Complete beginners",
                "Working professionals",
                "Senior practitioners",
                "Anyone seeking a balanced practice",
              ]}
            />

            <ProgramCard
              title="Ashtanga Vinyasa Yoga"
              description="A dynamic and progressive practice synchronizing breath with movement to develop strength, endurance, focus, and discipline."
              benefits={[
                "Improves cardiovascular fitness",
                "Builds stamina and endurance",
                "Increases flexibility",
                "Strengthens the entire body",
                "Improves concentration",
                "Develops discipline and consistency",
              ]}
              suitableFor={[
                "Active practitioners",
                "Fitness enthusiasts",
                "Intermediate students",
                "Those seeking a vigorous practice",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CLASS INCLUDES */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-stone-800">
            What Every Class Includes
          </h2>

          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            Every session is thoughtfully designed to support your physical,
            mental, and emotional well-being.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            <FeatureCard text="Guided Warm-Up" />
            <FeatureCard text="Traditional Yoga Postures" />
            <FeatureCard text="Pranayama (Breathwork)" />
            <FeatureCard text="Relaxation Techniques" />
            <FeatureCard text="Meditation Practice" />
            <FeatureCard text="Personal Teacher Guidance" />
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-stone-800">
            Class Schedule
          </h2>

          <p className="text-center text-zinc-600 mt-4">
            Choose the session that best fits your lifestyle.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#FAF7F2] border border-stone-200 rounded-3xl p-10"
            >
              <h3 className="text-2xl font-bold text-stone-800">
                Summer Schedule
              </h3>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="font-semibold text-[#6B4F3B]">
                    Morning Session
                  </p>
                  <p className="text-zinc-600 mt-1">
                    5:15 AM – 6:15 AM
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#6B4F3B]">
                    Evening Session
                  </p>
                  <p className="text-zinc-600 mt-1">
                    5:00 PM – 6:15 PM
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#FAF7F2] border border-stone-200 rounded-3xl p-10"
            >
              <h3 className="text-2xl font-bold text-stone-800">
                Winter Schedule
              </h3>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="font-semibold text-[#6B4F3B]">
                    Morning Session
                  </p>
                  <p className="text-zinc-600 mt-1">
                    5:30 AM – 6:30 AM
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-[#6B4F3B]">
                    Evening Session
                  </p>
                  <p className="text-zinc-600 mt-1">
                    4:45 PM – 6:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#6B4F3B] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Begin Your Practice?
          </h2>

          <p className="mt-6 text-stone-200 text-lg max-w-2xl mx-auto">
            Join our welcoming community and experience the transformative
            benefits of authentic yoga practice through small class sizes,
            personal guidance, and traditional teachings.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-white text-[#6B4F3B] hover:bg-stone-100 px-10 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Book a Class
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

/* PROGRAM CARD */

function ProgramCard({
  title,
  description,
  benefits,
  suitableFor,
}: {
  title: string;
  description: string;
  benefits: string[];
  suitableFor: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl p-10 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-3xl font-bold text-stone-800">
        {title}
      </h3>

      <p className="mt-5 text-zinc-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-8">
        <h4 className="font-semibold text-lg text-stone-800">
          Benefits
        </h4>

        <ul className="space-y-3 mt-4">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 text-zinc-600"
            >
              <CheckCircle
                size={18}
                className="text-[#6B4F3B] shrink-0"
              />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold text-lg text-stone-800">
          Best For
        </h4>

        <ul className="space-y-2 mt-4 text-zinc-600">
          {suitableFor.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* FEATURE CARD */

function FeatureCard({ text }: { text: string }) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 flex items-center gap-3 shadow-sm">
      <CheckCircle
        size={20}
        className="text-[#6B4F3B] shrink-0"
      />
      <span className="font-medium text-stone-700">
        {text}
      </span>
    </div>
  );
}

export default Programs;

import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Female",
    phone: "",
    program: "Traditional Hatha Yoga",
    preferredTime: "Summer Morning · 5:15 AM",
    experience: "Complete beginner",
    healthNotes: "",
  });

  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = () => {
    const phoneNumber = "919436056071";

    const text = `
🧘 New Class Booking Request

Full Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Phone Number: ${formData.phone}

Program: ${formData.program}
Preferred Time: ${formData.preferredTime}

Experience Level: ${formData.experience}

Health Notes:
${formData.healthNotes || "None"}

I would like to reserve my place in the class.
`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-24 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-[#2c221b]">
              Book Your Class
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Reserve your place on the mat.
            </p>

            <p className="mt-3 text-zinc-600 leading-relaxed">
              Tell us a little about yourself. We will confirm your
              class directly on WhatsApp — usually within a few hours.
            </p>

            <div className="mt-8 space-y-3 text-[#6B4F3B] font-medium">
              <p>• Small class sizes</p>
              <p>• Personal teacher guidance</p>
              <p>• Pranayama & Meditation included</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">
            {/* Booking Form */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <h2 className="text-2xl font-bold mb-8">
                Booking Form
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#6B4F3B]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Age
                  </label>

                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#6B4F3B]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Gender
                  </label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#6B4F3B]"
                  >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#6B4F3B]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Program
                  </label>

                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#6B4F3B]"
                  >
                    <option>Traditional Hatha Yoga</option>
                    <option>Meditation Program</option>
                    <option>Pranayama Sessions</option>
                    <option>Ashtanga vinyasa yoga</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Preferred Time
                  </label>

                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#6B4F3B]"
                  >
                    <option>Summer Morning · 5:15 AM - 6:15 </option>
                    <option>Winter Morning · 5:30 AM - 6:30 AM</option>
                    <option>Summer Evening · 5:00 PM - 6:15 PM</option>
                    <option>Winter Evening · 4:45 PM - 6:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Experience Level
                  </label>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#6B4F3B]"
                  >
                    <option>Complete beginner</option>
                    <option>Some experience</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Health Notes (optional)
                  </label>

                  <textarea
                    rows={4}
                    name="healthNotes"
                    placeholder="Injuries, conditions, or anything we should know"
                    value={formData.healthNotes}
                    onChange={handleChange}
                    className="w-full border border-zinc-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#6B4F3B]"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#6B4F3B] hover:bg-[#5a4030] transition-all text-white py-4 rounded-xl font-medium"
                >
                  Send via WhatsApp
                </button>

                <p className="text-sm text-zinc-500 text-center">
                  By sending, you'll be redirected to WhatsApp with
                  all your details pre-filled.
                </p>
              </div>
            </div>

            {/* Studio Details */}
            <div>
              <h3 className="text-2xl font-bold">
                Visit Us
              </h3>

              <div className="space-y-5 mt-8 text-zinc-600">
                <p>
                  KGB Complex,
                  <br />
                  Nehru Chowk,
                  <br />
                  Aalo,
                  <br />
                  Arunachal Pradesh
                </p>

                <p>+91 9436056071</p>

                <p>gedamgamlin1@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;
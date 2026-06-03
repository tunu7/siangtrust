import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    const phone = "919436056071";

    const text = `
Name: ${name}

I would like to book a class.
`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    );
  };

  return (
    <MainLayout>

      <section className="pt-36 pb-24">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Book Your Class
          </h1>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">

            <div>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-[#6B4F3B] text-white p-4 rounded-xl"
              >
                Send via WhatsApp
              </button>

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Visit Us
              </h3>

              <div className="space-y-4 mt-8 text-zinc-600">

                <p>
                  KGB Complex,
                  Nehru Chowk,
                  Aalo,
                  Arunachal Pradesh
                </p>

                <p>
                  +91 9436056071
                </p>

                <p>
                  Gedamgamlin1@gmail.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default Contact;
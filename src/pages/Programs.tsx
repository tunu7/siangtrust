import MainLayout from "../layouts/MainLayout";

function Programs() {
  return (
    <MainLayout>

      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center">
            Our Programs
          </h1>

          <p className="text-center mt-6 text-zinc-500">
            Two complementary paths.
            One sincere practice.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-20">

            <ProgramCard
              title="Traditional Hatha Yoga"
              benefits={[
                "Improves flexibility",
                "Builds strength",
                "Enhances balance",
                "Inner calm",
              ]}
            />

            <ProgramCard
              title="Ashtanga Vinyasa Yoga"
              benefits={[
                "Dynamic movement",
                "Improves endurance",
                "Builds stamina",
                "Increases focus",
              ]}
            />

          </div>

        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Class Schedule
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="border rounded-3xl p-8">
              <h3 className="font-bold text-xl">
                Summer
              </h3>

              <p className="mt-4">
                Morning: 5:15 AM – 6:15 AM
              </p>

              <p>
                Evening: 5:00 PM – 6:15 PM
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="font-bold text-xl">
                Winter
              </h3>

              <p className="mt-4">
                Morning: 5:30 AM – 6:30 AM
              </p>

              <p>
                Evening: 4:45 PM – 6:00 PM
              </p>
            </div>

          </div>

        </div>
      </section>

    </MainLayout>
  );
}

function ProgramCard({
  title,
  benefits,
}: {
  title: string;
  benefits: string[];
}) {
  return (
    <div className="border rounded-3xl p-10">

      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      <ul className="space-y-4 mt-8">
        {benefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default Programs;
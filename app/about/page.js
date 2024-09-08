import TeamMember from "./components/TeamMember";
import teamData from "./data/teamdata";
import hero4 from "@/public/img/hero-4.png";
const About = () => {
  return (
    <div className="pt-[10vh] text-lg">
      {/* Hero */}
      <section
        style={{
          backgroundImage: `url(${hero4.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90vh",
        }}
        className="py-8 px-10 md:px-24 h-[90vh]"
      >
        <div className="h-full flex flex-col justify-center">
          <div className="absolute right-0 top-[10vh] bg-gradient-to-b from-teal-100 to-transparent h-1/2 w-full"></div>
          <h1 className="text-3xl md:text-5xl font-forum">
            WE ARE COLLECTIVE OF ENTREPRENEURIAL PEOPLE
          </h1>
          <h2 className="text-2xl md:text-4xl ">
            helping each other build new
            <span className="font-smooch text-3xl md:text-5xl"> ventures</span>
          </h2>
        </div>
      </section>

      {/* What we do */}
      <section className="py-8 m-8 md:mx-24">
        <h1 className="text-2xl md:text-5xl font-forum py-4 md:py-8">
          WHAT WE DO?
        </h1>
        <p>We co-create promising companies.</p>
        <br />
        <p>Our companies start:</p>
        <ol className="list-decimal">
          <li>with an amazing idea, or</li>
          <li>
            with an amazing co-founder. We ideate, research, prototype,
            validate, and spin-off.
          </li>
        </ol>
        <br />
        <p>
          We provide top-tier core services such as strategy , design , MVP
          Tech. Our companies have full support: accounting, design,
          engineering, finance, HR, IT, and recruiting. Our co-founders focus on
          building the business. Our core experts handle the rest.
        </p>
      </section>

      {/* What we don't do */}
      <section className="py-8 m-8 md:mx-24">
        <h1 className="text-2xl md:text-5xl font-forum py-4 md:py-8">
          WHAT WE DON&apos;T DO?
        </h1>
        <ul className="list-disc">
          <li>We don&apos;t take pitches (VC)</li>
          <li>We don&apos;t take applications (accelerator)</li>
          <li>We don&apos;t move slowly</li>
        </ul>

        <br />

        <p>
          The founding team of a startup, with the ambition to disrupt an
          industry, has three main things to worry about – validating the idea,
          building the product, looking after business operations and. Working
          with a venture builder means the first two are largely taken care of,
          leaving the team to focus on rapidly building a valuable business and
          taking it to market.
          <br /> <br />
          We invest our knowledge and experience, our ideas and our
          infrastructure. Working alongside entrepreneurs and co-founders, we
          support our ventures from startup to scale to exit, giving them access
          to the global networks and services they need to grow.
          <br /> <br />
          Lastly, we digitally transform companies and provide the technological
          foundations that allows them to stay ahead of their competition.
        </p>
      </section>

      {/* Team */}
      <section>
        <h1 className="text-3xl md:text-5xl text-center font-forum py-4 md:py-12">
          MEET OUR PILOTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-items-center">
          {teamData.map((person) => (
            <TeamMember key={person.name} {...person} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

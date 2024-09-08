const Career = () => {
  const openings = [
    {
      id: 1,
      title: "TECHNOLOGY LEAD - (CO FOUNDER)",
      description:
        "This is Co-founder/ Entrepreneur role with no fixed salary and only for people looking to create long term wealth. A unique opportunity to join a core team that help convert startup Ideas to market ready products. As part of the team, you will be continually challenged and have an opportunity to contribute towards creating and scaling new startup Ideas working closely with the core team partners and startup founders",
    },
    {
      id: 2,
      title: "FOUNDER IN RESIDENCE (CEO)",
      description:
        "Ready to work on a big idea with the support and backing of Turning Ideas Ventures? This is an opportunity designed to match unsuccessful/successful entrepreneurs with business ideas that we believe have the potential to be industry-changing.",
    },
    {
      id: 3,
      title: "FOUNDER IN RESIDENCE (CTO)",
      description:
        "Ready to work on a big idea with the support and backing of Turning Ideas Ventures? This is an opportunity designed to match unsuccessful/successful entrepreneurs with business ideas that we believe have the potential to be industry-changing.",
    },
  ];
  return (
    <main className="px-6 pt-[10vh] mx-6 sm:mx-24 text-lg">
      {/* Hero */}
      <section>
        <h1 className="text-2xl md:text-5xl text-center font-forum py-4 md:py-12">
          FLY WITH US
        </h1>
      </section>

      {/* Openings */}
      <section>
        <p>
          We believe that it takes a certain type of person to build a venture.
          We have a set of values that guide who we hire, and how we approach
          venture building:
        </p>
        <br />
        <p>Only scroll further if you:</p>
        <br />
        <ul className="list-disc">
          <li>
            If you are not looking for fixed pay every month and working to
            create long term wealth
          </li>
          <li>
            Never stop looking for a better way of doing things; be curious
          </li>
          <li>Building businesses is fast-paced and fluid; be nimble</li>
          <li>
            Sharing knowledge and networks builds better businesses; be generous
          </li>
          <li>The best ideas aren&apos;t always your own; seek diversity</li>
          <li>
            Decisions should be driven by analytics and customer insight;
            embrace data
          </li>
        </ul>
        <h1 className="text-2xl md:text-5xl text-center font-forum py-4 md:py-12">
          OPENINGS
        </h1>
        {openings.map((opening) => (
          <div key={opening.id}>
            <div className="md:flex md:justify-between items-center py-3">
              <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl font-forum text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-blue-900">
                {opening.title}
              </h1>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black hover:bg-blue-900 transition-all px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Apply
                </span>
              </button>
            </div>
            <p>{opening.description}</p>
            <br />
          </div>
        ))}

      </section>
    </main>
  );
};

export default Career;

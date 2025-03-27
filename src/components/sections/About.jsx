export const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
    "Typescript",
    "Vue",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "GraphQL", "MongoDB"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-28"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm a software engineer with a passion for creating beautiful and
            user-friendly interfaces. My background includes working in various
            tech companies and contributing to open-source projects. I'm always
            eager to learn and improve my skills, so feel free to reach out if
            you're interested in working together or discussing projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Frontend Skills */}

            {/* Backend Skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Backend Skills */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Software Engineering, University of California, Berkeley</li>
              <li>Bachelor's degree, Computer Science, 2015 - 2021</li>
              <li>Master's degree, Computer Science, 2022 - Present</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Software Engineer, MyCompany Inc.
                </h4>
                <p>2021 - Present</p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Software Engineer, AnotherCompany Inc.
                </h4>
                <p>2020 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

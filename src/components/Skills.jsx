export default function Skills() {
    const skills = [
      "JavaScript",
      "TypeScript",
      "React JS",
      "Node JS",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Docker",
      "CI/CD",
      "Git",
      "Linux",
      "GraphQL",
      "REST API",
      "Jest",
      "Mocha",
    ];
  
    return (
      <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
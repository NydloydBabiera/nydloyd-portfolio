export default function About() {
    return (
      <section
        id="about"
        className="py-20 px-4 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
  
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I am a Full Stack Developer with experience building scalable
              healthcare, enterprise, and government systems. I specialize in
              designing clean architectures, developing performant backend APIs,
              and creating responsive, user-friendly frontend applications.
            </p>
  
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Currently working as a junior application developer, I develop
              and maintain healthcare applications that support clinical and
              operational workflows. I focus on performance optimization,
              production stability, and long-term system reliability.
            </p>
  
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong foundation in JavaScript, React, Node.js, SQL, and
              DevOps practices, I continuously research and implement new
              technologies to improve system efficiency and user experience.
            </p>
          </div>
  
          {/* Right Side - Highlights Card */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">
              Professional Highlights
            </h3>
  
            <ul className="space-y-4">
              <li>✔ 4+ Years of Software Development Experience</li>
              <li>✔ Full Stack (React, Node.js, Express, SQL)</li>
              <li>✔ DevOps (Docker, CI/CD, PM2, Linux)</li>
              <li>✔ Performance Optimization & Query Tuning</li>
              <li>✔ Healthcare & ERP System Development</li>
              <li>✔ Real-time Systems & WebSocket Integration</li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }
  
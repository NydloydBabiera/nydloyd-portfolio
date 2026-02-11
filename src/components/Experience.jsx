export default function Experience() {
    return (
      <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
  
        <div className="space-y-8">
  
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              Junior App Developer — Theoria Medical
            </h3>
            <p className="text-sm text-gray-500">2024 - Present</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Developed full-stack healthcare applications</li>
              <li>Built scalable backend APIs</li>
              <li>Optimized database performance</li>
              <li>Resolved production issues & implemented hotfixes</li>
            </ul>
          </div>
  
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              Backend Developer | DevOps — Biotech Farms
            </h3>
            <p className="text-sm text-gray-500">2022 - 2024</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Developed REST APIs with Node.js & Express</li>
              <li>Implemented CI/CD with GitHub Actions</li>
              <li>Dockerized applications</li>
              <li>Improved backend performance by 40%</li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }
  
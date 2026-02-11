export default function Projects() {
    return (
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
  
        <div className="grid md:grid-cols-2 gap-6">
  
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              Queuing & Data Entry Application
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Backend & DevOps system for government organization with
              reporting and transaction monitoring.
            </p>
          </div>
  
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              Chicken Eggs Classifier (Computer Vision)
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Python-based computer vision system that classifies and sorts eggs automatically.
            </p>
          </div>
  
        </div>
      </section>
    );
  }
  
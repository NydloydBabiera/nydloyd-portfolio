import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Nydloyd Villaruel Babiera
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Software Developer Building Scalable Systems
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="#contact" 
            className="flex items-center gap-2 px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-600 hover:scale-105 transition transform" > 
            Contact Me </a>
          
          {/* GitHub */}
          <a
            href="https://github.com/NydloydBabiera"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:scale-105 transition transform"
          >
            <Github size={18} />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nydloyd-babiera-2a5161224"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-500 hover:scale-105 transition transform"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}

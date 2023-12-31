// components/About.js
import Image from 'next/image'; // Import next/image

const About = () => {
  return (
    <section id="about" className="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <div className="flex-1 mb-4 md:mb-0 md:mr-4">
        <h2 className="text-2xl font-bold mb-4">About Peter Quinn</h2>
        <p className="text-base font-normal mb-3">
          As a seasoned Full Stack MERN Developer and Blockchain Specialist, I bring a unique blend of technical expertise and business acumen to every project. My journey in the tech world transcends beyond just writing code; it&apos;s about transforming complex challenges into streamlined, user-friendly solutions that drive business success.
        </p>
        <p className="text-base font-normal mb-3">
          My skills in developing cutting-edge software and blockchain solutions have consistently led to increased efficiency, revenue growth, and enhanced user experiences for my clients. From optimizing SEO to crafting digital experiences that resonate with users, my focus is always on delivering tangible business results.
        </p>
        <p className="text-base font-normal mb-3">
          If you&apos;re looking for a partner to help elevate your business through innovative technology solutions, let&apos;s connect. I&apos;m committed to turning your challenges into opportunities.
        </p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/peterdquinn31/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          <span className="mx-2">|</span>
          <a href="https://github.com/PeterdQuinn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          <span className="mx-2">|</span>
          <a href="/resume.pdf" download className="text-blue-600 hover:underline">Download Resume</a>
        </div>
        <div className="mt-6">
          <a href="mailto:Peterdquinnsr@gmail.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="flex-1">
        <Image // Use next/image component
          src="/buisness.jpeg" // Replace with the actual path to your image
          alt="Peter Quinn"
          width={500} // Set the width you desire
          height={300} // Set the height you desire
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;

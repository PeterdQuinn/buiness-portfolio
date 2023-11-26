

const Services = () => {
  return (
    <section id="services" className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Full Stack Web Development */}
        <div className="card hover:shadow-lg transition-shadow hover:shadow-glow">
          <h3 className="text-xl font-semibold text-white">Full Stack Web Development</h3>
          <p className="text-gray-300">Expertise in MERN stack for creating dynamic and responsive web applications.</p>
        </div>
        {/* Blockchain Development */}
        <div className="card hover:shadow-lg transition-shadow hover:shadow-glow">
          <h3 className="text-xl font-semibold text-white">Blockchain Development</h3>
          <p className="text-gray-300">Specializing in NFTs and blockchain marketplaces, leveraging Solidity and smart contracts.</p>
        </div>
        {/* SEO & Digital Marketing */}
        <div className="card hover:shadow-lg transition-shadow hover:shadow-glow">
          <h3 className="text-xl font-semibold text-white">SEO & Digital Marketing</h3>
          <p className="text-gray-300">Advanced SEO strategies and digital marketing solutions for enhanced online visibility.</p>
        </div>
        {/* Data Analytics & Business Insights */}
        <div className="card hover:shadow-lg transition-shadow hover:shadow-glow">
          <h3 className="text-xl font-semibold text-white">Data Analytics & Business Insights</h3>
          <p className="text-gray-300">Utilizing data to inform strategic business decisions and growth.</p>
        </div>
        {/* Technical Writing & Content Creation */}
        <div className="card hover:shadow-lg transition-shadow hover:shadow-glow">
          <h3 className="text-xl font-semibold text-white">Technical Writing & Content Creation</h3>
          <p className="text-gray-300">Creating engaging and informative technical content for diverse audiences.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

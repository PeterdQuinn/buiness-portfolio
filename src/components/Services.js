// components/Services.js

const Services = () => {
  return (
    <section id="services" className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Full Stack Web Development */}
        <div className="card hover:shadow-lg transition-shadow hover:border-2 hover:border-blue-500">
          <h3 className="text-xl font-semibold">Full Stack Web Development</h3>
          <p>Expertise in MERN stack for creating dynamic and responsive web applications.</p>
        </div>
        {/* Blockchain Development */}
        <div className="card hover:shadow-lg transition-shadow hover:border-2 hover:border-blue-500">
          <h3 className="text-xl font-semibold">Blockchain Development</h3>
          <p>Specializing in NFTs and blockchain marketplaces, leveraging Solidity and smart contracts.</p>
        </div>
        {/* SEO & Digital Marketing */}
        <div className="card hover:shadow-lg transition-shadow hover:border-2 hover:border-blue-500">
          <h3 className="text-xl font-semibold">SEO & Digital Marketing</h3>
          <p>Advanced SEO strategies and digital marketing solutions for enhanced online visibility.</p>
        </div>
        {/* Data Analytics & Business Insights */}
        <div className="card hover:shadow-lg transition-shadow hover:border-2 hover:border-blue-500">
          <h3 className="text-xl font-semibold">Data Analytics & Business Insights</h3>
          <p>Utilizing data to inform strategic business decisions and growth.</p>
        </div>
        {/* Technical Writing & Content Creation */}
        <div className="card hover:shadow-lg transition-shadow hover:border-2 hover:border-blue-500">
          <h3 className="text-xl font-semibold">Technical Writing & Content Creation</h3>
          <p>Creating engaging and informative technical content for diverse audiences.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

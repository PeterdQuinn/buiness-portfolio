// components/PastClients.js

const PastClients = () => {
  return (
    <section id="past-clients" className="container mx-auto p-4 bg-light-gray-200 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-dark-blue-500">Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Tri-Tek Electronics */}
        <div className="client-card p-4 bg-client-color rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Tri-Tek Electronics</h3>
          <p className="text-sm mb-3">Enhanced the e-commerce website with SEO optimization and design updates, improving user experience and online visibility.</p>
          <a href="https://www.tritekelectronics.com/" target="_blank" rel="noopener noreferrer" className="client-link">Visit Site</a>
        </div>

        {/* Junior's Custom Towing LLC */}
          <div className="client-card p-4 bg-client-color rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3></h3>
            <p className="text-sm mb-3">Developed and managed the website for this family-owned towing company, enhancing online visibility and customer engagement.</p>
            <p className="text-sm mb-3">Developed and managed the website for this family-owned towing company, enhancing online visibility and customer engagement.</p>
            <a href="https://www.juniorscustomtowing.com/" target="_blank" rel="noopener noreferrer" className="client-link">Visit Site</a>
          </div>

        {/* Nomadic Cooling */}
        <div className="client-card p-4 bg-client-color rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Nomadic Cooling</h3>
          <p className="text-sm mb-3">Collaborated on digital footprint enhancement through SEO and web development, focusing on product visibility and performance.</p>
          <a href="https://www.nomadiccooling.com/" target="_blank" rel="noopener noreferrer" className="client-link">Visit Site</a>
        </div>

        {/* Full Stack Services LLC */}
        <div className="client-card p-4 bg-client-color rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Full Stack Services LLC</h3>
          <p className="text-sm mb-3">Founded and developed Full Stack Services LLC, an SEO company specializing in comprehensive digital marketing strategies and web development services.</p>
          <a href="https://fullstackservicesllc.net/" target="_blank" rel="noopener noreferrer" className="client-link">Visit Site</a>
        </div>

        {/* Full Stack SEO */}
        <div className="client-card p-4 bg-client-color rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Full Stack SEO</h3>
          <p className="text-sm mb-3">Created a demo website demonstrating expertise in SEO strategies and web design.</p>
          <a href="https://www.fullstackseo.net/" target="_blank" rel="noopener noreferrer" className="client-link">Visit Site</a>
        </div>

        {/* Crypto DApps */}
        <div className="client-card p-4 bg-client-color rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Crypto DApps</h3>
          <p className="text-sm mb-3">Developed decentralized applications showcasing blockchain technology and smart contract development skills.</p>
          <a href="https://dapps-rouge.vercel.app/" target="_blank" rel="noopener noreferrer" className="client-link">Visit Site</a>
        </div>

        {/* Chillsbury Doge Boy */}
        <div className="client-card p-4 bg-client-color rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Chillsbury Doge Boy</h3>
          <p className="text-sm mb-3">Developed an engaging NFT project platform for Chillsbury Doge Boy, focusing on blockchain integration and a user-friendly interface to facilitate NFT transactions and interactions.</p>
          <a href="https://www.chillsburydogeboy.com/" target="_blank" rel="noopener noreferrer" className="client-link">Visit Project</a>
        </div>

      </div>
    </section>
  );
};

export default PastClients;

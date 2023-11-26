// components/PastClients.js

const PastClients = () => {
  return (
    <section id="past-clients" className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Past Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Tri-Tek Electronics */}
        <div className="client-card">
          <h3 className="text-lg font-semibold">Tri-Tek Electronics</h3>
          <p className="text-sm">Enhanced the e-commerce website with SEO optimization and design updates, improving user experience and online visibility.</p>
          <a href="https://www.tritekelectronics.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
        {/* Junior's Custom Towing LLC */}
        <div className="client-card">
          <h3 className="text-lg font-semibold">Junior's Custom Towing LLC</h3>
          <p className="text-sm">Developed and managed the website for this family-owned towing company, enhancing online visibility and customer engagement.</p>
          <a href="https://www.juniorscustomtowing.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
        {/* Nomadic Cooling */}
        <div className="client-card">
          <h3 className="text-lg font-semibold">Nomadic Cooling</h3>
          <p className="text-sm">Collaborated on digital footprint enhancement through SEO and web development, focusing on product visibility and performance.</p>
          <a href="https://www.nomadiccooling.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
       {/* Full Stack Services LLC */}
       <div className="client-card">
          <h3 className="text-lg font-semibold">Full Stack Services LLC</h3>
          <p className="text-sm">Founded and developed Full Stack Services LLC, an SEO company specializing in comprehensive digital marketing strategies and web development services.</p>
          <a href="https://fullstackservicesllc.net/" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
        {/* Full Stack SEO */}
        <div className="client-card">
          <h3 className="text-lg font-semibold">Full Stack SEO</h3>
          <p className="text-sm">Created a demo website demonstrating expertise in SEO strategies and web design.</p>
          <a href="https://www.fullstackseo.net/" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
        {/* Crypto DApps */}
        <div className="client-card">
          <h3 className="text-lg font-semibold">Crypto DApps</h3>
          <p className="text-sm">Developed decentralized applications showcasing blockchain technology and smart contract development skills.</p>
          <a href="https://dapps-rouge.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
        {/* NFT PROJECT */}
        <div className="client-card hover:shadow-lg transition-shadow p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Chillsbury Doge Boy</h3>
          <p className="text-sm">Developed an engaging NFT project platform for Chillsbury Doge Boy, focusing on blockchain integration and a user-friendly interface to facilitate NFT transactions and interactions.</p>
          <a href="https://www.chillsburydogeboy.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 block">Visit Project</a>
        </div>
      </div>
    </section>
  );
};

export default PastClients;

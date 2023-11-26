// components/Services.js

const Services = () => {
    return (
      <section id="services" className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Repeat this block for each service/project */}
          <div className="card hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Service Name</h3>
            <p>Description of the service or project details.</p>
          </div>
          {/* End of block */}
        </div>
      </section>
    );
  };
  
  export default Services;
  
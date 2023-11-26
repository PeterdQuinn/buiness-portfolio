// components/Contact.js

const Contact = () => {
    return (
      <section id="contact" className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 p-2"></textarea>
          </div>
          <button type="submit" className="bg-primary text-secondary px-4 py-2 rounded hover:bg-opacity-90">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  
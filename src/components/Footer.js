    // components/Footer.js

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <h3 className="text-xl font-semibold mb-2">About Peter Quinn</h3>
                    <p className="text-sm">
                        Full Stack MERN Developer and Blockchain Specialist, dedicated to creating innovative solutions.
                    </p>
                    <div className="mt-4">
                        <a href="https://www.linkedin.com/in/peterdquinn31/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/PeterdQuinn" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-500 hover:text-gray-700">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                    <ul>
                        <li><a href="#about" className="hover:text-gray-300">About</a></li>
                        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#clients" className="hover:text-gray-300">Clients</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p className="text-sm">Feel free to get in touch for collaborations or just a friendly hello.</p>
                    <p className="text-sm mt-2">Email: Peterdquinnsr@gmail.com</p>
                </div>
            </div>
            <div className="text-center mt-6 text-sm">
                © 2023 Peter Quinn. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

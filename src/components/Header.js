// components/Header.js

const Header = () => {
    return (
      <header className="bg-primary text-secondary p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">Your Brand</div>
          <div>
            <a href="#about" className="px-4 hover:text-primary">About</a>
            <a href="#services" className="px-4 hover:text-primary">Services</a>
            <a href="#contact" className="px-4 hover:text-primary">Clients</a>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  
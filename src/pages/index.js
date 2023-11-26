import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
};

export default HomePage;

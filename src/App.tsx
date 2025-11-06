import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Plans />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

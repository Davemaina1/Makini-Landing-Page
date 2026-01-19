
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Integrations } from './components/Integrations';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-makini-ice text-makini-navy font-sans selection:bg-makini-soft selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Services />
        <Process />
        <Integrations />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

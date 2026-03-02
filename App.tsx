
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Problem } from './components/Problem';
import { WhyAfrica } from './components/WhyAfrica';
import { Services } from './components/Services';
import { Research } from './components/Research';
import { Quote } from './components/Quote';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-makini-ice text-makini-navy font-sans selection:bg-makini-soft selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Problem />
        <WhyAfrica />
        <Services />
        <Research />
        <Quote />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

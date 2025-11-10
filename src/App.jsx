
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

useGSAP(() => {
  if (typeof window === 'undefined') return;

  const elements = gsap.utils.toArray('.reveal-up');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    elements.forEach((element) => {
      element.style.transform = 'translateY(0)';
      element.style.opacity = 1;
    });
    return;
  }

  elements.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: '-200 bottom',
        end: 'bottom 80%',
        scrub: true
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    })
  });
});

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
    
  )
}

export default App;

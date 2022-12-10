import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contacts";

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

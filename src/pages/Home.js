import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />

      <Projects />
    </div>
  );
};

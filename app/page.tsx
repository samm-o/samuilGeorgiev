import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import Clubs from "@/components/Clubs";
import Experiences from "@/components/Experiences";
import { FloatingNav } from "@/components/ui/floatingNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center 
    items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={[
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            { name: "Clubs", link: "#testimonials" },
            { name: "Contact", link: "#contact" },
          ]}
          className="sm:px-10"
        />
        <Hero />
        <Grid />
        <Projects />
        <Clubs />
        <Experiences />
        <Footer />
      </div>
    </main>
  );
}
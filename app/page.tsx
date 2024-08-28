"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Clients from "../components/Clubs";
import Experience from "../components/Experiences";
import RecentProjects from "../components/Projects";
import { FloatingNav } from "@/components/ui/floatingNav";

const Grid = dynamic(() => import("../components/Grid"), { ssr: false });

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {isClient && <Grid />}
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
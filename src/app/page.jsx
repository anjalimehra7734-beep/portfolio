import Hero from '@/components/hero/Hero'
import About from "@/components/about/About"
import Navbar from '@/components/layout/NavBar'
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import Skills from "@/components/skills/Skills";
import React from 'react'
import Footer from '@/components/Footer/Footer';

export default function page() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About />
    <Skills />
     <Projects />
      <Services />
      <Contact />
      <Footer/>
    </>
  )
}

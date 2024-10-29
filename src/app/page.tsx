
import HeroSection from "@/app/hero/page";

import AboutSection from "@/app/about/page";
import ProjectsSection from "@/app/project/page";
import ContactPage from "@/app/contact/page";
import Skills from "@/app/skills/page";

export default function Home() {
  return (
<main className="flex min-h-screen flex-col bg-[#121212] ">
  
   <div className="container mx-auto px-12 py-4">
  <HeroSection/> 
  <AboutSection/>
  <Skills/>
  <ProjectsSection/>
  <ContactPage/>
  </div>
</main>
  )
}
import Header from "./Compenent/Header"
import Section1 from "./Compenent/Section1"
import Section2 from "./Compenent/Section2"
import './App.css'
import Section3 from "./Compenent/Section3"
import Services from "./Compenent/Services"
import Section4 from "./Compenent/Section4"
import Team from "./Compenent/Team"
import Project from "./Compenent/Project"
import { Footer } from "./Compenent/Footer"
import Footer1 from "./Compenent/Footer1"
import { Outlet } from "react-router-dom"
import Blog from "./Compenent/Blog"
import ClinedeRev from "./Compenent/ClinedeRev"
import ProjectCard from "./ProjectCard"






function App() {
 
  return (
    <> 
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Services/>
      <Section4/>
      <Team/>
      <Project/>
      <ProjectCard/>
      <ClinedeRev/> 
      <Blog/>
      <Footer/> 
     
    </>
  )
}

export default App

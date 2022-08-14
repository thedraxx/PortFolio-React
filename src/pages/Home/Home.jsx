import React from 'react'
import Bio from './Bio/Bio'
import Contact from './contact/Contact'
import Experience from './experience/Experience'
import Footer from './footer/Footer'
import Skills from './skills/Skills'
import { SuperContainer } from './style'

const Home = () => (
   <SuperContainer>
    <Bio />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
   </SuperContainer>
)
export default Home

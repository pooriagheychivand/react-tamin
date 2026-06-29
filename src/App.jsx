import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import 'swiper/css'
import 'swiper/css/grid'
import Herosection from './components/Herosection/Herosection'
import Selection from './components/Selection/Selection'
import Kurtop from './components/Kurtop/Kurtop'
import Companies from './components/Companies/Companies'
import Section from './components/section/Section'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
    <Header />
    <Herosection />
    <Selection />
    <Kurtop />
    <Companies />
    <Section />
    <Footer />
    </>
  )
}

export default App

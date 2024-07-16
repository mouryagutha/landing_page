import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Footer from './Components/Testmonial'
import Testmonial from './Components/Testmonial'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <div className="max-w-7xl mx-auto pt-20 px-6">
   <HeroSection/>
   <Features/>
   <Workflow/>
   <Pricing/>
   <Testmonial/>
   <Footer/>
   </div>
   
   </> 
  )
}

export default App

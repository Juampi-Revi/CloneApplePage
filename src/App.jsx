import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import HowltWorks from "./components/HowltWorks"
import Footer from "./components/Footer"

import * as Sentry from '@sentry/react';
import Features from "./components/Features";

const App = () => {
  return (
    <main className="bg-black">
      < Navbar />
      < Hero />
      < Highlights />
      <Model />
      <Features />
      <HowltWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App)

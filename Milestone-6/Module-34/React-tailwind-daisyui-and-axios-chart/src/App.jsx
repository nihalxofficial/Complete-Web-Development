import { Suspense } from 'react'
import './App.css'
import MyNav from './components/MyNav/MyNav'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import ResultChart from './components/ResultChart/ResultChart'

const pricingPromise = fetch("./PricingData.json").then(res => res.json())

function App() {

  return (
    <>
      <header>
        {/* <Navbar></Navbar> */}
        <MyNav></MyNav>
      </header>

      <main className="space-y-10 mt-20">
        <ResultChart></ResultChart>

        
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Pricing pricingPromise={pricingPromise}></Pricing>
        </Suspense>

        

      </main>

        <footer>

        </footer>

    </>
  )
}

export default App

import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';
import Loading from './components/Loading/Loading';
import { ToastContainer } from 'react-toastify'


const fetchPlayer = async() => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(5000000)

  return (
    <div className='space-y-8'>
      <Navbar coin={coin}></Navbar>
      <Suspense fallback={<Loading></Loading>} >

      <Players coin={coin} setCoin={setCoin} playerPromise = {playerPromise}></Players>
      </Suspense>

      <ToastContainer />
    </div>
  )
}

export default App

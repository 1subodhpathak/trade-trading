// import { useEffect, useState } from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import HeaderView from './pages/home/HeaderView'

function App() {
  // const [message, setMessage] = useState();

  // useEffect(() => {
  //   fetch('http://localhost:3000/')
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  return (
    <main className='max-w-8xl mx-auto'>
      {/* <h1>{message}</h1> */}
     <HeaderView/>
     <Dashboard/>
    </main>
  )
}

export default App

import { useState, useEffect} from 'react'
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { Routes, Route, Navigate } from 'react-router-dom'
import Details from './pages/Details'
import Error from './pages/Error'
import CapitalDetails from './pages/CapitalDetails'
import ThemeChanger from './components/ThemeChanger/ThemeChanger'

function App() {

  const[cntData, setCntData] = useState([])
  const[region, setRegion] = useState(null)

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json")
        .then(res => res.json())
        .then(item => setCntData(item))
  }, [])

  return (
    <>
    <Header setRegion={setRegion} cntData={cntData} />
    <ThemeChanger />
    <Routes>
      <Route path='/' element={ <Navigate to={'/countries'} />} />
      <Route path='/countries' element={<Main region={region} cntData={cntData} />} /> 
      <Route path='/countries/:region' element={<Main region={region} cntData={cntData} />} />
      <Route path='/details'>
        <Route index path=':alpha3Code' element={<Details cntData={cntData} />} />
        <Route path=':alpha3Code/:capital' element={<CapitalDetails cntData={cntData} />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App

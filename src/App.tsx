import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import ProposPage from './pages/Propos/ProposPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Portfolio-React/" element={<HomePage/>}/>
          <Route path="Portfolio-React/a-propos" element={<ProposPage/>}/>
        </Routes>
        <Footer></Footer>
      </div>
  )
}

export default App

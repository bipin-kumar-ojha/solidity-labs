import './App.css'
import Header from './components/layout/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/layout/Footer/Footer';

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

import './App.css';
import { useLocation } from 'react-router-dom';
import Card from './routes/single/Card'; 
import Home from './routes/home/Home';
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { pathname } = useLocation(); 

  return (
    <>
      {pathname === '/card' && <Nav />} 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card />} />
      </Routes>
    </>
  );
}

export default App;

//3.Router 적용
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {Detail} from './pages/Detail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

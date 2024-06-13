import './App.css';
import Home from './pages/Home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Sora from './pages/Sora';
import Save from './pages/Save';
import Athkar from './pages/Athkar';
import Theker from './pages/Theker';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/sora' element={<Sora/>}/>
          <Route path='/save' element={<Save/>}/>
          <Route path='/athkar' element={<Athkar/>}/>
          <Route path='/theker' element={<Theker/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;

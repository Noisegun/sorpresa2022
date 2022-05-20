import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Rutas, AldeaObispo, Malaga, SanSebastian, 
         Covadonga, Galicia, Sevilla, LaRioja, Valdepenas,
         Zaragoza, Valencia, CostaBrava, Merida } from './components/navigation';
import Jarama from './components/Jarama';
import Conan from './components/Conan';
import Lavanda from './components/Lavanda';
import Racing from './components/Racing';
import Atazar from './components/Atazar';
import Metropolitano from './components/Metropolitano';
import Escorial from './components/Escorial';
import Buitrago from './components/Buitrago';
import Robledo from './components/Robledo';
import PlanLibre from './components/PlanLibre';
import Restaurantes from './components/Restaurantes';
import SorpresasAdicionales from './components/SorpresasAdicionales';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Rutas />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Restaurantes" element={<Restaurantes/>} />
          <Route path='/AldeaObispo' element={<AldeaObispo/>} />
          <Route path='/Malaga' element={<Malaga/>} />
          <Route path="/SanSebastian" element={<SanSebastian />} />
          <Route path="/Covadonga" element={<Covadonga/>} />
          <Route path="/Galicia" element={<Galicia/>} />
          <Route path="/Sevilla" element={<Sevilla/>} />
          <Route path="/LaRioja" element={<LaRioja/>} />
          <Route path="/Valdepenas" element={<Valdepenas/>} />
          <Route path="/Zaragoza" element={<Zaragoza/>} />
          <Route path="/Valencia" element={<Valencia/>} />
          <Route path="/CostaBrava" element={<CostaBrava/>} />
          <Route path="/Merida" element={<Merida/>} />
          <Route path="/Jarama" element={<Jarama/>} />
          <Route path="/Conan" element={<Conan/>} />
          <Route path="/Lavanda" element={<Lavanda/>} />
          <Route path="/Racing" element={<Racing/>} />
          <Route path="/Buitrago" element={<Buitrago/>}/>
          <Route path="/Atazar" element={<Atazar/>}/>
          <Route path="/Robledo" element={<Robledo/>} />
          <Route path="/Metropolitano" element={<Metropolitano/>} />
          <Route path="/Escorial" element={<Escorial/>} />
          <Route path="/PlanLibre" element={<PlanLibre/>} />
          <Route path="/SorpresasAdicionales" element={<SorpresasAdicionales/>} />
        </Routes>
    </Router>
  </>
);
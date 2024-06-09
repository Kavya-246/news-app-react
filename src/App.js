import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewNews from './ViewNews';
import ViewDynamics from './components/ViewDynamics';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      
      <Route path='/ViewNews' element={<ViewNews/>}/>
      <Route path='/ViewDynamics' element={<ViewDynamics/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

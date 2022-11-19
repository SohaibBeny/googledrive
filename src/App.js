import './App.css';
import{
  Routes,
  Route,
}from "react-router-dom";
import Home from './Componenets/Home';
import Home1 from './Componenets/Home1';
import Home2 from './Componenets/Home2';
import Home3 from './Componenets/Home3';
// import Home4 from './Componenets/Home4';
import Home4i from './Componenets/Home4i';
import Home5 from './Componenets/Home5';
import Storage from './Componenets/Storage';

import Dashboard from './view/Dashboard';


function App() {
  return (
    <>
    <Routes>
      <Route path='' element={<Dashboard/> }>
      {/* <Route path='' element={<Home/> }/> */}
      <Route path='home' element={<Home/> }/>
      <Route path='home1' element={<Home1/> }/>
      <Route path='home2' element={<Home2/> }/>
      <Route path='home3' element={<Home3/> }/>
      {/* <Route path='home4' element={<Home4/> }/> */}
      <Route path='home4i' element={<Home4i/> }/>
      <Route path='home5' element={<Home5/> }/>
      <Route path='Storage' element={<Storage/> }/>
      </Route>
    </Routes>
    </>
  );
}

export default App;

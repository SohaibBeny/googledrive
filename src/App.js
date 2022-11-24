import './App.css';
import{
  Routes,
  Route,
}from "react-router-dom";
import Drive from './Componenets/Drive';
import Computer from './Componenets/Computer';
import ShareMe from './Componenets/ShareMe';
import Recent from './Componenets/Recent';
// import Starred1 from './Componenets/Starred1';
import Starred from './Componenets/Starred';
import Trash from './Componenets/Trash';
import Storage from './Componenets/Storage';
import Dashboard from './view/Dashboard';
import BackUp from './Componenets/BackUp/BackUp';


function App() {
  return (
    <>
    <Routes>
      <Route path='' element={<Dashboard/>} >

      {/* <Route path='' element={<Home/> }/> */}

      <Route path='' element={<Drive/> }/>
      {/* 2nd path empty is lye deya hai k wo as home screen show ho */}

      <Route path='Computer' element={<Computer/> }/>

      <Route path='ShareMe' element={<ShareMe/> }/>

      <Route path='Recent' element={<Recent/> }/>
      {/* <Route path='home4' element={<Home4/> }/> */}

      <Route path='Starred'  element={<Starred/> }/>

      <Route path='Trash' element={<Trash/> }/>

      <Route path='Storage' element={<Storage/> }/>

      <Route path='/BackUp' element={<BackUp/>}/>
      
      </Route>
    </Routes>
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import Bridal from './components/bridal';
import Blog from './components/blog';
import Contact from './components/contact';
import HimServices from './components/himServices';
import ServiceMid from './pages/serviceMid';
import Confirm from './components/confirm';


function App() {
  return (
    <>
     <BrowserRouter basename='/Parlour-site'>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/bridal' element={<Bridal/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
       <Route path='/himservices' element={<HimServices/>}/>
       <Route path="/hair" element={<ServiceMid/>}/>
       <Route path="/confirm" element={<Confirm/>}/>

     </Routes>
     
     </BrowserRouter>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import Error from "../routes/Error";
import Home from "../routes/Home";


import './styles.scss'

const HomePage=()=>  (
  
  <Routes>
    <Route path="/" element={<Home/>} /> 
        
    <Route path="*" element={<Error/>} />
  </Routes>

);

export default HomePage;
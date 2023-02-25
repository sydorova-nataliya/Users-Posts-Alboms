import { Route, Routes } from "react-router-dom";

import Error from "../routes/Error";
import Home from "../routes/Home";
import UserPosts from "../routes/Home/UserPosts";

import './styles.scss'

const HomePage=()=>  (
  
  <Routes>
    <Route path="/" element={<Home/>} /> 

    <Route path="/posts/:userId" element={<UserPosts />} /> 

    <Route path="*" element={<Error/>} />
  </Routes>

);

export default HomePage;

import { BrowserRouter,Route, Routes } from 'react-router-dom'
import AboutUs from './pages/aboutUs'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home from "./pages/Home"
import ContactUs from './pages/contactUs'
import PrevEditions from './pages/prevEditions'






function App(){
  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route path='/ContactUs' element={<ContactUs/>}  />
          <Route path='/AboutUs' element={<AboutUs/>}  />
          <Route path='/PreviousEditions' element={<PrevEditions/>}  />
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
       </>
   
  )
}


export default App;
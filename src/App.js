import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App=()=>{

    return (
      <Router>
         <div>
        
           <NavBar/>
           {/* <News/> */}
           <Routes>
            <Route path="/Business" element ={<News  key="Business" category="Business"/>}/>
            <Route path="/Entertainment" element ={<News  key="Entertainment" category="Entertainment"/>}/>
            <Route path="/" element ={<News  key="General" category="General"/>}/>
            <Route path="/Health" element ={<News  key="Health" category="Health"/>}/>
            <Route path="/Science" element ={<News  key="Science" category="Science"/>}/>
            <Route path="/Sports" element ={<News  key="Sports" category="Sports"/>}/>
            <Route path="/Technology" element ={<News  key="Technology" category="Technology"/>}/>
            {/* <Route path="/" element ={<News />}/> */}
           </Routes>
       
          
        </div>
      </Router>
    
    )
      
}
 export default App;


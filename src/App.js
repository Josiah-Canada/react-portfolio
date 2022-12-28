import  React, { useState } from 'react';
import './App.scss';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Axios from "axios"
import fileDownload from 'js-file-download';


function App() {
  const [selectedTab, setSelectedTab] = useState("About")
  const download=(e)=>{
    e.preventDefault()
    Axios({
      url:"http://localhost:4000",
      method:"GET",
      responseType:"blob"
    }).then((res) => {
      console.log(res);
      fileDownload(res.data,"./new Resume.docx")
    })
  }
  
  return (
 

    <div>
      

       <Nav setSelectedTab= {setSelectedTab}></Nav>
      <main className="my-5" >
        
        {selectedTab === "About" && (<About></About>)}
        {selectedTab === "Portfolio" && (<Portfolio></Portfolio>)}
        {selectedTab === "Contact" && (<Contact></Contact>)}
        {selectedTab === "Resume" && (<Resume></Resume>)}
        <button onClick={(e) => download(e)}>Download Resume</button>
        
      </main>
    </div>
  );
  
}

export default App;
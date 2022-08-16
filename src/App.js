import { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const [selectedTab, setSelectedTab] = useState("About")

  return (
    <div id="tabs">

       <Nav setSelectedTab= {setSelectedTab}></Nav>
      <main className="my-5" >
        {selectedTab === "About" && (<About></About>)}
        {selectedTab === "Portfolio" && (<Portfolio></Portfolio>)}
        {selectedTab === "Contact" && (<Contact></Contact>)}
        {selectedTab === "Resume" && (<Resume></Resume>)}
      </main>
    </div>
  );
}

export default App;
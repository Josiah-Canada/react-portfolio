import { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  const [selectedTab, setSelectedTab] = useState("About")

  return (
    <div>

       <Nav setSelectedTab= {setSelectedTab}></Nav>
      <main className="my-5">
        {selectedTab === "About" && (<About></About>)}
        {selectedTab === "Portfolio" && (<Portfolio></Portfolio>)}
        {selectedTab === "Contact" && (<Contact></Contact>)}
      </main>
    </div>
  );
}

export default App;
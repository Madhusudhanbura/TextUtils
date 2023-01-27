import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './index.css';

  function App(){
    return(
      <>
      <Navbar title= "TextUtils"/>
      <div className='container'>
        <TextForm heading="Enter your text"/>
      </div>
      </>
    )
  }
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  
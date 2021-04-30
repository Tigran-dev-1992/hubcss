import React, { useState } from 'react';
import Content from './Components/Content/Contetent';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  
  return (
    <div className="app">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;

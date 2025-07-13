import React from 'react';
import Navbar from './components/molecules/navbar';
import ContentHome from './components/molecules/ContentHome';

function App() {
  return (
    <div className="bg-white min-h-screen text-black">
    <Navbar></Navbar>
    <ContentHome></ContentHome>
    </div>
  );
}

export default App;

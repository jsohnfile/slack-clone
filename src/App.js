import React from 'react';
import Header from './Header'; 
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      {/* Header */}
      <Header />
      <div className="app_body">
        <Sidebar />
      {/* Sidebar */}
      {/* React-Router -> Chat screen */}

      </div>

    </div>
  );
}

export default App;

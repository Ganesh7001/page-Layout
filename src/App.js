import './App.css';
import React from "react";
import Header from './header';
import Footer from './footer';
import Content from './content';
import Sidebar from './sidebar';
import Menu from './menu';

function App() {
  return (
    <div className="App">
    <div><Header/></div>
    <div><Menu/></div>
    <div><Content/></div>
    <div><Sidebar/></div>
    <div><Footer/></div>
    </div>
  );
}

export default App;

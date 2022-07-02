import React, {useState} from 'react';
import './App.css';
import "./component/Button_counter/button__counter"
import Button_counter from "./component/Button_counter/button__counter";
import { Fidback } from './component/Button_counter/Fidback_form';

let array = ["profile","message","news","setting"]
let saveTag = array.map(item => (<div><a href='#'>{item}</a></div>)) 


function App(props) {

  return (
    <div className="app_wrapper">
       
      <div className='app_header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png'></img>
      </div>
      <nav className='app_nav'>
        
        {saveTag}
       
        
        
      </nav>
      
      <div className='app_content'>
        <textarea className='area'></textarea>
        <button className='btn_input'>+</button>

       
        <Button_counter/>
        <Fidback />
      </div>
     
      
    </div>
  );
}

export default App;


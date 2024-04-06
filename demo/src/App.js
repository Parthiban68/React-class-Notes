// import logo from './logo.svg';
import './App.css';
import Bye from './comp/Arrow';
import Basic from './comp/Basic';
import Count from './comp/Count';
import Destructutre from './comp/Destructutre';
import Hello from './comp/Hello';
import Event from './comp/Event';
import Conditional from './comp/Conditional';
import Task1 from './comp/Task1';
import Task2 from './comp/Task2';
import React, { useState } from 'react'
import Jsx from './comp/Jsx';
import External from './comp/External';
import Table from './comp/Table';
import Task3 from './comp/Task3';
import State from './comp/State';
import Calculator from './comp/Calculator';
import Task5 from './comp/Task5';
import Task6 from './comp/Task6';

function App() {
  const [name,setName]= useState("on")

  return (
    // <div className="App">
    //   <h1>Wedding Invitation </h1>
    // <hr align="center" width="90%" />
    // <Basic/>
    // <Hello name={" parthiban"} age = {23}>
    //   <p>welcome to wedding</p>
    // </Hello>
    // <Hello name = {" Jeep kadathal jai krishna"} age = {45}/>
    // <Hello name =  {" Prozone Mall Santhosh"} age= {35}/>
    // <Hello name = {"chain snatching chandru"} age = {15}/>
    // <br/>
    // <Destructutre name = {"Silumisham Shiva"} age = {"Not interested in Marriage"}/>
    // <Bye name={" Yours parthiban"}>
    //   <h4>porathukulla Vaangada Peraandingalaa...!!</h4>
    // </Bye>
    // {/* <Count/> */}
    // <Event/>
    // {/* <Conditional/> */}
    // <Task1/>
    // <Task2 setName={setName} name={name}/>
    // <Jsx/>
    // <External admin = {false}/>
    // <Table/>
    // <Task3/>
    // <Calculator/>
    // </div>
    // <State/>
    // <Task5/>
    <Task6/>
  );
}

export default App;

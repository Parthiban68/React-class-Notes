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
import React, { useReducer, useState } from 'react'
import Jsx from './comp/Jsx';
import External from './comp/External';
import Table from './comp/Table';
import Task3 from './comp/Task3';
import State from './comp/State';
import Calculator from './comp/Calculator';
import Task5 from './comp/Task5';
import Task6 from './comp/Task6';
import Classnote1 from './comp/Classnote1';
import Classnote2 from './comp/Classnote2';
import Classnote3 from './comp/Classnote3';
import Classnote4 from './comp/Classnote4';
import Classnote5 from './comp/Classnote5';
import Classnote6 from './comp/Classnote6';
import Database from './comp/Database';
import Reducer from './comp/Reducer';
import Redobj from './comp/Redobj';
import A from './comp/A';
import B from './comp/B';
import C from './comp/C';
import CountDown from './comp/CountDown';
export const counterContext = React.createContext();

function App() {
  const [name, setName] = useState("on")
  const initialstate = 0
  const reducer = (state,action) =>{
    switch (action){
      case 'inc' : return state+1
      default :return state
    }
  }
  const [count,dispatch] = useReducer(reducer, initialstate)
  return (
    <>
     {/* <div className="App">
      <h1>Wedding Invitation </h1>
    <hr align="center" width="90%" />
    <Basic/>
    <Hello name={" parthiban"} age = {23}>
      <p>welcome to wedding</p>
    </Hello>
    <Hello name = {" Jeep kadathal jai krishna"} age = {45}/>
    <Hello name =  {" Prozone item Santhosh"} age= {350}/>
    <Hello name = {"chain snatching chandru"} age = {15}/>
    <Hello name = {"Boomika"} age = {121}/>
    <br/>
    <Destructutre name = {"Silumisham Shiva"} age = {"Not interested in Marriage"}/>
    <Bye name={" Yours parthiban"}>
      <h4>porathukulla Vaangada Peraandingalaa...!!</h4>
    </Bye>
    <Count/>
    <Event/>
    <Conditional/>
    <Task1/>
    <Task2 setName={setName} name={name}/>
    <Jsx/>
    <External admin = {false}/>
    <Table/>
    <Task3/>
    <Calculator/>
    </div>
    <State/>
    <Task5/>
    <Task6/>
    <Classnote1/>
    <Classnote2/>
    <Classnote3/>
    <Classnote4/>
    <Classnote5/> */}
  {/* <Database /> */}
  {/* <Reducer/> */}
  {/* <Redobj/> */}

  {count}
  <counterContext.Provider value={{count,dispatch}}>
    <A/>
    <B/>
    <C/>
  </counterContext.Provider>
  <CountDown/>
    
  </>
  );
}

export default App;

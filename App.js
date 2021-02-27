import React , { useState } from "react";
import './App.css';
import { Students } from './project/Students';

export const studentContext = React.createContext("")

function App() {

  const[value,setValue] = useState("");
  const[studentName,setStudentName]=useState([]);

  const myChange = (e) =>{
    setValue(e.target.value);
  }

  const mySubmit=(e) =>{
    e.preventDefault();
    setStudentName(names => [...names,value]);
  }
  
  return (
    <div className='App'>
    <form id='form' onSubmit={mySubmit}>
     <p className='title'>Course and students maintenace</p>
     <h1>Student:</h1>
      <input type='text' placeholder="Enter Name" onChange={myChange} />
      <button type='submit'> Add Name</button>
    </form>
    <studentContext.Provider value={studentName}>  
     <Students />
     </studentContext.Provider>
    
    </div>
  )
}

export default App;

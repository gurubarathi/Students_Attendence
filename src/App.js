import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const [students,setStudents]=useState([]);

   const addName =(name)=>{
    
    const sortedNames = [...students,name].sort();
     setStudents(sortedNames)
     
   }
  

   useEffect(()=>{ },[]);
   
  
   
  return (
    <div className="App">
       <div className='header'><h3>Attendance</h3></div>
       <Form addName={addName} />
       <List students={students} />
       
    </div>
  );
}

export default App;

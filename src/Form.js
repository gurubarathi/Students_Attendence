import React, { useState } from 'react'

function Form(props) {
    const [name,setName]=useState('');

    const handleInput=(event)=>{
        
      setName( event.target.value)
        
    }
    
  return (
    <div>
        <div>
            <form  onSubmit={ event => {
            event.preventDefault();
            if(name === '') return;
            props.addName(name);
            setName('');
             }
            } className='forms'>

            <input type={'text'} onChange={handleInput} value={name} /> 
            <button >Add</button>
            </form>
        </div>
    </div>
  );
}

export default Form
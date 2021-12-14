import React, { useState } from 'react';

const ChoiceForm = (props) => {
  const {getUserChoice} = props
  const [choice, setChoice] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    return getUserChoice(choice)
  }
  
  const sanitizeState = () =>{
    setChoice(null);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3> Input either Rock, Paper, or Scissors </h3>
        <input 
        placeholder="Choice here"  
        onChange = {(e) => {
              setChoice(e.target.value)
            }} />
        <button>Submit</button>
        <button onClick={sanitizeState}>Reset</button>
      </form>
    </div>
  )
}

export default ChoiceForm;
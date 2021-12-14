import React, { useState } from 'react';

const ChoiceForm = (props) => {
  const {getUserChoice} = props
  const [choice, setChoice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    return getUserChoice(choice)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3> Input Rock, Paper, or Scissors </h3>
        <input 
        placeholder="Choice here"  
        onChange = {(e) => {
              setChoice(e.target.value)
            }} />
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default ChoiceForm;
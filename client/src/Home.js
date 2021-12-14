import React, { useEffect, useState, useNavigate } from 'react'
import ChoiceForm from './UserChoice';

const Home = () => {
  const [comChoice, setComChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [winner, setWinner] = useState("Who Will Win?");
  
  
  useEffect(() => {
    getComputerChoice();
  }, []);

  useEffect(()=> {
    { userChoice ? getWinner() : console.log('waiting for choice to be made') };
  }, [userChoice]);
  
  const getComputerChoice = () => {
    let choice = Math.floor((Math.random()*3) + 1)
      switch (choice){
        case 1:
          choice = "Rock";
          break;
        case 2:
          choice = "Scissors";
          break;
        default:
          choice = "Paper"
      }
    setComChoice(choice)
  } 
  
  const getUserChoice = (choice) => {
    setUserChoice(choice)
  }
  
  const getWinner = () =>{
  console.log("com is ", comChoice)
  console.log("user is ", userChoice)
    switch (true) {
      case userChoice === comChoice:
        setWinner("Tie!")
        break;
      case userChoice === 'Paper' || 'paper': 
        if (comChoice === "Rock"){
        setWinner("You Won!")
          break;
      } else if (comChoice === "Scissors"){
        setWinner('You Lost!')
        break;
      } 
      case userChoice === 'Rock' || 'rock': 
        if (comChoice === "Paper"){
        setWinner("You Lost!")
        break;
      } else if (comChoice === "Scissors"){
        setWinner("You Won!")
        break;
      } 
      case userChoice === 'Scissors' || 'scissors': 
        if (comChoice === "Rock"){
        setWinner("You Lost!")
        break;
      } else if (comChoice === "Scissors"){
        setWinner("You Won!")
        break;
      } 
      default:
        console.log("error in switch")
    }
  }
    
    return (
      <div> 
        <h1> Welcome! </h1>
        <button> Click to begin (Toggle Here) </button>
        <h2>{userChoice? (`Computer Choice: ${comChoice}`) : "Computer Choice: "}</h2>   
        <h2>{userChoice? (`User Choice: ${userChoice}`) : "User Choice: "}</h2>   
        <h3>{winner}</h3>
        <ChoiceForm getUserChoice={getUserChoice}/>
      </div>
    )
};


export default Home; 
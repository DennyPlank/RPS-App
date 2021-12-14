import React, { useEffect, useState, useNavigate } from 'react'
import ChoiceForm from './UserChoice';
import { useToggle } from "./Toggle";

const Home = () => {

  const [comChoice, setComChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [winner, setWinner] = useState("Who Will Win?");
  const [showClass, toggleClass] = useToggle(false);
  const [userCount, setUserCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);
  const [tieCount, setTieCount] = useState(0);
  
  
  useEffect(() => {
    getComputerChoice();
  }, [userChoice]);

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
        setTieCount(tieCount + 1)
        break;
      case userChoice === 'Paper' || 'paper': 
        if (comChoice === "Rock"){
        setWinner("You Won!")
        setUserCount(userCount + 1)

          break;
      } else if (comChoice === "Scissors"){
        setWinner('You Lost!')
        setComputerCount(computerCount + 1)

        break;
      } 
      case userChoice === 'Rock' || 'rock': 
        if (comChoice === "Paper"){
          setWinner("You Lost!")
          setComputerCount(computerCount + 1)
        break;
        setUserCount(userCount + 1)
      } else if (comChoice === "Scissors"){
        setWinner("You Won!")
        setUserCount(userCount + 1)
        break;
      } 
      case userChoice === 'Scissors' || 'scissors': 
        if (comChoice === "Rock"){
          setWinner("You Lost!")
          setComputerCount(computerCount + 1)
        break;
      } else if (comChoice === "Scissors"){
        setWinner("You Won!")
        setUserCount(userCount + 1)
        break;
      } 
      default:
        console.log("error in switch")
    }
  }
    
    return (
      <div> 
        <h1> Welcome! </h1>
        <button onClick={toggleClass}> Click to begin </button>
        {showClass && <ChoiceForm getUserChoice={getUserChoice}/>}
        <h2>{userChoice? (`Computer Choice: ${comChoice}`) : "Computer Choice: "}</h2>   
        <h2>{userChoice? (`User Choice: ${userChoice}`) : "User Choice: "}</h2>   
        <h3>{winner}</h3>
        <h4> Computer Wins: {computerCount}</h4>
        <h4> User Wins: {userCount}</h4>
        <h4> Ties: {tieCount} </h4>
      </div>
    )
};


export default Home; 
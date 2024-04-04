"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const FormComponent = () => {

 
    // State for input values
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');


  
    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Display entered names in console
        console.log('Player 1:', player1Name);
        console.log('Player 2:', player2Name);
    };

    // Function to handle changes in Player1 input
    const handlePlayer1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Limit input to 16 characters
        if (event.target.value.length <= 16) {
            setPlayer1Name(event.target.value);
        }
    };
  
    // Function to handle changes in Player2 input
    const handlePlayer2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
      // Limit input to 16 characters
      if (event.target.value.length <= 16) {
        setPlayer2Name(event.target.value);
      }
    };
  
    return (
        <div className="container">
        <h2>Enter Player Names</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="player1" className="form-label">Player 1 Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="player1"
                    value={player1Name}
                    onChange={handlePlayer1Change}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="player2" className="form-label">Player 2 Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="player2"
                    value={player2Name}
                    onChange={handlePlayer2Change}
                />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <button type="button" className="btn btn-secondary">Single Player Mode</button>
            </div>
        </form>
    </div>
    );
  };
  
  export default FormComponent;
"use client";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { savePlayerNames } from '../actions/savePlayerNamesActions';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FormComponentProps {
  savePlayerNames: (player1Name: string, player2Name: string) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ savePlayerNames }) => {
  // State for input values
  const [player1Name, setPlayer1Name] = useState<string>('');
  const [player2Name, setPlayer2Name] = useState<string>('');

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Dispatch action to set player names in Redux state
    savePlayerNames(player1Name, player2Name);
    // Clear input fields after submission
    setPlayer1Name('');
    setPlayer2Name('');
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

export default connect(null, { savePlayerNames })(FormComponent);
<template>
    <div class="about">
      <h1>This is the home page</h1>
      <p>Welcome to our website!</p>
      <button class="click-btn">Click Me</button>
    </div>
  </template>
  
  <style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .about h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .about p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .click-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .click-btn:hover {
    background-color: #0056b3;
  }
  </style>
  
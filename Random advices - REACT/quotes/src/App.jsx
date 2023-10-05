import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json()) // converting response to json type
      .then(data => {
        const { advice } = data.slip; // destructuring advice from response.data.slip.advice
        setAdvice(advice); // setting the current state to advice
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => { //react hook instead of componentDidMount()
    fetchAdvice();
  }, []); 

  return (
    <div className="h-screen m-0 p-0 box-border flex justify-center align-center text-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="bg-white w-[40%] h-[25%] flex align-center items-center flex-col rounded-lg p-[2%] shadow-lg shadow-black">
        <h1 className="flex align-center items-center h-[70%] text-blue-400 text-2xl">{advice}</h1>
        <button className="group relative mt-[2%] h-14 w-48 overflow-hidden rounded-3xl bg-slate-300 text-md" onClick={fetchAdvice}>
          <div className="absolute inset-0 w-3 bg-slate-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-blue-400 font-bold group-hover:text-white">GET ADVICE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
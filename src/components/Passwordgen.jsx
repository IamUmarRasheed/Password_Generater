import React, { useCallback, useEffect, useRef, useState } from "react";
import '../../src/App.css'

function Passwordgen() {
  const [length, setLength] = useState(4);
  const [charallow, setChar] = useState(false);
  const [numallow, setNumber] = useState(false);
  const [Password, setPassword] = useState("");
  const myRef = useRef(null);

  const handlecopy = useCallback(() => {
    if (myRef.current) {
      myRef.current.select();
      window.navigator.clipboard.writeText(Password)
     
    }
  }, [Password]);

  const passwordGenrate = useCallback(() => {
    let pas = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let specialChars = "!@#$%^&*()";
    let numbers = "1234567890";

    if (charallow) {
      str += specialChars;
    }
    if (numallow) {
      str += numbers;
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      let newstr = str.charAt(index);
      pas += newstr;
    }
    setPassword(pas);
  }, [length, charallow, numallow]);

  useEffect(() => {
    passwordGenrate();
  }, [length, charallow, numallow, passwordGenrate]);

  return (
    <div className="w-[80%] md:w-[60%] mx-auto border border-gray-300 rounded-lg shadow-lg py-10 px-6 bg-white">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6 gradient-text">Password Generator</h1>
      <div className="flex flex-col items-center mb-6">
        <input
          type="text"
          id="password"
          name="password"
          value={Password}
          className="bg-gray-100 border border-gray-300 text-gray-900 text-lg focus:outline-none rounded-lg block w-full md:w-3/4 lg:w-2/4 px-4 py-2 mb-4"
          placeholder="Generated Password"
          ref={myRef}
          readOnly
        />
        <button
          onClick={handlecopy}
          className="bg-blue-600 text-white text-lg font-semibold rounded-lg px-6 py-2 hover:bg-blue-700 transition duration-300"
        >
          Copy to Clipboard
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex items-center space-x-2">
          <label htmlFor="length" className="text-lg font-medium text-gray-700">Length</label>
          <input
            type="range"
            id="length"
            name="length"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="w-full"
          />
          <span className="text-lg font-medium text-gray-700">{length}</span>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="char"
            name="char"
            checked={charallow}
            onChange={() => setChar(prev => !prev)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="char" className="text-lg font-medium text-gray-700">Special Characters</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="num"
            name="num"
            checked={numallow}
            onChange={() => setNumber(prev => !prev)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="num" className="text-lg font-medium text-gray-700">Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default Passwordgen;

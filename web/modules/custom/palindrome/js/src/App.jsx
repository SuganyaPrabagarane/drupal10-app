import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);
  const [error, setError] = useState(""); 

  const checkPalindrome = () => {
    if (!text.trim()) {
      setError("Please enter a word or phrase.");
      setIsPalindrome(null);
      return;
    }

    setError(""); 
   const word = text.toLowerCase();
    const reversedWord = word.split("").reverse().join("");
    setIsPalindrome(word === reversedWord);
  };

  const handleDelete = () => {
    setText("");
    setIsPalindrome(null);
    setError("");
  };

  return (
    <div className="container">
      {/* <h2>Palindrome Checker</h2> */}
      
      <input
        type="text"
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a word or phrase"
      />
     
        <button className="check-button" onClick={checkPalindrome}>Check</button>
        <button className="save-button" onClick={handleDelete}>Clear</button>
   

      {error && (
        <p className="error-message">{error}</p>
      )}

      {isPalindrome !== null && !error && (
        <p className={`palindrome-result palindrome-${isPalindrome}`}>
          {isPalindrome
            ? `"${text}" is a palindrome!`
            : `"${text}" is not a palindrome.`}
        </p>
      )}
    </div>
  );
}

export default App;

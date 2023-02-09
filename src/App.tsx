import { useState } from "react";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  console.log(wordToGuess);

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;

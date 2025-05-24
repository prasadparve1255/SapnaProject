import React, { useState } from 'react';

function Search() {
  const [fruits, setFruits] = useState([]);
  const [text, setText] = useState("");

  const addFruits = () => {
    const input = prompt("Enter fruits separated by commas:");
    if (input) {
      const fruitArray = input
        .split(',')
        .map(fruit => fruit.trim());

      // Shuffle fruits randomly
      const shuffled = [...fruitArray].sort(() => Math.random() - 0.5);

      setFruits(shuffled);
    }
  };

  const filtered = fruits.filter(fruit =>
    fruit.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div>
        <br/>
        <hr/>
        <h3>Add Fruits:</h3>
      <button onClick={addFruits}>Add Fruits</button>
      <br /><br />
      <input type="text"placeholder="Search fruits..." onChange={(e) => setText(e.target.value)}
  style={{ width: "200px", padding: "8px" }} 
/>

      <ul>
        {filtered.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;

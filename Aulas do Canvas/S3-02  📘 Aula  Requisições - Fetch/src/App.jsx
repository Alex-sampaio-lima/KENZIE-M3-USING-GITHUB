import { useState } from "react"

function App() {

  const getFruits = async () => {
    const response = await fetch("https://fruit-fake-api.onrender.com/fruits");
    const json = await response.json();
    setFruits(json);
  }

  const [fruits, setFruits] = useState([]);

  return (
    <>
      <button onClick={getFruits}>Requisições</button>
      {fruits.map(fruits =>(
        <li key={fruits.id}>
          {fruits.name}
          {fruits.price}
        </li>
      ) )}
    </>
  )
}

export default App

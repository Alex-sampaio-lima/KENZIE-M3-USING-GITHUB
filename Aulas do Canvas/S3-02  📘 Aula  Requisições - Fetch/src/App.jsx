import { useState } from "react"
import { api } from "./services/api"
function App() {

  const getFruits = async () => {
    // const response = await fetch("/fruits");
    // const json = await response.json();

    const { data } = await api.get("fruits")
    console.log(data)
    setFruits(data);
  }

  const removeListFruits = () => {
    setFruits([])
  }

  const [fruits, setFruits] = useState([]);

  return (
    <>
      <button onClick={getFruits}>Requisições</button>
      <button onClick={removeListFruits}>fechar</button>
      {fruits.map(fruits => (
        <li key={fruits.id}>
          <h1>{`Nome da fruta: ${fruits.name}`}</h1>
          <h2>{`Tipo de fruta: ${fruits.category}`}</h2>
          <h3>{`Preço da fruta: ${fruits.price}`}</h3>
        </li>
      ))}
    </>
  )
}

export default App

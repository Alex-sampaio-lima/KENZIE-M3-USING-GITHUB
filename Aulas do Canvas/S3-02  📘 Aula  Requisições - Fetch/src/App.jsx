import { useEffect, useState } from "react"
import { api } from "./services/api"
function App() {

  const [category, setCategory] = useState("");
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const getFruits = async () => {
      const { data } = await api.get("fruits", {
        params: {
          category: category !== "" ? category : undefined,
        }
      })
      setFruits(data);
    }
    getFruits()
  }, [category])

  const removeListFruits = () => {
    setFruits([])
  }

  return (
    <>
      <ul>
        <li>
          <button onClick={() => setCategory("")}>Todos</button>
        </li>
        <li>
          <button onClick={() => setCategory("vermelha")}>Vermelha</button>
        </li>
        <li>
          <button onClick={() => setCategory("amarela")}>Amarelas</button>
        </li>
      </ul>
      <ul>
        {fruits.map(fruits => (
          <li key={fruits.id}>
            <h1>{`Nome da fruta: ${fruits.name}`}</h1>
            <p>{`Tipo de fruta: ${fruits.category}`}</p>
            <p>{`Preço da fruta: ${fruits.price}`}</p>
          </li>
        ))}
        <button onClick={removeListFruits}>fechar</button>
      </ul>
    </>
  )
}

export default App

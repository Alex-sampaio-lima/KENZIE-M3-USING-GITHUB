import { useEffect, useState } from "react"
import { api } from "./services/api"
function App() {

  // useEffect(() => {
  //   const getFruits = async () => {
  //     const { data } = await api.get("fruits", {
  //       params: {
  //         category: category !== "" ? category : undefined,
  //       }
  //     })
  //     setFruits(data);
  //   }
  //   getFruits()
  // }, [category])

  // const removeListFruits = () => {
  //   setFruits([])
  // }

  const [category, setCategory] = useState("");
  const [fruits, setFruits] = useState([]);
  const [valueCircle, setvalueCircle] = useState(5)
  const [total, setTotal] = useState([])

  useEffect(() => {
    const sumCircle = () => {
      let soma 
      let pi = 3.14
      soma = pi * (valueCircle ** 2)
      setvalueCircle(valueCircle)
      setTotal([...total, soma])
      console.log(pi)
      console.log(total)
      console.log(soma)
    }
    sumCircle()
  }, [valueCircle])

  useEffect(() => {
    const remove = () => {
      if (setTotal == 0) {
        setvalueCircle()
        setTotal([])
      }
    }
    remove()
  }, [valueCircle])




  return (
    <>
      <ul>
        <input type="number"
          value={valueCircle}
          placeholder="Digite um número"
          onChange={(event) => setvalueCircle(event.target.value)} />
      </ul>
      <button>Limpar</button>
      <h1>{valueCircle}</h1>
      <ul>
        <h1>{total}</h1>
      </ul>


      {/* <h1>{total}</h1> */}
      {/* <ul>
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
      </ul> */}
    </>
  )
}

export default App

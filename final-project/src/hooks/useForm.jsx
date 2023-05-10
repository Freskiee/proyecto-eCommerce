// REGLAS PARA CREAR UN HOOK DE REACT
// 1. Custom Hook es una función que utiliza otros hooks de React
// 2. El nombre de la función debe comenzar con la palabra use
// 3. Siempre deben de ser funciones (a partir de React 16.8 usamos hooks)
// 4. Deben ser reutilizables, no para casos muy especificos.
// 5. Deben retornar algo, ya sea un valor, un objeto, un array, una función etc.
import { useState } from 'react'

function useForm (callback, defaults) {
  // Estado único para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Función que se ejecutara cuando se envie el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // Evita que se recargue la página
    callback(input)
  }

  // Función que se ejecutara cuando se escriba en los inputs
  // (event) => setEmail(event.target.value)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm

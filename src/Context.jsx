import { createContext, useState } from 'react'

const Context = createContext(null)
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [name, setName] = useState('')

  const setUser = (name) => {
    setName(name)
  }

  return <Context.Provider value={{ name, setUser }}>{children}</Context.Provider>
}

export { Context, Provider }

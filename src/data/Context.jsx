import { createContext, useContext, useReducer } from "react"
import { Reducer } from "./Reducer"
import { products } from "./constant"

const Cart = createContext()
export const CartState = () => useContext(Cart)

const Context = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, { products: products, cart: [] })
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
}

export default Context
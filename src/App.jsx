import Nav from "./components/Nav";
import Content from "./components/Content";
import './App.css'
import { useState } from "react";

function App() {

  const [quantity, setQuantity] = useState(0)
  
  return (
    <div>
      <Nav quantity={quantity}/>
      <Content />
    </div>
  )
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import products from './data'

function App() {
  // add state in here
  const [productList, setProductList] = useState(products)
  // handleChange function
  function handleInput(value, i) {
    setProductList(c => {
      c[i].price = value
      return [...c]
    })
  }
// handleSubmit



  // return
  return ( 
    <div> 
      <h1> Big Time Shopping </h1> 

      <form>
        <ul>
          {productList.map((item, i) => (
            <li key={item.itemName}>
              {item.itemName} {item.price}
              <br />
              <input 
                type="text" 
                defaultValue={item.price}
                onInput={(e)=>{handleInput(e.target.value, i)}}
              />
            </li>
          ))}
        </ul>
      </form>
    </div> 
    )
    
}

export default App;

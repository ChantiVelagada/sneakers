import { useState } from "react"


const Info = () => {
  const [count, setCount] = useState(0)

  function cartQuantity() {
    setCount((prevCount) => {
      if(prevCount < 0){
        return 1
      }else{
        return prevCount + 1
      }
    })
  }

  function removeFromCart() {
    setCount((prevCount) => {
      if(prevCount <=0){
        return 0
      }else{
        return prevCount - 1
      }
    })
  }


  return (
    <div className="info">
        <h2>Fall Limited <span>Sneakers</span></h2>
        <p className='shoe-info'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <span className='offer-price'>$125</span>
        <span className='offer'>50%</span>
        <p className='original-price'>$250.00</p>
        <div>
          <button 
            className="add-to-cart">
            <img onClick={cartQuantity} src='./images/icon-plus.svg' />
            {count}
            <img onClick={removeFromCart} src='./images/icon-minus.svg'/>
          </button>
          <button  className="btn"><img src='./images\icon-cart.svg' />Add to Cart</button>
        </div>
    </div>
  )
}

export default Info
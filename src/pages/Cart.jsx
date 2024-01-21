import React from 'react'
import Header from '../Components/Header'
import CartItem from './CartItem'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { CalculateTotalPrice } from '../reducer/Cart'


function Cart() {

    const cartItems = useSelector((state) => state.cart.cartItem)
    const dispatch = useDispatch()
    
    useEffect (() =>{
     dispatch(CalculateTotalPrice())
    },[]
    )
    const price = useSelector((state) => state.cart.totalPrice)

  return (
    <div>
        <Header/>
    {
    cartItems.length > 0 &&  cartItems.map((items) => {
        return <CartItem items={items}/>
      })
    }

    {
    
    cartItems.length > 0 ?  <div><p className='ml-[250px] mt-5'>Total Price</p>
    <hr className='h-[2px] mx-[200px] bg-black text-black '/>
       <h1 className='text-3xl font-bold ml-[250px] my-10 '>{price}</h1>
       </div>
       :
       <p className='text-3xl text-center pt-[100px] font-bold text-black'>Your Cart is empty</p>
      
    }
    </div>
  )
}

export default Cart
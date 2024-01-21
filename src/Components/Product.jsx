import React from 'react'
import { addCart } from '../reducer/Cart'
import { useDispatch } from 'react-redux'

function Product({product}) {
  const Dishpatch=useDispatch()
  const handleadcart=()=>{
    Dishpatch(addCart(product))
  }

  return (
    <div className=' sm:ml-[70px]'>
    <div className='sm:mt-10  mt-12 w-[300px] border-2 border-gray-500 p-3 rounded'>
      <img src={product.image}/>
      <div className='flex justify-between mt-3  text-2xl'>
   <h1 className='font-semibold'>{product.name}</h1>
    <h1 className='font-bold'>{"$"+product.price}</h1>
   </div>
   <button onClick={handleadcart} className='bg-yellow-400 cursor-pointer px-24 text-white rounded mt-5 py-2 '>Add to Cart</button>
    </div> 
    </div>
  )
  
  //Distructing wa datada datebase ka so qaad
}

export default Product
import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const img1 = "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const img2 = "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


const Home = () => {

  const productList = [
    {
      name: "mac book",
      price: 1200,
      imgSrc: img1,
      id: "234134234ds"
    },
    {
      name: "Sneakers",
      price: 300,
      imgSrc: img2,
      id: "234gf134234ds"
    }
  ]

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    dispatch({type: "addToCart", payload: options})
    dispatch({type: "calculatePrice"})
    toast.success("Added to Cart!")
  }

  return (
    <div className='home'>
      {
        productList.map(i => (
          <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler} />
        ))
      }
    </div>
  )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className='productCard'>
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({name,price,id,quantity:1,imgSrc})} >Add to Cart</button>
  </div>
)

export default Home
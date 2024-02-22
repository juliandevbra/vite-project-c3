import CardStyles from '../Styles/Card.module.css'
import Counter from './Counter'

const inlineExample = {
    // backgroundColor: 'white'
}

const Card = ({ pizza, setCart }) => {

  const addCart = () => {
    setCart((prevCart) => [...prevCart, pizza])
  }
  return (
    <div className={CardStyles.cardContainer} style={inlineExample}>
        <img src={pizza.img} alt="" className={CardStyles.cardImg}/>
        <h3>{pizza.tipo}</h3>
        <h4 style={{color: 'black'}}>{pizza.precio}</h4>
        <Counter/>
        <button className={CardStyles.cartBtn} onClick={addCart}>Añadir al carrito</button>
    </div>
  )
}

export default Card

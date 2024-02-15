import CardStyles from '../Styles/Card.module.css'

const inlineExample = {
    backgroundColor: 'crimson'
}

const Card = ({pizza}) => {
    console.log(CardStyles)
  return (
    <div className={CardStyles.cardContainer} style={inlineExample}>
        <img src={pizza.img} alt="" className={CardStyles.cardImg}/>
        <h3>{pizza.tipo}</h3>
        <h4>{pizza.precio}</h4>
    </div>
  )
}

export default Card

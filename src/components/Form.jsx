import { useState } from "react"

const btnStyle = {backgroundColor: '#FDCA40'}

const Form = () => {
    // const [name, setName] = useState('')
    // const [address, setAddress] = useState('')

    const [customer, setCustomer] = useState({
        name: '',
        address: '',
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const numRegex = /[0-9]/
        if(customer.name.length >= 3 && numRegex.test(customer.address) && customer.address.includes(' ')){
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }
    console.log(customer)
  return (
    <div>
        {show ? null :
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input type="text" onChange={(event) => setCustomer({...customer, name: event.target.value})}/>
                <label>Direccion:</label>
                <input type="text" onChange={(event) => setCustomer({...customer, address: event.target.value})}/>
                <button style={btnStyle}>Enviar</button>
            </form>
        }

        {show ? 
            <>
                <h4>Gracias, {customer.name}!</h4>
                <h4>En 20 minutos estará llegando tu pedido a {customer.address}.</h4>
            </>
        : <p>Coloque sus datos para enviar su pedido.</p>
        }
        {err && <h4 style={{color: 'red'}}>Debe colocar la información correctamente</h4>}
    </div>
  )
}

export default Form


// {condicion ? true : false}
// {condicion && true}
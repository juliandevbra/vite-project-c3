import './App.css'
import Alumno from './components/Alumno.jsx'
import Navbar from './components/Navbar.jsx'
import Shop from './components/Shop.jsx'

function App() {

  const alumnos = [
    {
      nombre:'Mateo', nota:10
    },
    {
      nombre:'Mateo', nota:10
    },
    {
      nombre:'Luis', nota:8
    },
    {
      nombre:'Ignacio', nota:9
    },
    {
      nombre: 'Agostina', nota: 10
    },
  ]

  return (
    <>
      <Navbar />
      <Shop/>

      {/* <Alumno nombre='Mateo' nota={10}/>
      <Alumno nombre='Luis' nota={8}/>
      <Alumno nombre='Ignacio' nota={9}/> */}

      {/* {alumnos.map((item, indice) => <Alumno key={indice} alumno={item} />)} */}



    </>
  )
}

export default App

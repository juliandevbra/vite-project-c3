const Alumno = ({alumno}) => {
    const {nombre, nota} = alumno
    return (
        <div>
            <h3>Alumno: {nombre}</h3>
            <h4>Nota: {nota}</h4>
        </div>
    )
}

export default Alumno
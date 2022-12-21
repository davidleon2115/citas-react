
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas,
        id
    } = paciente
    
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar el paciente?')

        if (respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mb-5 mr-3 bg-white bg-opacity-20 shadow-md px-5 py-10 rounded-md">
            <p className="font-bold mb-3 text-sky-400 uppercase">Nombre: {''}
                <span className="font-normal text-gray-300 normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-sky-400 uppercase">Propietario: {''}
                <span className="font-normal text-gray-300 normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-sky-400 uppercase">Email: {''}
                <span className="font-normal text-gray-300 normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-sky-400 uppercase">Fecha Alta: {''}
                <span className="font-normal text-gray-300 normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-sky-400 uppercase">Sintomas: {''}
                <span className="font-normal text-gray-300 normal-case">{sintomas}</span>
            </p>
            <div className="pt-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-sky-400 transition-colors delay-100 ease-in-out hover:bg-sky-500 hover:text-sky-900 text-sky-800 font-bold uppercase rounded-lg mr-5"
                    onClick={ () => setPaciente(paciente) }
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-500 transition-colors delay-100 ease-in-out hover:bg-red-600 text-white font-bold uppercase rounded-lg"
                    onClick={ handleEliminar }
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
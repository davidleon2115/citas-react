import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random  = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return
        }

        setError(false)

        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
        }

        if(paciente.id){
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-gray-300 text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-xl text-gray-300 mt-5 mb-10 text-center">
                Añade Pacientes y {''}
                <span className="text-sky-400 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className={error ? "bg-white border-2 border-red-600 bg-opacity-20 shadow-lg rounded-lg pt-1 pb-10 px-5 mx-5 mb-3" : "bg-white bg-opacity-20 border-2 border-transparent shadow-lg rounded-lg pt-1 pb-10 px-5 mx-5 mb-3"}
                
            >
                <div className='h-7'>
                    {error && <Error> <p> Todos los campos son necesarios </p> </Error>}
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="mascota" 
                        className="block text-sky-400 uppercase font-bold"
                    >
                        Nombre Mascota
                    </label>

                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="focus:outline-none transition-colors ease-in-out delay-100 border-b-2 border-b-transparent focus:border-b-white text-gray-400 w-full p-2 mt-2 bg-transparent shadow-lg placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="propietario" 
                        className="block text-sky-400 uppercase font-bold"
                    >
                        Nombre Propietario
                    </label>

                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="focus:outline-none transition-colors ease-in-out delay-100 border-b-2 border-b-transparent focus:border-b-white text-gray-400 w-full p-2 mt-2 bg-transparent shadow-lg placeholder-gray-400 rounded-md"                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="email" 
                        className="block text-sky-400 uppercase font-bold"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="focus:outline-none transition-colors ease-in-out delay-100 border-b-2 border-b-transparent focus:border-b-white text-gray-400 w-full p-2 mt-2 bg-transparent shadow-lg placeholder-gray-400 rounded-md"                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="alta" 
                        className="block text-sky-400 uppercase font-bold"
                    >
                        Alta
                    </label>

                    <input
                        id="alta"
                        type="date"
                        className="focus:outline-none transition-colors ease-in-out delay-100 border-b-2 border-b-transparent focus:border-b-white text-gray-400 w-full p-2 mt-2 bg-transparent shadow-lg placeholder-gray-400 rounded-md"                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="sintomas" 
                        className="block text-sky-400 uppercase font-bold"
                    >
                        Sintomas
                    </label>

                    <textarea 
                        id="sintomas"
                        className="focus:outline-none transition-colors ease-in-out delay-100 border-b-2 border-b-transparent focus:border-b-white text-gray-400 w-full p-2 mt-2 bg-transparent shadow-lg placeholder-gray-400 rounded-md"                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>
                <input 
                    type="submit" 
                    className="bg-sky-400 transition-colors delay-100 ease-in-out w-full rounded-md p-3 shadow-lg hover:text-sky-900 text-sky-800 uppercase font-bold hover:bg-sky-500 cursor-pointer"
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } 
                />
            </form>
        </div>
    )
}

export default Formulario
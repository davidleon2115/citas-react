import Footer from "./components/Footer"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from 'react'

function App() {
  const initialState = () => JSON.parse(localStorage.getItem('pacientes')) ?? []
  const [pacientes, setPacientes] = useState(initialState())
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="min-h-screen w-full bg-black">
      <div className="container mx-auto">
        <div className="pt-10">
          <Header />
          <div className="md:flex mt-12">
            <Formulario
              pacientes={pacientes}
              setPacientes={setPacientes}
              paciente={paciente}
              setPaciente={setPaciente}
            />
            <ListadoPacientes 
              pacientes={pacientes}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App

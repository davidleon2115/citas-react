import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
            <h2 className="font-black text-gray-300 text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl text-gray-300 mt-5 mb-7 text-center">
              Administra tus {''}
              <span className="text-sky-400 font-bold">Pacientes y Citas</span>
            </p>
            <div className="mt-10">
              { pacientes.map( paciente => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ) ) }
            </div>
        </>
      ): (
        <>
          <h2 className="font-black text-gray-300 text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl text-gray-300 mt-5 mb-7 text-center">
            Comienza agregando pacientes {''}
            <span className="text-sky-400 font-bold">y aparecerán en este lugar :D</span>
          </p>
        </>
      )}
    </div>

  )
}

export default ListadoPacientes
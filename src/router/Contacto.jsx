import { InfoContacto } from "../components"


export const Contacto = () => {
  return (
    <div className='container'>
      <div className="row contacto justify-content-center py-5 mb-5 ">
              <div className="col-12 col-lg-8 p-4 col-contacto animate__animated animate__fadeInRight">
                  <h2 className="title mb-5">Contacto</h2>
                  <InfoContacto className='mt-4' />
              </div>
          </div>

    </div>
  )
}

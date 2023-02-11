import foto from '../assets/img/foto.png'
import { MiInfo, ProgressBar } from '../components'

export const AcercaDe = () => {
  return (
    <div className='container'>
         <div className="row acerca-de align-items-center px-4 mb-5 animate__animated animate__fadeInUp">
                <div className="col-12 col-lg-4 foto text-center" >
                      <img id="foto" src={foto} className="rounded-circle mb-3" alt="" />
                      <p className="name">Nairyn Montiel</p>
                </div>

                <div className="col-12 col-lg-8 info">
                 
                 <MiInfo />

                 <ProgressBar />

                </div>
          </div>
    </div>
  )
}

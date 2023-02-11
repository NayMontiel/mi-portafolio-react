import React, { useContext } from 'react'
import Context from '../context/Context'
import Card from "react-bootstrap/Card";

export const Certificados = () => {

    const { certificado } = useContext(Context);
    console.log(certificado);

  return (
    <>
        <h2 className='text-center titulo mb-3 mt-3'>Mis Certificados</h2>
    <div className="grid-columns-3">
    {certificado.map(item => (
      <Card 
        className="card animate__animated animate__flipInY mb-3 "
        key={item.id}
      >
        <Card.Img variant="top" src={item.image} className="card-img-top" />
        <Card.Body>
          <a href={item.url} target="blank" className="text-decoration-none">
            <h5 className="card-title text-center">{item.title}</h5>
          </a>
        </Card.Body>
      </Card>
    ))}
    </div>
  </>
  )
}

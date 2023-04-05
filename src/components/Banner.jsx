import { Card } from 'react-bootstrap';
import presentation from '../assets/img/presentation.png'

const Banner = () => {
  return (    
    <>
      <div className='banner mt-5 mb-5 '>
        <Card.Img variant="top" className='img rounded' src={presentation} />
      </div>
       
    </>
 
  )
}

export default Banner
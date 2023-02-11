import { Link } from 'react-router-dom';

export const Error404 = () => {
  return (
    <div className="container">
        <h1>404</h1>
        <Link to="/" className='btn btn-outline-danger'>Home</Link>
    </div>
  )
}

 
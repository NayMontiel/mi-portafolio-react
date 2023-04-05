import React from 'react'
import { Link } from 'react-router-dom'

export const BtnCertificados = () => {
  return (
    <div className='mb-5'>
    <Link to='/mis-certificados' className='btn-certificados p-3 px-5 mt-5'> 
      👩‍🎓 Mis Certificados 📜
    </Link>
  </div>
  )
}

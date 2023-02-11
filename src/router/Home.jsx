import React from 'react'
import Banner from '../components/Banner'
import { BtnCertificados } from '../components/BtnCertificados'
import { Carrusel } from '../components/Carrusel'


export const Home = () => {
  return (
    <> 
        <Carrusel />
        <Banner />
        <BtnCertificados />
    </>
  )
}

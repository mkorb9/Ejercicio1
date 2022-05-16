import React, { useEffect, useState } from 'react';
import get from '../api/get';
import Navbar from '../components/Navbar';
import { API_URL } from "../constants";
import Footer from '../components/Footer';
import Boton from '../components/Boton';
import Publicidad from '../components/Publicidad';
import Tags from '../components/Tags';
import Tarjeta from '../components/Tarjeta';
import Titulo from '../components/Titulo';
import { CSSProperties } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getDataFromApi()
  }, []);

  const getDataFromApi = async () => {
    const request = await get(API_URL)
    setArticles(request);
  }

  return (
    <>
      <Navbar />
      <Titulo />
      <Tags />
      <Publicidad />
      <Tarjeta />
      <Boton 
        text={"MAS NOTAS DE ACUMULADO GRILLA"}
        width={300}
        height={50}
        color={"#0074c4"}
        background={"white"}
        font-family={"Arial"}
      />
      <Footer />
    </>
  )
}


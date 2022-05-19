import React, { useEffect, useState } from 'react';
import Boton from '../components/Boton';
import Publicidad from '../components/Publicidad';
import Tags from '../components/Tags';
import List from '../components/List';
import Titulo from '../components/Titulo/Titulo';

export default function Home() {

  return (
    <>

      <Titulo />
      <Tags />
      <List />
      <Boton
        text={"MAS NOTAS DE ACUMULADO GRILLA"}
        width={300}
        height={50}
        color={"#0074c4"}
        background={"white"}
        fontWeight= {"bold"} 


      />



    </>
  )
}


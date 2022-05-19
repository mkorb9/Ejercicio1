import React from 'react';
import Boton from '../Boton';



const Navbar = () => {
  return (<div className='Navbar' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

    <div style={{ display: "flex", justifyContent: "space-around", flex: "1 1 20rem" }}>
      <p>Menu</p>
      <input placeholder='Buscar'></input>
    </div>

    <img src="/images/logo.png" style={{ width: "100px", flex: "1 1 20rem" }}></img>

    <div className='botones-navbar' style={{ flex: "1 1 20rem", justifyContent: "space-evenly" }}>
      <Boton
        text={"Suscribite"}
        width={100}
        color={"#0074c4"}
        background={"#ffff24"}
        fontWeight={"bold"}

      />
      <Boton
        text={"Ingresar"}
        width={100}
        color={"#0074c4"}
        background={"#ffffff"}
        fontWeight={"bold"}
      />
    </div>
  </div>

  );
}

export default Navbar;  
import React from 'react';
import Boton from '../Boton';



const Navbar = () => {
  return (
  <div className='navbar'>
    <div style={{ margin: "auto", display: "flex",  justifyContent: "space-between", alignItems: "center", maxWidth: "1260px"}}>
    <div style={{ display: "flex", justifyContent: "space-around", flex: "1 1 20rem" }}>
      <p>Menu</p>
      <input placeholder='Buscar'></input>
    </div>

    <img src="/images/logo.png" style={{ width: "100px", flex: "1 1 20rem" }}></img>

    <div className='botones-navbar' style={{ flex: "1 1 20rem", justifyContent: "space-evenly" }}>
      <Boton
       text={"SUSCRIBETE"}
        width={100}
        color={"black"}
        background={"#ffff24"}
        fontWeight={"bold"}

      />
      <Boton
      text={"INGRESAR"}
        width={100}
        color={"#0074c4"}
        background={"#ffffff"}
        fontWeight={"bold"}
      />
    </div>
    </div>
  </div>

  );
}

export default Navbar;  
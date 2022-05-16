import React from 'react';

const Boton = ({ text, color, width, height, background }) => {
    return (
        <button style={{ height: height, width: width, color: color, border: "1px solid " + color, background: background }}>{text}</button>
    );
}

export default Boton;
import React from 'react';

const Boton = ({ text, color, width, height, background }) => {
    return (
        <div >
            <button style={{ height: height, width: width, color: color, border: "1px solid " + color, background: background, fontWeight: "bold" }}>{text}</button>
        </div>

    );
}

export default Boton;
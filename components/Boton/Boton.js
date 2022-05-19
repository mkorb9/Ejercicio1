import React from 'react';

const Boton = ({ text, color, width, height, background }) => {
    return (
        <div >
            <button style={{ 
                height: height, 
                width: width, 
                color: color, 
                border: "1px solid " + color, 
                background: background, 
                fontWeight: "bold", 
                borderRadius: "3px",
                textTransform: "uppercase",
                paddingTop: "0.75em",  
                paddingBottom: "0.75em",   
                fontSize: "0.75em"
            }}>{text}</button>
        </div>

    );
}

export default Boton;
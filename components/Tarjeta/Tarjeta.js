import React, { useState } from 'react';

const Tarjeta = (props) => {

    const { article } = props;
    const date = new Date(article.display_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleString('es-ES', options);
    const finalDate = fecha.slice(0, fecha.indexOf('de ', 0) + 3) + fecha[fecha.indexOf('de ', 0) + 3].toUpperCase() + fecha.slice(fecha.indexOf('de ', 0) + 4);

    return (
        <>
            {
                article ? (
                    <div className='content-img' style={{ }}>
                        <div>
                            <img src={article.promo_items.basic.url} style={{ maxWidth: "15rem" }} />
                            <p>{article.headlines.basic}</p>
                            <p style={{ color: "#5a5a5a", marginTop: "0.375em", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>{finalDate}</p>
                        </div>
                       
                    </div>

                )
                    : 'Loading...'
            }

        </>
    )
}

export default Tarjeta;
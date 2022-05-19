import React, { useState } from 'react';

const Tarjeta = (props) => {

    const { article } = props;
    const date = new Date(article.display_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleString('es-ES', options);
    const finalDate = fecha.slice(0, fecha.indexOf('de ', 0) + 3) + fecha[fecha.indexOf('de ', 0) + 3].toUpperCase() + fecha.slice(fecha.indexOf('de ', 0) + 4);

    return (
        <div className="card" style={{ display: "flex", flexDirection: "column", alignContent: "flex-end" }}>
            {
                article ? (
                    <div style={{ paddingRight: "1.5em" }}>
                        <div className='content-img' style={{ display: "block" }}>
                            <picture className='picture-card' style={{ maxWidth: "100%", maxHeight: "10em", minHeight: "10em" }}>
                                <img src={article.promo_items.basic.url} style={{ maxWidth: "100%", maxHeight: "100%" }}/>  
                            </picture>
                        </div>
                        <div>
                            <h2 className="card-title">{article.headlines.basic}</h2>
                            <h4 className='card-date'>{finalDate}</h4>
                        </div>
                    </div>
                )
                    : 'Loading...'
            }

        </ div>
    )
}

export default Tarjeta;
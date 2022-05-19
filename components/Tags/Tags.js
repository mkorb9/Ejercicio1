import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/global';
import Link from 'next/link';

const Tags = () => {
    const [top10, setTop10] = useState([]);
    const { tags } = useContext(GlobalContext);

    useEffect(() => {
        function getTop10 (){
            let aux = [];
            for(let i = 0; i < 10; i++) {
                aux = [...aux, tags[i]];
                setTop10(aux)
            }
        }
        if(tags.length > 0) getTop10();
    },[tags]) 

    return(
        <>
            {
                top10.map(tag => (
                    <Link href={`/tema/${tag.slug}`} key={tag.slug}>
                        <a class='tags'>{tag.text}</a>

                    </Link>
                  
                ))
            }
        </>
    )
}
 
export default Tags;
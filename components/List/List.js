import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/global";
import Tarjeta from "../Tarjeta";


const List = () => {
    const [articles7, setArticles7] = useState([]);
    const { articles } = useContext(GlobalContext);

    useEffect(() => {
        function filterArticlesBySubtype(){
            const data = articles.filter(article => parseInt(article.subtype) === 7)
            setArticles7(data)
        }
        filterArticlesBySubtype();
    },[articles])

    return(
        <div style={{ 
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridColumnGap: "2,5em",
                gridRowGap: "2.5em"
            }}>
            {
                articles7.map(art => 
                    <Tarjeta article={art} key={art._id}/>

                )
            }
        </ div>
    )
}

export default List;
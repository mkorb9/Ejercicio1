import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [articles, setArticles] = useState([]);
    const [tags, setTags] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch('/api/getData');
            const data = await response.json();
            setArticles(data);
        }
        getData();
    },[])

    useEffect(() => {
        sortTags();
    },[articles])

    const sortTags = () => {
        const aux = extractTags();
        const counts = count(aux);
        const countTags = deleteDuplicated(aux, counts);
        countTags.sort((a, b) => parseInt(b.count) - parseInt(a.count))
        setTags(countTags);
    }

    const count = (arr) => {
        const counts = arr.reduce((val, cur) => {
            val[cur.slug] = val[cur.slug] ? val[cur.slug] + 1 : 1;
            return val;
        },{})
        return counts;
    }

    const deleteDuplicated = (arr, counts) => {
        const countTags = [];
        arr.forEach(tag => {
            if(!countTags.some(t => t.slug === tag.slug)) {
                countTags.push({
                    slug: tag.slug,
                    text: tag.text, 
                    count: counts[tag.slug]
                })
            }
        })
        return countTags;
    }

    const extractTags = () => {
        const aux = [];
        articles.forEach(art => {
            art.taxonomy.tags.forEach(tag => {
                if(tag != null) aux.push(tag);
            })
        })
        return aux;
    }

    return(
        <>
            <GlobalContext.Provider value={{articles, tags}}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}

export default GlobalProvider;
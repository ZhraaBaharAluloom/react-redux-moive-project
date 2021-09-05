import { useEffect, useState } from 'react';

// take in the url
const useMoviesFetch = (url) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);
 

    // Fetching Data
    useEffect(() => {
      const ac = new AbortController();
        try {
          const fetchData = async () => {
            await fetch(url)
              .then(res => res.json())
              .then((res) => {
              setData(res);
              setIsLoaded(true);
            });
          };
          fetchData();
        } catch (error) {
          console.log('🚀 ~ file: useMovieFetch.js ~ line 20 ~ useEffect ~ error', error);
    
        }
        return () => ac.abort(); 
      }, [url]);
    
    return { data, isLoaded };
};


export default useMoviesFetch;
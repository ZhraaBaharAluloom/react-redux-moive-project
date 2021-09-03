import React, {createContext, useState} from 'react'
import PropTypes from 'prop-types';


export const GenreContext = createContext();

export const GenreProvider = ({children = []})=>{
    const [genre, setGenre] = useState(null);

    return(
        <GenreContext.Provider value={[genre, setGenre]}>
            {children}
        </GenreContext.Provider>
    )
    
}
GenreProvider.propTypes = {
    children: PropTypes.node.isRequired   
  }
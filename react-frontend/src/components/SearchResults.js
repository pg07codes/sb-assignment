/*created by Pranav Gupta(pg07codes) on 6/12/18*/

import React from 'react'
import StudentCard from './StudentCard'

function SearchResults(props){
    if(props.students.length===0)
        return(
            <div className="alert alert-danger" role="alert">
                No Results Found! Try Again.
            </div>
        )
    else{
        let results=props.students.map(s=><StudentCard sInfo={s}/>)
        return(
            <div className="row m-1">
                {results}
            </div>
        )

    }
}

export default SearchResults
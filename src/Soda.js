import React from "react";
import {Link} from 'react-router-dom'

function Soda () {
    console.log('soda')
    return (
        <div>
            <h1>This is Soda</h1>
            <Link exact="true" to="/">Go Back</Link>
        </div>
    )
}

export default Soda

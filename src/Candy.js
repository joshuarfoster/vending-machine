import React from "react";
import {Link} from 'react-router-dom'

function Candy () {
    return (
        <div>
            <h1>This is Candy</h1>
            <Link exact="true" to="/">Go Back</Link>
        </div>
    )
}

export default Candy
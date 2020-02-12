import React from 'react'
import SingleLineGridList from './SingleLineGridList'

function UserOut(props) {
    let display = props.loading ? <p>Loading data...</p> :
        <div>
            <h3>Animes by Rating:</h3>
            <SingleLineGridList style={{textAlign: "center"}} data={props.data.rating}/>
            <br />
            <br />
            <br />
            <h3>Animes by Number of Members:</h3>
            <SingleLineGridList style={{textAlign: "center"}} data={props.data.members}/>
            <br />
        </div>
    return (
        <div>
            {display}
        </div>
    )
}

export default UserOut
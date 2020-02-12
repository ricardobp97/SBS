import React from 'react'
import SingleLineGridList from './SingleLineGridList'

function UserIn(props) {
    let first = props.data.first
    let first_data = props.data[first]
    let second = props.data.second
    let second_data = props.data[second]
    let third = props.data.third
    let third_data = props.data[third]
    let fourth = props.data.fourth
    let fourth_data = props.data[fourth]

    first = first.substring(0, 1).toUpperCase() + first.substring(1,first.length)
    second = second.substring(0, 1).toUpperCase() + second.substring(1,second.length)
    //third = third.substring(0, 1).toUpperCase() + third.substring(1,third.length)

    let display = props.loading ? <p>Loading data...</p> :
        <div>
            <h3>Based on {fourth === 'rating' ? 'Rating' : 'Association Rules'}:</h3>
            <SingleLineGridList style={{textAlign: "center"}} data={fourth_data}/>
            <br />
            <br />
            <br />
            <h3>{first}:</h3>
            <SingleLineGridList style={{textAlign: "center"}} data={first_data}/>
            <br />
            <br />
            <br />
            <h3>{second}:</h3>
            <SingleLineGridList style={{textAlign: "center"}} data={second_data}/>
            <br />
            <br />
            <br />
            <h3>{third === 'sci_fi' ? 'Sci Fi' : (third === 'slice_of_life' ? 'Slice of Life' : (third === 'action' ? 'Action' : (third === 'drama' ? 'Drama' : (third === 'comedy' ? 'Comedy' : (third === 'fantasy' ? 'Fantasy' : (third === 'school' ? 'School' : (third === 'romance' ? 'Romance' : (third === 'adventure' ? 'Adventure' : (third === 'music' ? 'Music' : third )))))))))}:</h3>
            <SingleLineGridList style={{textAlign: "center"}} data={third_data}/>
            <br />
        </div>

    return (
        <div>
            {display}
        </div>
    )
}

export default UserIn
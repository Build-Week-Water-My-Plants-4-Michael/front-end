import React from 'react'
import { connect } from 'react-redux'
import { deletePlant } from '../actions'

const GetPlant = props => {

    const _delete = (id) => {
        console.log("clicked")
        props.deletePlant(id)
    }

    return (
            <div className="plant card teal darken-3">
                    <div className="card-image">
                        <img src="https://gearpatrol.com/wp-content/uploads/2019/01/10-Best-Indoor-Plants-Gear-Patrol-lead-full.jpg" alt={props.species}/>
                        {
                        
                        }
                        <a href={`view/${props.id}`}><span className="card-title">
                            {props.nickname}
                        </span></a>
                    </div>
                    <div className="card-content">
                        <ul>
                            <li>Species: {props.species}</li>
                            <li>H2O Frequency{props.h2oFrequency}</li>
                            <br />
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <a onClick={() => { _delete(props.id) }}>Delete Plant</a>
                    
                        <a href={`update/${props.id}`}>Update Plant</a>
                    </div>
            </div>
    )
}

export default connect(null, {deletePlant}) (GetPlant)
import React from 'react'

const GetPlant = props => {
    return (
        <div className="plant">>
            <div className="card teal darken-3">
                <div className="card-image">
                    <img src={props.image} />
                    <span className="card-title">
                        {props.name}
                    </span>
                    <div className="card-content">
                        <ul>
                            <li>{props.id}</li>
                            <li>{props.species}</li>
                            <li>{props.h20Frequency}</li>
                        </ul>
                    </div>
                    <div classNAme="card-action">
                        <a href="#">View Plant</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default GetPlant
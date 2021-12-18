import React from 'react'
import Circle from "./Circle";

const Wrap =() =>{
    return(
        <div className='container mt-5'>
            <div className='row justify-content-center align-items-center'>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-1">
                    <Circle/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-1">
                    <Circle/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-1">
                    <Circle/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-1">
                    <Circle/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-1">
                    <Circle/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-1">
                    <Circle/>
                </div>
            </div>
        </div>
    )
}
export default Wrap;
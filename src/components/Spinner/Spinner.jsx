import React from 'react'
import spinnerImage from '../../assets/img/image.gif'

const Spinner = () => {
    return (
        <React.Fragment>
            <div>
                <img alt='spinner' src={spinnerImage} className='d-block m-auto' style={{width:'200px'}} />
            </div>
        </React.Fragment>
    )
}

export default Spinner;
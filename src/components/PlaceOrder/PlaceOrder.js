import React from 'react';
import image from '../../images/giphy.gif'

const PlaceOrder = () => {
    const imgStyle = {
        textAlign: 'center'
    }
    return (

        <div>
            <img style={imgStyle} src={image} alt="" />
        </div>
    );
};

export default PlaceOrder;
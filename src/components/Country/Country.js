import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props.country);
    const { area, region, name, flags } = props.country;


    return (
        <div className='color'>
            <h1>Area:{area}</h1>
            <img src={flags.png} alt="" />
            <h2>Region:{region}</h2>
            <p>Name:{name.common}</p>



        </div>
    );
};

export default Country;
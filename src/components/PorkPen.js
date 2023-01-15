import React, { useState } from 'react';
import HogTile from './HogTile';
import Filter from './Filter';
import Form from './Form';

function PorkPen ({hogs}) {
    const [hogsArray, setHogsArray] = useState(hogs);
    const [filteredPigs, setFilteredPigs] = useState(hogsArray);

    const handleHogsArray = (array) => {
        setFilteredPigs(array);
    }

    const onFormSubmit = (hogObject) => {
        setHogsArray(prevArray => [...prevArray, hogObject]);
        setFilteredPigs(prevArray => [...prevArray, hogObject]);
    }

    const piggies = filteredPigs.map(pig => {
        return (
            <HogTile className="ui eight wide column" key={pig.name}
                     pig={pig}/>
        )
    })

    return (
        <div className=''>
            <div className='ui grid container'>
                <Filter hogs={hogsArray}  handleHogsArray={handleHogsArray}/>
                <Form onFormSubmit={onFormSubmit}/>
                <div>{piggies}</div>
            </div>
        </div>
        
    );
};

export default PorkPen;
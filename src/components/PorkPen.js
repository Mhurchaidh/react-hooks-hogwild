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
            <div className='pigTile'>
                <HogTile key={pig.name} pig={pig}/>
            </div>
        )
    })

    return (
        <div>
            <div>
                <Filter hogs={hogsArray}  handleHogsArray={handleHogsArray}/>
                <Form onFormSubmit={onFormSubmit}/>
                <div className='ui grid container'>{piggies}</div>
            </div>
        </div>
        
    );
};

export default PorkPen;
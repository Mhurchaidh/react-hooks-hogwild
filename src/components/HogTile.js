import React, { useState } from 'react';
import HogDetails from './HogDetails';

function HogTile ({pig}) {

    const [currentPig, setCurrentPig] = useState(false)
    const [hidePig, setHidePig] = useState(false);
    
    const handleClick = () => {
        setCurrentPig(!currentPig);
    }

    const handleHide = () => {
        setHidePig(!hidePig);
    }

    return (
        <div name={pig.name}>
            <div onClick={hidePig? null : handleClick}>
                <h3 className='smallHeader' >{pig.name} </h3>
                {hidePig? null : <img className="minPigTile" src={pig.image}/>}
                {currentPig ? <HogDetails pig={pig}/> : null}
            </div>
            <button className="subtleText" onClick={handleHide}>{hidePig? "Show" : "Hide"}</button>
        </div>
    );
}

export default HogTile;
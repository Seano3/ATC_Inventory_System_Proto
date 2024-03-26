import React, { useState, useEffect } from 'react';
import { updateLocation } from '../../Database/DatabaseInteractions';
import './CSS/Public.css'


const Public = () => {

    const [ATID, setATID] = useState('');
    const [Loco, setLoco] = useState('');

    const handleATChange = (event) => {
        setATID(event.target.value);
    };

    const handleLocoChange = (event) => {
        setLoco(event.target.value);
    };

    const update = () => {
        updateLocation(ATID, Loco);
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const ATIDParam = urlParams.get('ATIDParam'); //http://localhost:3000/?ATIDParam=(PUT ID HERE)
        console.log(ATIDParam);
        if (ATIDParam) {
            setATID(ATIDParam);
        }
    }, []);

    return (
        <div>
            <body>
                <h1>Move AT</h1>
                <label>Enter AT ID: </label>
                <input
                    type="text"
                    value={ATID} // Step 3: Set the value of the input to the state variable
                    onChange={handleATChange} // Step 4: Update the state variable on input change
                />
                <label>         Enter New Location: </label>
                <input
                    type="text"
                    value={Loco} // Step 3: Set the value of the input to the state variable
                    onChange={handleLocoChange} // Step 4: Update the state variable on input change
                />
                <button onClick={update()} id='fmlButton'>
                Update
                </button>
            </body>
        </div>
    );
};

export default Public;
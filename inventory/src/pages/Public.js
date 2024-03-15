import React, { useState } from 'react';

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
        
    }

    return(    
        <div>
            <h1>Public</h1>
            <label>Enter AT ID: </label>
            <input
                type="text"
                value={ATID} // Step 3: Set the value of the input to the state variable
                onChange={handleATChange} // Step 4: Update the state variable on input change
            />
            <label>Enter New Location: </label>
            <input
                type="text"
                value={Loco} // Step 3: Set the value of the input to the state variable
                onChange={handleLocoChange} // Step 4: Update the state variable on input change
            />
            <button onClick={update()}>
                Update
            </button>
        </div>
    );
};

export default Public;
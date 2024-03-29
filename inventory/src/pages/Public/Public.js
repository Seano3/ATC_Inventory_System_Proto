import React, { useState, useEffect } from 'react';
import { updateLocation } from '../../Database/DatabaseInteractions';
import Select from 'react-select';
import './CSS/Public.css'


const Public = () => {

    const [ATID, setATID] = useState('');
    const [Loco, setLoco] = useState('');
    const [pgrm, setPgrm] = useState('');

    const handleATChange = (event) => {
        setATID(event.target.value);
    };

    const handlePrgmChange = (event) => {
        setPgrm(event.target.value);
    };

    const handleLocoChange = (event) => {
        setLoco(event.target.value);
    }

    const update = () => {
        console.log("Moving " + ATID + " to " + Loco);
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

    const locations = {
        "CRS": [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],

        "TCS": [
            { value: 'Steak', label: 'Steak' },
            { value: 'Pork', label: 'Pork' },
            { value: 'Chicken', label: 'Chicken' }
        ]
    }

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
                <select onChange={handlePrgmChange} value={pgrm}>
                    <option value="">Select Program</option>
                    <option value="CRS">CRS</option>
                    <option value="TCS">TCS</option>
                </select>

                <select onChange={handleLocoChange} value={Loco} disabled={pgrm === ""}>
                    <option value="">Select House</option>
                    {pgrm === "CRS" && (
                        <>
                            <option value="1800">1800</option>
                            <option value="1802">1802</option>
                            <option value="1820">1820</option>
                            <option value="1824">1824</option>
                            <option value="1830">1830</option>
                            <option value="1848">1848</option>
                            <option value="1849">1849</option>
                            <option value="1858">1858</option>
                            <option value="1859">1859</option>
                            <option value="1826">1826</option>
                            <option value="1827">1827</option>
                            <option value="1828">1828</option>
                            <option value="1803">1803</option>
                            <option value="1821">1821</option>
                            <option value="1854">1854</option>
                            <option value="1857">1857</option>
                            <option value="1861">1861</option>
                            <option value="1888">1888</option>
                            <option value="1890">1890</option>
                            <option value="1895">1895</option>
                            <option value="1896">1896</option>
                            <option value="1862">1862</option>
                            <option value="1860">1860</option>
                            <option value="1870">1870</option>
                            <option value="1804">1804</option>
                            <option value="1814">1814</option>
                            <option value="1815">1815</option>
                            <option value="1816">1816</option>
                            <option value="1817">1817</option>
                            <option value="1818">1818</option>
                            <option value="1819">1819</option>
                            <option value="1864">1864</option>
                            <option value="1868">1868</option>
                            <option value="1885">1885</option>
                            <option value="1899">1899</option>

                        </>
                    )}
                    {pgrm === "TCS" && (
                        <>
                            <option value="California">California</option>
                            <option value="Texas">Texas</option>
                            <option value="New York">New York</option>
                        </>
                    )}
                </select>

                <button onClick={update()} id='fmlButton'>
                    Update
                </button>
            </body>
        </div>
    );
};

export default Public;
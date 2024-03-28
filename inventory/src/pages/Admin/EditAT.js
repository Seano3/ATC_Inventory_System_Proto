import "./CSS/EditAT.css"
import React, { useEffect } from 'react';


const EditAT = () => {

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const ATIDParam = urlParams.get('ATIDParam'); 
        console.log(ATIDParam);
        if (ATIDParam) {
            
        }
    }, []);


    return(
        <h1>EditAT</h1>
    );
};

export default EditAT; 
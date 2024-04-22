import "./CSS/EditAT.css"
import React, { useEffect, useState, useRef } from 'react';
import { getAT } from '../../Database/DatabaseInteractions';
import QRCode from "react-qr-code";
import * as htmlToImage from 'html-to-image';


const EditAT = () => {
    const qrCodeRef = useRef(null);

    const [ATID, setATID] = useState('');
    const [ATtype, setATType] = useState('');
    const [powerType, setPowerType] = useState('');
    const [batteryType, setBatteryType] = useState('');
    const [batteryDate, setBatteryDate] = useState('');
    const [location, setLocation] = useState('');
    const [originationDate, setOriginationDate] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [notes, setNotes] = useState('');

    const handleATIDChange = (event) => {
        setATID(event.target.value);
    };

    const handleATTypeChange = (event) => {
        setATType(event.target.value);
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const param = urlParams.get('param');
        console.log(param);
        if (param) {
            let item = getAT(param);
            setATID(param);
             setATType(item.ATtype);
             setPowerType(item.Type);
             setBatteryType(item.BatteryType);
             setBatteryDate(item.BatteryDate);
             setLocation(item.Location);
             setOriginationDate(item.OriginationDate);
             setSerialNumber(item.SeralNumber);
             setMake(item.Make);
             setModel(item.Model);
             setNotes(item.Notes);
        }
    }, []);

    const downloadQRCode = () => {
        htmlToImage.toPng(qrCodeRef.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'qr-code.png';
                link.click();
            })
            .catch((error) => {
                console.error('Error generating QR code:', error);
            });
    };


    return (
        <div>
            <h1>EditAT</h1>
            <label>Enter AT ID: </label>
            <input
                type="text"
                value={ATID} 
                onChange={handleATIDChange} 
            />
            <div ref={qrCodeRef} id="QRCode">
                <QRCode value={`https://youthful-butterfly.static.domains/?ATIDParam=${ATID}`} />
            </div>
            <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
    );
};

export default EditAT; 
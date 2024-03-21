import csvData from './database.JSON';
import React, { useState } from 'react';

export const updateLocation = (id, newLocation) => { 
    //csvData.find(item => item.ID === id).Location = newLocation;
}

export function updateATInfo(JSON) {

}

export function addNewAT(JSON) {

}

export function deleteAT(ID) {

}

export function getAT(ID) {

}

export function getDatabase() {
    return fetch(csvData)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
}

